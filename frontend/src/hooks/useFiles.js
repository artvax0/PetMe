import { useState } from 'react'
import useAxios from './useAxios';
import { uploadFile } from '../services/fileApiService';

export default function useFiles() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useAxios();

  const setupFileUpload = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await uploadFile(formData);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return { isLoading, error, setupFileUpload };
}
