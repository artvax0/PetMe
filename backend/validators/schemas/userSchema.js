import Joi from 'joi'

const userSchema = (user) => {
  const schema = Joi.object({
    name: Joi.object().keys({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(0).max(256).allow(''),
      last: Joi.string().min(2).max(256).required(),
    }).required(),
    email: Joi.string()
      .regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      .rule({ message: 'Email must be a valid email address' })
      .required(),
    phone: Joi.string()
      .regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
      .required(),
    address: Joi.object().keys({
      country: Joi.string().min(2).max(256).required(),
      state: Joi.string().min(0).max(256).allow(''),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.number().min(1).default(1).required(),
      zip: Joi.number().min(0).default(0).required()
    }).required()
  });
  return schema.validate(user);
}

export default userSchema;