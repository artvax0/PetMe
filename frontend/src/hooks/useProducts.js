import { useCallback, useState } from "react";
import { getProducts } from "../services/productsApiService";
import { getCategories } from "../services/categoriesApiService";

export default function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProducts();
      setAllProducts(response.data);
      return response.data
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const getAllProducts = useCallback(async () => {
    try {
      await fetchCategories();
      const products = await fetchProducts();

      const groupedProducts = categories.reduce((accumilator, category) => {
        accumilator[category._id] = allProducts.filter(product => product.category_id == category._id);
        return accumilator;
      }, {});

      setProductsByCategory(groupedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return { getAllProducts, allProducts, categories, productsByCategory, error, isLoading };
}
