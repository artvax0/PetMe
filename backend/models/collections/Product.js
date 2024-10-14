import mongoose from "mongoose";
import { DEFAULT_STRING } from "../helpers/validators.js";
import IMAGE from "../helpers/Image.js";

const Product = mongoose.model('Product', new mongoose.Schema({
  name: DEFAULT_STRING,
  description: DEFAULT_STRING,
  image: IMAGE,
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  petType_id: [{ type: mongoose.Schema.Types.ObjectId, required: true }]
}, { timestamps: true }));

export default Product;