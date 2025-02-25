import axios from "axios";

const apiUrl = 'http://localhost:8181/orders/';

export const newOrder = async (userId, orderInfo) => {
  try {
    return await axios.post(apiUrl + userId, orderInfo);
  } catch (error) {
    throw error;
  }
}

export const getUserOrders = async (userId) => {
  try {
    return await axios.get(apiUrl + '/user/' + userId);
  } catch (error) {
    throw error;
  }
}

export const getOrder = async (orderId) => {
  try {
    return await axios.get(apiUrl + orderId);
  } catch (error) {
    throw error;
  }
}

export const getOrders = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw error;
  }
}

export const setStatus = async (orderId, status) => {
  try {
    return await axios.patch(apiUrl + orderId, status);
  } catch (error) {
    throw error;
  }
}