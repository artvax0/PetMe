import Order from "../models/collections/Order.js"
import config from "config";
import dbError from "../utils/dbError.js";
import { createError } from "../utils/handleErrors.js";
import { updateUserOrders } from "./usersService.js";

const db = config.get('DB');

// [POST]
const newOrder = async (orderDetails) => {
  if (db == 'mongodb') {
    try {
      let order = new Order(orderDetails);
      order.total ??= 0;
      order.products.forEach(product => order.total += product.price);

      // if user provides status to a new order - that isnt processing, reject request
      if (order.status != 'Processing') {
        let error = Error('Invalid Status');
        error.status = 400;
        return createError('Bad Request', error);
      }

      order = await order.save();
      const userOrders = await getOrdersFromUser(order.user_id);
      await updateUserOrders(order.user_id, userOrders);
      return order;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [GET]
const getOrders = async () => {
  if (db == 'mongodb') {
    try {
      let orders = await Order.find();
      return orders;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getOrder = async (orderId) => {
  if (db == 'mongodb') {
    try {
      let order = await Order.find({ _id: orderId });
      return order;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getOrdersFromUser = async (user_id) => {
  if (db == 'mongodb') {
    try {
      let orders = await Order.find({ user_id });
      return orders;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [PATCH]
const changeOrderStatus = async (orderId, status) => {
  if (db == 'mongodb') {
    try {
      let order = await Order.findByIdAndUpdate(orderId, status, { new: true });
      return order;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

export { newOrder, getOrders, getOrder, getOrdersFromUser, changeOrderStatus };