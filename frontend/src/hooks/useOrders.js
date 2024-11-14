import { useState } from "react";
import useAxios from "./useAxios";
import { getUserOrders, newOrder } from "../services/orderApiService";

export default function useOrders() {
  useAxios();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const newUserOrder = async (userId, orderInfo) => {
    setIsLoading(true);
    try {
      const { data } = await newOrder(userId, orderInfo);
      setOrder(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  const listUserOrders = async (userId) => {
    setIsLoading(true);
    try {
      const { data } = await getUserOrders(userId);
      setOrders(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return { orders, order, isLoading, error, newUserOrder, listUserOrders };
}
