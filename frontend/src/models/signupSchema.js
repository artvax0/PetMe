import Joi from 'joi';


const signupSchema = {
  first: Joi.string().alphanum().min(2).max(30).required(),
  middle: Joi.string().alphanum().min(0).max(30).allow(''),
  last: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/).messages({ 'string.pattern.base': 'Password must be at least 7 characters long and contain one: Uppercase letter, lowercase letter, a number, and one of the following special characters !@#$%^&*-' })
    .required(),
  phone: Joi.string().pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/).rule({ message: 'Phone number must be a valid phone number' }).required(),
  country: Joi.string().min(2).max(256).required(),
  state: Joi.string().min(0).max(256).allow(''),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().min(1).default(1).required(),
  zip: Joi.number().min(0).default(0).required()
}

export default signupSchema;