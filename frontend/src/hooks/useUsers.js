import { employUser, getUserData, getUsers, login, signup, updateUser } from "../services/userApiService"
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../routes/routesModel";
import { useCallback, useState } from "react";
import { getUser, saveToken } from "../services/storageService";
import { useAuth } from "../providers/UserProvider";
import useAxios from "./useAxios";
import { useSnack } from "../providers/SnackbarProvider";

export default function useUsers() {
  const snack = useSnack();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const { setUser, setUserToken } = useAuth();
  useAxios();

  const userSignup = useCallback(async (userInfo, e) => {
    setIsLoading(true);
    try {
      await signup(normalizeUser(userInfo));
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError(error.response.data)
      snack(error.response.data, 'error');
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
      setError(error.response.data);
      snack(error.response.data, 'error');
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
      setError(error.response.data);
    }
    setIsLoading(false);
  })

  const updateUserInfo = useCallback(async (userId, userInfo) => {
    setIsLoading(true);
    try {
      const { data } = await updateUser(userId, userInfo);
      setUserData(data);
      snack('Successfully updated user info');
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to update user info, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  })

  const getAllUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getUsers();
      setUsers(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  })

  const updateUserEmployment = useCallback(async (userId) => {
    setIsLoading(true);
    try {
      await employUser(userId);
      snack('Successfully updated user employment');
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to update user employment, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  })

  return { userSignup, userLogin, getUserInfo, updateUserInfo, isLoading, error, userData, users, getAllUsers, updateUserEmployment };
}
