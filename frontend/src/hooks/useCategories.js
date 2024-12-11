import { useState } from 'react'
import { getCategories } from '../services/categoriesApiService';

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getAllCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  return { categories, isLoading, error, getAllCategories };
}
