import axios from "axios";

const apiUrl = 'http://localhost:8181/categories/';

export const getCategories = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw error;
  }
}