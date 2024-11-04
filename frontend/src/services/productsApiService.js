import axios from "axios";

const apiUrl = 'http://localhost:8181/products/';

export const getProducts = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw error;
  }
}

export const getProduct = async (id) => {
  try {
    return await axios.get(apiUrl + id);
  } catch (error) {
    throw error;
  }
}