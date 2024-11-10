import axios from "axios";

const apiUrl = 'http://localhost:8181/carts/';

export const getCart = async (userId) => {
  try {
    return await axios.get(apiUrl + userId);
  } catch (error) {
    throw error;
  }
}