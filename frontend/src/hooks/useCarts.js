import { useState } from "react";
import useAxios from "./useAxios";
import { getCart } from "../services/cartsApiService";

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

  return { cart, isLoading, error, getUserCart };
}
