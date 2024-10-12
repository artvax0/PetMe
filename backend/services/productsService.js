import Product from "../models/collections/Product.js"
import config from "config";
import dbError from "../utils/dbError.js";

const db = config.get('DB');

// [POST]
const newProduct = async (productInfo) => {
  if (db == 'mongodb') {
    try {
      let product = new Product(productInfo);
      product = await product.save();
      return product;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [GET]
const getProducts = async () => {
  if (db == 'mongodb') {
    try {
      let products = await Product.find();
      return products;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getProduct = async (productId) => {
  if (db == 'mongodb') {
    try {
      let product = await Product.findById(productId);
      return product;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [PUT]
const updateProduct = async (productId, newProduct) => {
  if (db == 'mongodb') {
    try {
      let product = await Product.findByIdAndUpdate(productId, newProduct, { new: true });
      return product;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [DELETE]
const deleteProduct = async (productId) => {
  if (db == 'mongodb') {
    try {
      let product = await Product.findByIdAndDelete(productId);
      return product;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

export { newProduct, getProducts, getProduct, updateProduct, deleteProduct };