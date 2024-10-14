import { Router } from "express";
import { handleError } from "../utils/handleErrors.js";
import { addToCart, createCart, getCart } from "../services/cartsService.js";
import authLoggedUser from "../middlewares/userAuth.js";

const router = Router();

router.post('/:id', authLoggedUser, async (req, res) => {
  try {
    const payload = res.locals.user;
    if (!payload.isAdmin) {
      let error = Error('Only system admins can add a cart');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    const { id } = req.params;
    let cart = await createCart(id);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

router.get('/:id', authLoggedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = res.locals.user;
    if (!payload.isAdmin || payload._id != id) {
      let error = Error('Users can only view their own cart');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let cart = await getCart(id);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

router.patch('/:id', authLoggedUser, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = res.locals.user;
    if (!payload.isAdmin || payload._id != id) {
      let error = Error('Users can only add products to their own cart');
      error.status = 405;
      error.validator = 'Authorization';
      return handleError(res, error);
    }
    let cart = await addToCart(id, req.body);
    res.send(cart);
  } catch (error) {
    return handleError(res, error);
  }
});

// for when user attempts to delete a cart
router.delete('/:id', authLoggedUser, async (req, res) => {
  try {
    res.status(405).send('Not Allowed: Deleting carts not permitted');
  } catch (error) {
    return handleError(res, error);;
  }
})

export default router;