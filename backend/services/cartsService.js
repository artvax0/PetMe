import Cart from "../models/collections/Cart.js"
import { createError } from "../utils/handleErrors.js";

// [POST]
const createCart = async (user_id) => {
  try {
    if (await getCart(user_id)) {
      let error = Error('Not Allowed');
      error.status = 405;
      return createError('Method', error);
    }
    let cart = new Cart({ user_id, products: [] });
    cart = await cart.save()
    return cart;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [GET]
const getCart = async (user_id) => {
  try {
    let cart = await Cart.findOne({ user_id });
    return cart;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { createCart, getCart };