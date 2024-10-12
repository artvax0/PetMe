import User from "../models/collections/Users.js"
import config from "config";
import _ from 'lodash'
import { createError } from "../utils/handleErrors.js";
import { createCart } from "./cartsService.js";
import dbError from "../utils/dbError.js";

const db = config.get('DB');

// [POST]
const registerUser = async (newUser) => {
  if (db == 'mongodb') {
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
  return dbError();
}

const login = async (email, password) => {
  if (db == 'mongodb') {
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
  return dbError();
}

// [GET]
const getUsers = async () => {
  if (db == 'mongodb') {
    try {
      let users = await User.find();
      return users;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getUser = async (userId) => {
  if (db == 'mongodb') {
    try {
      let user = await User.findById(userId);
      return user;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

const getUserOrders = async (userId) => {
  if (db == 'mongodb') {
    try {
      let user = await User.findById(userId);
      return user.order_ids;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [PUT]
const updateUser = async (userId, updatedUser) => {
  if (db == 'mongodb') {
    try {
      let user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
      return user;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

// [PATCH]
const updateUserOrders = async (userId, ordersArray) => {
  if (db == 'mongodb') {
    try {
      let orders = _.map(ordersArray, '_id');
      let user = await User.findByIdAndUpdate(userId, { order_ids: orders }, { new: true });
      return user;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return dbError();
}

export { registerUser, login, getUsers, getUser, getUserOrders, updateUser, updateUserOrders, };