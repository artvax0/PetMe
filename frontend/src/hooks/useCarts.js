import { useState } from "react";
import useAxios from "./useAxios";
import { addCart, getCart } from "../services/cartsApiService";

export default function useCarts() {
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useAxios();

  const getUserCart = async (userId) => {
    setIsLoading(true);
    try {
      const { data } = await getCart(userId);
      setCart(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  const addProductToCart = async (e, userId, productInfo) => {
    setIsLoading(true);
    e.target.disabled = true;
    e.target.label = 'Adding to cart...';
    try {
      await addCart(userId, productInfo);
      console.log('Added product: ', productInfo.product_id, ' to cart')
      // set snack to successful
    } catch (error) {
      setError(error)
    }
    setIsLoading(false);
    e.target.label = 'Add to cart';
    e.target.disabled = false;
  }

  const updateQuantity = async (userId, productInfo) => {
    setIsLoading(true);
    try {
      await addCart(userId, productInfo);
    } catch (error) {
      console.warn(error)
      setError(error);
    }
    setIsLoading(false);
  }
  return { cart, isLoading, error, getUserCart, addProductToCart, updateQuantity };
}
