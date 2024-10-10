import { Router } from "express";
import { handleError } from "../utils/handleErrors.js";
import { createCart, getCart } from "../services/cartsService.js";

const router = Router();

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let cart = await createCart(id);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let cart = await getCart(id);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

export default router;