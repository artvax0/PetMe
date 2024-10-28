import { useCallback, useState } from "react";
import { getProducts } from "../services/productsApiService";
import { Product } from "../interfaces/product";
import { AxiosResponse } from "axios";

export default function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAllProducts = useCallback(async () => {
    try {
      const response : AxiosResponse<Product[]> = await getProducts();
      if (response.status >= 200 && response.status < 400) {
        setAllProducts(response.data);
      }
    } catch (error) {
      const err = (error as Error).message;
      setError(err);
    }
    setIsLoading(false);
  }, []);

  return { getAllProducts, allProducts, error, isLoading };
}
