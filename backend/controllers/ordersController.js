import { Router } from "express";
import { changeOrderStatus, getOrder, getOrders, getOrdersFromUser, newOrder } from "../services/ordersService.js";
import { createError, handleError } from "../utils/handleErrors.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    let order = await newOrder(req.body);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/', async (req, res) => {
  try {
    let orders = await getOrders();
    res.send(orders);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let order = await getOrder(id);
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

router.delete('/:id', async (req, res) => {
  try {
    res.status(405).send('Not Allowed: Deleting orders not permitted');
  } catch (error) {
    handleError(res, error);
  }
})

export default router;