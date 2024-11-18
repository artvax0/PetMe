import axios from "axios";

const apiUrl = 'http://localhost:8181/upload/';

export const uploadFile = async (formData) => {
  try {
    return await axios.post(apiUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  } catch (error) {
    throw error;
  }
}