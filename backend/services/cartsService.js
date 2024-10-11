import _ from 'lodash'
import Cart from "../models/collections/Cart.js"
import { createError } from "../utils/handleErrors.js";
import { getProduct } from "./productsService.js";
import chalk from 'chalk';

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

// [PATCH]
const addToCart = async (user_id, { product_id, quantity }) => {
  try {
    // get product info
    const product = await getProduct(product_id);

    // check if product is in stock
    if (product.stock < quantity) {
      let error = Error('Invalid quantity');
      error.status = 400;
      return createError('Bad Request', error);
    }

    let cart = await Cart.findOne({ user_id });

    // check if the product exists
    let productIndex = cart.products.findIndex(produce => produce.product_id == product_id);

    // set quantity and price of product if it exists and product quantity is above 0
    if (productIndex >= 0 && quantity) {
      cart.products[productIndex].quantity = quantity;
      cart.products[productIndex].price = product.price * quantity;
    }
    // remove product from the cart if product quantity is 0
    if (productIndex >= 0 && !quantity) {
      cart.products = cart.products.filter(product => product.product_id != product_id);
    };

    // set product if doesnt exist in cart
    if (productIndex == -1 && quantity) {
      cart.products = [...cart.products, {
        product_id,
        quantity,
        price: product.price * quantity
      }];
    }

    // fail-safe: in-case product doesnt exist in cart and quantity is 0
    if (productIndex == -1 && !quantity) {
      let error = Error('Invalid Quantity');
      error.status = 404;
      return createError('Bad Request', error);
    }

    cart = await cart.save();
    return cart;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { createCart, getCart, addToCart };