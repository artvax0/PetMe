import User from "../models/collections/Users.js"
import _ from 'lodash'
import { createError } from "../utils/handleErrors.js";
import { createCart } from "./cartsService.js";

// [POST]
const registerUser = async (newUser) => {
  try {
    let user = new User(newUser);
    user = await user.save();
    // when user registers - create an empty cart for them
    await createCart(user._id);
    return _.pick(user, ['_id', 'email', 'name']);
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const login = async (email, password) => {
  try {
    let user = await User.findOne({ email });

    if (!user || user.password != password) {
      let error = new Error('Invalid email or password');
      error.status = 401;
      return createError('Authentication', error);
    };

    return `user logged in: ${user._id}`;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [GET]
const getUsers = async () => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const getUser = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

const getUserOrders = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user.order_ids;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [PUT]
const updateUser = async (userId, updatedUser) => {
  try {
    let user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return user;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

// [PATCH]
const updateUserOrders = async (userId, ordersArray) => {
  try {
    let orders = _.map(ordersArray, '_id');
    let user = await User.findByIdAndUpdate(userId, { order_ids: orders }, { new: true });
    return user;
  } catch (error) {
    return createError('Mongoose', error);
  }
}

export { registerUser, login, getUsers, getUser, getUserOrders, updateUser, updateUserOrders, };