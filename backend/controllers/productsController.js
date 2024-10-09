import { Router } from "express";
import { deleteProduct, getProduct, getProducts, newProduct, updateProduct } from "../services/productsService.js";
import { getCategoryByName } from "../services/categoriesService.js";
import { handleError } from "../utils/handleErrors.js";

const router = Router();

router.post('/', async (req, res) => {
  try {
    let category = req.body.category_id;
    category = await getCategoryByName(category);
    req.body = { ...req.body, category_id: category._id };
    const product = await newProduct(req.body);
    res.send(product);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
})

router.get('/', async (req, res) => {
  try {
    let products = await getProducts();
    res.send(products);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product = await getProduct(id);
    res.send(product);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product = await updateProduct(id, req.body);
    res.send(product);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product = await deleteProduct(id);
    res.send(product);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
})

export default router;