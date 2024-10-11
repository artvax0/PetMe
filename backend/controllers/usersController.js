import { Router } from "express";
import { getUser, getUserOrders, getUsers, login, registerUser, updateUser, updateUserOrders } from "../services/usersService.js";
import { handleError } from "../utils/handleErrors.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.send(user);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await login(email, password);
    res.send(user);
  } catch (error) {
    return handleError(res, error);
  }
})

router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    res.send(user);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.get('/:id/orders', async (req, res) => {
  try {
    const { id } = req.params;
    const userOrders = await getUserOrders(id);
    res.send(userOrders);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await updateUser(id, req.body);
    res.send(user);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await updateUserOrders(id, req.body);
    res.send(user);
  } catch (error) {
    return handleError(res, error);;
  }
})

export default router;