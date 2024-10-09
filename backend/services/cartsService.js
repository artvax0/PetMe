import Cart from "../models/collections/Cart.js"
import { createError } from "../utils/handleErrors.js";

// [POST]
const createCart = async (userId) => {
  try {
    let cart = new Cart({ user_id: userId, products: [] });
    cart = await cart.save()
    return cart;
  } catch (error) {
    return createError('Mongoose', error.message);
  }
}

// [GET]
const getCart = async (userId) => {
  try {
    let cart = await Cart.findOne({ user_id: userId });
    return cart;
  } catch (error) {
    return createError('Mongoose', error.message);
  }
}

export { createCart, getCart };