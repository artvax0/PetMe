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
    return await axios.post(apiUrl, product);
  } catch (error) {
    throw error;
  }
}

export const editProduct = async (productId, product) => {
  try {
    return await axios.put(apiUrl + productId, product);
  } catch (error) {
    throw error;
  }
}

export const deleteProduct = async (productId) => {
  try {
    return await axios.delete(apiUrl + productId);
  } catch (error) {
    throw error;
  }
}