import chalk from "chalk";
import User from "../models/collections/Users.js"
import _ from 'lodash'

// [POST]
const registerUser = async (newUser) => {
  try {
    let user = new User(newUser);
    user = await user.save();
    return _.pick(user, ['_id', 'email', 'name']);
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

const login = async (email, password) => {
  try {
    let user = await User.findOne({ email });

    if (!user || user.password != password) {
      throw new Error(chalk.red('Invalid email or password'));
    }
    return `user logged in: ${user._id}`;
  } catch (error) {
    throw new Error(chalk.red('Moongoose: ', error));
  }
}

// [GET]
const getUsers = async () => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

const getUser = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

// [PUT]
const updateUser = async (userId, updatedUser) => {
  try {
    let user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return user;
  } catch (error) {
    throw new Error(chalk.red('Mongoose: ', error));
  }
}

export { registerUser, login, getUsers, getUser, updateUser };