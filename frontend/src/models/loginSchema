import Joi from 'joi';

const loginSchema = {
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/).messages({ 'string.pattern.base': 'Password must be at least 7 characters long and contain one: Uppercase letter, lowercase letter, a number, and one of the following special characters !@#$%^&*-' })
    .required(),
}

export default loginSchema;