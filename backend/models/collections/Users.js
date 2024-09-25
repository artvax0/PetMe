import mongoose from "mongoose";
import NAME from "../helpers/Name.js";
import { EMAIL, PHONE } from "../helpers/validators.js";
import IMAGE from "../helpers/Image.js";
import ADDRESS from "../helpers/Address.js";

const User = mongoose.model('User', {
  name: NAME,
  email: EMAIL,
  password: { type: String, required: true, trim: true },
  image: IMAGE,
  phone: PHONE,
  address: ADDRESS,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  isEmployee: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default User;