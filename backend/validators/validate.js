import config from 'config';
import registerUserSchema from './schemas/registerUserSchema';
import configError from '../utils/configError';
import loginUserSchema from './schemas/loginUserSchema';

const validator = config.get('VALIDATOR');

const validateRegistry = (user) => {
  if (validator === 'joi') {
    const { error } = registerUserSchema(user);
    if (error) return error.details[0].message;
    return '';
  }
  return configError('validator');
}

const validateLogin = (user) => {
  if (validator === 'joi') {
    const { error } = loginUserSchema(user);
    if (error) return error.details[0].message;
    return ''
  }
  return configError('validator');
}

export { validateRegistry, validateLogin };