import Joi from "joi";

const creditCardSchema = {
  number: Joi.string().pattern(/^\d{16}$/).messages({ 'string.empty': 'Credit Card number must be filled', 'string.pattern.base': 'Credit Card number must be 16 digits long' }).required(),
  expiry: Joi.string().pattern(/^(0[1-9]|1[0-2])\/\d{2}$/).required().messages({ 'string.empty': 'Expiration date must be filled as MM/YY', 'string.pattern.base': 'Expiration date must be a future date' })
    .custom((value, helpers) => {
      const [m, y] = value.split('/').map(Number);

      const now = new Date();
      const currentM = now.getMonth() + 1;
      const currentY = now.getFullYear() % 100;

      if (y < currentY || (y == currentY && m < currentM)) return helpers.message('The expiration date must be in the future');
      return value;
    }),
  cvv: Joi.string().pattern(/^\d{3,4}$/).max(4).messages({ 'string.pattern.base': 'CVV must be either 3 or 4 digits long', 'string.max': 'CVV must be up to 4 digits long' })
}

export default creditCardSchema;