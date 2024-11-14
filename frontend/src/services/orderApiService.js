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