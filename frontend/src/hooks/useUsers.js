import { getUserData, login, signup } from "../services/userApiService"
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../routes/routesModel";
import { useCallback, useState } from "react";
import { getUser, saveToken } from "../services/storageService";
import { useAuth } from "../providers/UserProvider";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const { setUser, setUserToken } = useAuth();

  const userSignup = useCallback(async (userInfo, e) => {
    setIsLoading(true);
    try {
      await signup(normalizeUser(userInfo));
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError(error)
    }
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
    setIsLoading(false);
  }, []);

  const userLogin = useCallback(async (userInfo, e) => {
    setIsLoading(true);
    try {
      const { data } = await login(userInfo);
      saveToken(data);
      setUserToken(data);
      setUser(getUser);
      navigate(ROUTES.ROOT);
    } catch (error) {
      setError(error);
    }
    e.target.disabled = false;
    e.target.classList.toggle('Mui-disabled');
    setIsLoading(false);
  });

  const getUserInfo = useCallback(async (userId) => {
    setIsLoading(true);
    try {
      const { data } = await getUserData(userId);
      setUserData(data);
      setIsLoading(false)
      return data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  })

  return { userSignup, userLogin, getUserInfo, isLoading, error, userData };
}
