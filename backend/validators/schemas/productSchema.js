import Joi from "joi";

const productSchema = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(2560).required(),
    image: Joi.object().keys({
      url: Joi.string()
        .ruleset.regex(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}|https?:\/\/localhost(?:\:\d{1,5})?(?:\/[^\s]*)?)/)
        .rule({ message: 'Product image must be a valid URL' })
        .allow(''),
      alt: Joi.string().min(0).max(256).allow('')
    }).required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).required(),
    category_id: Joi.string().hex().length(24).required(),
    petType_id: Joi.array().items(Joi.string().hex().length(24).required()),
    discount: Joi.number().min(0).max(100).required(),
    discountStartDate: Joi.date().required(),
    discountEndDate: Joi.date().required()
  });
  return schema.validate(product);
}

export default productSchema;