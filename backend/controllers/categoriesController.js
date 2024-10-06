import { Router } from "express";
import { newCategory } from "../services/categoriesService.js";
import chalk from "chalk";

const router = Router();

router.post('/', async (req, res) => {
  try {
    const category = await newCategory(req.body);
    res.send(category);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

export default router;