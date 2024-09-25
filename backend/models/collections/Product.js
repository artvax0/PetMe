import mongoose from "mongoose";
import { DEFAULT_STRING } from "../helpers/validators.JS";
import IMAGE from "../helpers/Image";

const Product = mongoose.model('Product', {
  name: DEFAULT_STRING,
  description: DEFAULT_STRING,
  image: IMAGE,
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
}, { timestamps: true });

export default Product;