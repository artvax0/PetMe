import Category from "../models/collections/Category.js"
import config from "config";
import dbError from "../utils/dbError.js";

const db = config.get('DB');

// [POST]
const newCategory = async (categoryInfo) => {
  if (db == 'mongodb') {
    try {
      let category = new Category(categoryInfo);
      category = await category.save();
      return category;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [GET]
const getCategories = async () => {
  if (db == 'mongodb') {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getCategory = async (categoryId) => {
  if (db == 'mongodb') {
    try {
      const category = await Category.findById(categoryId);
      return category;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getCategoryByName = async (categoryName) => {
  if (db == 'mongodb') {
    try {
      const category = await Category.findOne({ name: categoryName });
      return category;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [UPDATE]
const updateCategory = async (categoryId, newCategory) => {
  if (db == 'mongodb') {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, newCategory, { new: true });
      return category;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

export { newCategory, getCategories, getCategory, getCategoryByName, updateCategory };