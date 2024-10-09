import { Router } from "express";
import { getCategories, getCategory, getCategoryByName, newCategory, updateCategory } from "../services/categoriesService.js";
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

router.get('/', async (req, res) => {
  if (Object.keys(req.body).length > 0) {
    try {
      const { name } = req.body;
      const category = await getCategoryByName(name);
      res.send(category);
    } catch (error) {
      throw new Error(chalk.red(error.message));
    }
  } else {
    try {
      const categories = await getCategories();
      res.send(categories);
    } catch (error) {
      throw new Error(chalk.red(error.message));
    }
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategory(id);
    res.send(category);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await updateCategory(id, req.body);
    res.send(category);
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

// for when user attempts to delete a category
router.delete('/:id', async (req, res) => {
  try {
    res.status(405).send('Not Allowed: Not allowed to delete categories');
  } catch (error) {
    throw new Error(chalk.red(error.message));
  }
})

export default router;