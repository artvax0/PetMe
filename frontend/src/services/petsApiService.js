import axios from "axios";

const apiUrl = 'http://localhost:8181/pets/';

export const getPets = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw error;
  }
}

export const getPet = async (id) => {
  try {
    return await axios.get(apiUrl + id);
  } catch (error) {
    throw error;
  }
}