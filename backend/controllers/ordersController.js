import { Router } from "express";
import { changeOrderStatus, getOrdersFromUser, newOrder } from "../services/ordersService.js";
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

router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let orders = await getOrdersFromUser(id);
    res.send(orders);
  } catch (error) {
    handleError(res, error);
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let order = await changeOrderStatus(id, req.body);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
})

export default router;