import chalk from "chalk";
import User from "../models/collections/Users.js"
import _ from 'lodash'

const registerUser = async (newUser) => {
  try {
    let user = new User(newUser);
    user = await user.save();
    return _.pick(user, ['_id', 'email', 'name']);
  } catch (error) {
    throw new Error(chalk.red(error));
  }
}

export { registerUser };