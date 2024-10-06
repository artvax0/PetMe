import mongoose from "mongoose";

const Cart = mongoose.model('Cart', new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  products: [{
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
  }]
}, { timestamps: true }));

export default Cart;