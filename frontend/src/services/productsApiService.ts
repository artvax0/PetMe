import axios, { AxiosResponse } from "axios";
import { Product } from "../interfaces/product";

const apiUrl = 'http://localhost:8181/products/';

export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    return Promise.reject(error);
  }
}

getProducts();