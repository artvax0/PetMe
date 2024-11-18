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

export const newProduct = async (product) => {
  try {
    console.log(JSON.stringify(product));
    return await axios.post(apiUrl, product);
  } catch (error) {
    throw error;
  }
}