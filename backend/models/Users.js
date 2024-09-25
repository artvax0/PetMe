import mongoose from "mongoose";
import NAME from "./Name.js";
import { EMAIL, PHONE } from "./validators.js";
import IMAGE from "./Image.js";
import ADDRESS from "./Address.js";

const User = mongoose.model('user', {
  name: NAME,
  email: EMAIL,
  password: { type: String, required: true, trim: true },
  image: IMAGE,
  phone: PHONE,
  address: ADDRESS,
  isEmployee: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export default User;