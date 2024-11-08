import { jwtDecode } from 'jwt-decode'
const TOKEN = 'petmetoken';

export const saveToken = (token) => localStorage.setItem(TOKEN, token);

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const userToken = getToken();
    return jwtDecode(userToken);
  } catch (error) {
    return null;
  }
}