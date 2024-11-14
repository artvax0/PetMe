import Joi from 'joi';


const profileSchema = {
  first: Joi.string().alphanum().min(2).max(30).required(),
  middle: Joi.string().alphanum().min(0).max(30).allow(''),
  last: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  url: Joi.string().pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|https?:\/\/localhost(?:\:\d{1,5})?(?:\/[^\s]*)?)/).messages({ 'string.pattern.base': 'User avatar must be a valid URL' }).allow(''),
  alt: Joi.string().min(0).max(256).allow(''),
  phone: Joi.string().pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/).rule({ message: 'Phone number must be a valid phone number' }).required(),
  country: Joi.string().min(2).max(256).required(),
  state: Joi.string().min(0).max(256).allow(''),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().min(1).default(1).required(),
  zip: Joi.number().min(0).default(0).required()
}

export default profileSchema;