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

export { newProduct };