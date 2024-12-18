import { useCallback, useEffect, useMemo, useState } from "react";
import { editProduct, getProduct, getProducts, newProduct, updateStock } from "../services/productsApiService";
import { getCategories } from "../services/categoriesApiService";
import useAxios from "./useAxios";
import normalizeNewProduct from "../helpers/normalization/normalizeNewProduct";
import normalizeProduct from "../helpers/normalization/normalizeProduct";
import { useSnack } from "../providers/SnackbarProvider";
import { useSearchParams } from "react-router-dom";

export default function useProducts() {
  const snack = useSnack();
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  useAxios();

  const getAllProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      // fetch all categories and products and update state
      const categoriesResponse = await getCategories();
      const productsResponse = await getProducts();

      setCategories(categoriesResponse.data);
      setAllProducts(productsResponse.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const search = searchParams.get('q')?.trim().toLowerCase() || '';

    const filteredProducts = allProducts.filter(product => product.name.trim().toLowerCase().includes(search));

    // immediately group them up accordingly
    const groupedProducts = categories.reduce((acc, category) => {
      acc[category._id] = [];
      return acc;
    }, {});

    // insert products by categories
    filteredProducts.forEach(product => {
      if (groupedProducts[product.category_id]) {
        groupedProducts[product.category_id].push(product);
      }
    })

    // update categories state
    setProductsByCategory(groupedProducts);

  }, [searchParams, allProducts, categories])

  const getProductById = useCallback(async (id) => {
    setIsLoading(true)
    try {
      const { data } = await getProduct(id);
      setProduct(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }, []);

  const addNewProduct = useCallback(async (product) => {
    setIsLoading(true);
    try {
      const normalizedProduct = normalizeNewProduct(product);
      const { data } = await newProduct(normalizedProduct);
      setIsLoading(false);
      snack('Product added successfully');
      return data;
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to add product, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  })

  const updateProduct = useCallback(async (productId, product) => {
    setIsLoading(true);
    try {
      const normalizedProduct = normalizeProduct(product);
      await editProduct(productId, normalizedProduct);
      snack('Product updated successfuly');
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to update product, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  })

  const editStock = useCallback(async (productId, stock) => {
    setIsLoading(true);
    try {
      await updateStock(productId, stock);
      snack('Stock updated');
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to update stock, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  })

  return { getAllProducts, getProductById, allProducts, addNewProduct, updateProduct, editStock, product, categories, productsByCategory, error, isLoading };
}