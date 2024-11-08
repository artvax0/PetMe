import { createContext, useContext, useEffect, useState } from "react";
import { getToken, getUser } from "../services/storageService";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [userToken, setUserToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const storedUser = getUser();
      if (storedUser) setUser(storedUser);
    }
  }, [user])

  const ctx = { user, setUser, userToken, setUserToken };
  return (
    <UserContext.Provider value={ctx}>
      {children}
    </UserContext.Provider>)
}

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within provider')
  }
  return context;
}