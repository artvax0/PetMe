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

export const getUserData = async (userId) => {
  try {
    return await axios.get(apiUrl + userId);
  } catch (error) {
    throw error;
  }
}

export const updateUser = async (userId, userInfo) => {
  try {
    return await axios.put(apiUrl + userId, userInfo);
  } catch (error) {
    throw error;
  }
}

export const getUsers = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw error;
  }
}

export const employUser = async (userId) => {
  try {
    return await axios.patch(apiUrl + `employee/${userId}`);
  } catch (error) {
    throw error;
  }
}