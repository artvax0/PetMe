import { Router } from "express";
import { handleError } from "../utils/handleErrors.js";
import { addToCart, createCart, getCart } from "../services/cartsService.js";

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

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let cart = await addToCart(id, req.body);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

// for when user attempts to delete a cart
router.delete('/:id', async (req, res) => {
  try {
    res.status(405).send('Not Allowed: Deleting carts not permitted');
  } catch (error) {
    return handleError(res, error);;
  }
})

export default router;