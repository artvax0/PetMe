import { createError } from "./handleErrors.js";

const configError = (errorType) => {
  if (errorType == 'db') {
    let error = Error('There is no database for this request');
    error.status = 500;
    return createError('Database', error);
  }

  if (errorType == 'tokenGen') {
    let error = Error('There is no valid token generator.');
    error.status = 500;
    return createError('Token Generator', error);
  }
}

export default configError;