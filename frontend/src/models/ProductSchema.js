import Joi from "joi"

const productSchema = {
  name: Joi.string().min(2).max(256).required().label('Product Name'),
  description: Joi.string().min(10).required().required().label('Product Description'),
  url: Joi.string().uri().required().label('Image URL'),
  alt: Joi.string().required().label('Alt Text'),
  price: Joi.number().min(0).required().label('Price'),
  stock: Joi.number().min(0).required().label('Stock'),
  category_id: Joi.string().min(16).required().label('Category'),
  petType_id: Joi.array().min(1).required().label('Pet Type'),
  discount: Joi.number().min(0).max(100).required().label('Discount Percentage'),
  discountStartDate: Joi.date().required().label('Discount Start Date'),
  discountEndDate: Joi.date().required().label('Discount End Date'),
}

export default productSchema;