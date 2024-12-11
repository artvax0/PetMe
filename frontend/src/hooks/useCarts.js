import { useState } from "react";
import useAxios from "./useAxios";
import { addCart, getCart } from "../services/cartsApiService";
import { useSnack } from "../providers/SnackbarProvider";

export default function useCarts() {
  const snack = useSnack();
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
      snack('Added product to cart');
    } catch (error) {
      setError(error);
      snack(`Failed to add product to cart, ${error}`, 'error');
    }
    setIsLoading(false);
    e.target.label = 'Add to cart';
    e.target.disabled = false;
  }

  const updateQuantity = async (userId, productInfo) => {
    setIsLoading(true);
    try {
      await addCart(userId, productInfo);
      snack('Updated cart stock');
    } catch (error) {
      setError(error);
      snack(`Failed to add product to cart, ${error}`, 'error');
    }
    setIsLoading(false);
  }
  return { cart, isLoading, error, getUserCart, addProductToCart, updateQuantity };
}
