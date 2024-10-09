import chalk from "chalk";
import { Router } from "express";
import { getUser, getUsers, login, registerUser, updateUser } from "../services/usersService.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.send(user);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await login(email, password);
    res.send(user);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    res.send(user);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await updateUser(id, req.body);
    res.send(user);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

export default router;