import axios from 'axios';
import { useEffect } from "react";
import { useAuth } from "../providers/UserProvider";

const AUTH_TOKEN = 'auth-token';

export default function useAxios() {
  const { userToken } = useAuth();

  useEffect(() => {
    axios.defaults.headers.common[AUTH_TOKEN] = userToken;
  }, [userToken])
}
