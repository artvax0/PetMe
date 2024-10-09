import chalk from "chalk";

const createError = (validator, error) => {
  console.log(chalk.yellow(validator))
  error.message = `${validator} Error: ${error.message}`;
  error.status = error.status || 400;
  throw error;
}

const handleError = (res, status, msg = '') => {
  console.log(chalk.redBright(msg));
  return res.status(status).send(msg);
}

export { createError, handleError };