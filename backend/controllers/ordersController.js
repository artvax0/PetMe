import { Router } from "express";
import { newOrder } from "../services/ordersService.js";
import { handleError } from "../utils/handleErrors.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    let order = await newOrder(req.body);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
})

export default router;