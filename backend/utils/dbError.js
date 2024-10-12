import { createError } from "./handleErrors.js";

const dbError = () => {
  let error = Error('There is no database for this request');
  error.status = 500;
  return createError('Database', error);
}

export default dbError;