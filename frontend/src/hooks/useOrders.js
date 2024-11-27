import { useState } from "react";
import useAxios from "./useAxios";
import { getOrder, getOrders, getUserOrders, newOrder } from "../services/orderApiService";

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

  const findOrder = async (orderId) => {
    setIsLoading(true);
    try {
      const { data } = await getOrder(orderId);
      setOrder(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

const listOrders = async () => {
    setIsLoading(true);
    try {
      const { data } = await getOrders();
      setOrders(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return { orders, order, isLoading, error, newUserOrder, listUserOrders, findOrder, listOrders };
}
