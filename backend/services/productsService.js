import chalk from "chalk";
import Product from "../models/collections/Product.js"

// [POST]
const newProduct = async (productInfo) => {
  try {
    let product = new Product(productInfo);
    product = await product.save();
    return product;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

// [GET]
const getProducts = async () => {
  try {
    let products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

const getProduct = async (productId) => {
  try {
    let product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

export { newProduct, getProducts, getProduct, updateProduct };