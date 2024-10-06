import chalk from "chalk";
import { Router } from "express";
import { login, registerUser } from "../services/usersService.js";

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

export default router;