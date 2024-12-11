import { useState } from 'react'
import useAxios from './useAxios';
import { uploadFile } from '../services/fileApiService';
import { useSnack } from '../providers/SnackbarProvider';

export default function useFiles() {
  const snack = useSnack();
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
      setError(error.response.data);
      snack(`Failed to upload file, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  }

  return { isLoading, error, setupFileUpload };
}
