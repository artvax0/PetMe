import { useCallback, useState } from "react";
import { getProduct, getProducts } from "../services/productsApiService";
import { getCategories } from "../services/categoriesApiService";

export default function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      // fetch all categories and products and update state
      const categoriesResponse = await getCategories();
      const productsResponse = await getProducts();
      setCategories(categoriesResponse.data);
      setAllProducts(productsResponse.data);

      // immediately group them up accordingly
      const groupedProducts = categoriesResponse.data.reduce((acc, category) => {
        acc[category._id] = [];
        return acc;
      }, {})
      // insert products by categories
      productsResponse.data.forEach(product => {
        if (groupedProducts[product.category_id]) {
          groupedProducts[product.category_id].push(product);
        }
      })

      // update categories state
      setProductsByCategory(groupedProducts)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [categories, allProducts]);

  const getProductById = useCallback(async (id) => {
    setIsLoading(true)
    try {
      const { data } = await getProduct(id);
      setProduct(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, [])

  return { getAllProducts, getProductById, allProducts, product, categories, productsByCategory, error, isLoading };
}