import chalk from "chalk";
import { Router } from "express";
import { registerUser } from "../services/usersService.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.send(user);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

export default router;