import mongoose from "mongoose";
import ADDRESS from "../helpers/Address.js";

const Order = mongoose.model('Order', new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  products: [{
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  total: { type: Number, reqired: true },
  address: ADDRESS,
  status: { type: String, enum: ['Processing', 'En Route', 'Complete', 'Cancelled'] }
}, { timestamps: true }));

export default Order;