import Order from "../models/collections/Order.js"
import { createError } from "../utils/handleErrors.js";

// [POST]
const newOrder = async (orderDetails) => {
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
    return order;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [GET]
const getOrdersFromUser = async (user_id) => {
  try {
    let orders = await Order.find({ user_id });
    return orders;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [PATCH]
const changeOrderStatus = async (orderId, status) => {
  try {
    let order = await Order.findByIdAndUpdate(orderId, status, { new: true });
    return order;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { newOrder, getOrdersFromUser, changeOrderStatus };