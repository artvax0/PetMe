import axios from 'axios';

const apiUrl = 'http://localhost:8181/users/';

export const signup = async (userInfo) => {
  try {
    return await axios.post(apiUrl, userInfo);
  } catch (error) {
    throw error;
  }
}

export const login = async (userInfo) => {
  try {
    return await axios.post(apiUrl + '/login', userInfo);
  } catch (error) {
    throw error;
  }
}