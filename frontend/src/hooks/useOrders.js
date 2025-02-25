import { useMemo, useState } from "react";
import useAxios from "./useAxios";
import { getOrder, getOrders, getUserOrders, newOrder, setStatus } from "../services/orderApiService";
import { useSearchParams } from "react-router-dom";
import { useSnack } from "../providers/SnackbarProvider";

export default function useOrders() {
  useAxios();
  const snack = useSnack();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [searchParams] = useSearchParams();

  const filteredOrders = useMemo(() => {
    const search = searchParams.get('q')
    if (!search) return orders;
    const [filter, searchInput] = search.split('/');
    if (!filter || !searchInput) return orders;

    switch (filter) {
      case 'address':
        return orders.filter((order) => {
          const addressStr = Object.values(order.address).join(' ').toLowerCase();
          return addressStr.includes(searchInput.trim().toLowerCase());
        })

      case 'orderID':
        return orders.filter(order => order._id == searchInput);

      case 'orderStatus':
        return orders.filter(order => order.status == searchInput);

      default:
        return orders;
    }
  }, [orders, searchParams])

  const newUserOrder = async (userId, orderInfo) => {
    setIsLoading(true);
    try {
      const { data } = await newOrder(userId, orderInfo);
      setOrder(data);
      setIsLoading(false);
      snack('Order has been created successfully');
      return data;
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to create order, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  }

  const listUserOrders = async (userId) => {
    setIsLoading(true);
    try {
      const { data } = await getUserOrders(userId);
      setOrders(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  const findOrder = async (orderId) => {
    setIsLoading(true);
    try {
      const { data } = await getOrder(orderId);
      setOrder(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  const listOrders = async () => {
    setIsLoading(true);
    try {
      const { data } = await getOrders();
      setOrders(data);
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  }

  const changeStatus = async (orderId, orderStatus) => {
    setIsLoading(true);
    try {
      await setStatus(orderId, orderStatus);
      snack('Successfully changed order status');
    } catch (error) {
      setError(error.response.data);
      snack(`Failed to change order status, ${error.response.data}`, 'error');
    }
    setIsLoading(false);
  }

  return { filteredOrders, orders, order, isLoading, error, newUserOrder, listUserOrders, findOrder, listOrders, changeStatus };
}
