import Product from "../models/collections/Product.js"

// [POST]
const newProduct = async (productInfo) => {
  try {
    let product = new Product(productInfo);
    product = await product.save();
    return product;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [GET]
const getProducts = async () => {
  try {
    let products = await Product.find();
    return products;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const getProduct = async (productId) => {
  try {
    let product = await Product.findById(productId);
    return product;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [PUT]
const updateProduct = async (productId, newProduct) => {
  try {
    let product = await Product.findByIdAndUpdate(productId, newProduct, { new: true });
    return product;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [DELETE]
const deleteProduct = async (productId) => {
  try {
    let product = await Product.findByIdAndDelete(productId);
    return product;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { newProduct, getProducts, getProduct, updateProduct, deleteProduct };