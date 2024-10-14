import { Router } from "express";
import { changeOrderStatus, getOrder, getOrders, getOrdersFromUser, newOrder } from "../services/ordersService.js";
import { createError, handleError } from "../utils/handleErrors.js";
import authLoggedUser from "../middlewares/userAuth.js";

const router = Router();

router.post('/:id', authLoggedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = res.locals.user;
    if (payload._id != id) {
      let error = Error('Cannot add an order for another user');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let order = await newOrder(req.body);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      let error = Error('Only admins can view all orders');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let orders = await getOrders();
    res.send(orders);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/:id', authLoggedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = res.locals.user;
    if (!payload.isAdmin || payload._id != id) {
      let error = Error('Cannot view an other user order');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let order = await getOrder(id);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
})

router.get('/user/:id', authLoggedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = res.locals.user;
    if (!payload.isAdmin || payload._id != id) {
      let error = Error('Cannot view an other user orders');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let orders = await getOrdersFromUser(id);
    res.send(orders);
  } catch (error) {
    handleError(res, error);
  }
})

router.patch('/:id', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin || !payload.isEmployee) {
      let error = Error('Only employees can change an order status');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
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