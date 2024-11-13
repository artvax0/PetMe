import axios from "axios";

const apiUrl = 'http://localhost:8181/orders/';

export const newOrder = async (userId, orderInfo) => {
  try {
    return await axios.post(apiUrl + userId, orderInfo);
  } catch (error) {
    throw error;
  }
}