import { Router } from "express";
import { deleteProduct, getProduct, getProducts, newProduct, updateProduct, updateProductStock } from "../services/productsService.js";
import { getCategoryByName } from "../services/categoriesService.js";
import { handleError } from "../utils/handleErrors.js";
import authLoggedUser from "../middlewares/userAuth.js";

const router = Router();

router.post('/', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      if (!payload.isEmployee) {
        let error = Error('Only employees can add products');
        error.status = 405;
        error.validator = 'Authorization';
        return handleError(res, error);
      }
    }
    let category = req.body.category_id;
    category = await getCategoryByName(category);
    req.body = { ...req.body, category_id: category._id };
    const product = await newProduct(req.body);
    res.send(product);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.get('/', async (req, res) => {
  try {

    let products = await getProducts();
    res.send(products);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product = await getProduct(id);
    res.send(product);
  } catch (error) {
    return handleError(res, error);;
  }
})

router.put('/:id', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      if (!payload.isEmployee) {
        let error = Error('Only employees can edit products');
        error.status = 405;
        error.validator = 'Authorization';
        return handleError(res, error);
      }
    }
    const { id } = req.params;
    let product = await updateProduct(id, req.body);
    res.send(product);
  } catch (error) {
    return handleError(res, error);
  }
})

router.patch('/:id', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      if (!payload.isEmployee) {
        let error = Error('Only employees can update product stock');
        error.status = 405;
        error.validator = 'Authorization';
        return handleError(res, error);
      }
    }
    const { id } = req.params;
    let product = await updateProductStock(id, req.body);
    res.send(product);
  } catch (error) {
    return handleError(res, error);
  }
})

router.delete('/:id', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      if (!payload.isEmployee) {
        let error = Error('Only employees can delete products');
        error.status = 405;
        error.validator = 'Authorization';
        return handleError(res, error);
      }
    }
    const { id } = req.params;
    let product = await deleteProduct(id);
    res.send(product);
  } catch (error) {
    return handleError(res, error);;
  }
})

export default router;