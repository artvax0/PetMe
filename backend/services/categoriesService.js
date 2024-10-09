import Category from "../models/collections/Category.js"

// [POST]
const newCategory = async (categoryInfo) => {
  try {
    let category = new Category(categoryInfo);
    category = await category.save();
    return category;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [GET]
const getCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const getCategory = async (categoryId) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const getCategoryByName = async (categoryName) => {
  try {
    const category = await Category.findOne({ name: categoryName });
    return category;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [UPDATE]
const updateCategory = async (categoryId, newCategory) => {
  try {
    const category = await Category.findByIdAndUpdate(categoryId, newCategory, { new: true });
    return category;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { newCategory, getCategories, getCategory, getCategoryByName, updateCategory };