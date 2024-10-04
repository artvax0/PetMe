import { Router } from "express";
import usersController from '../controllers/usersController';
import categoriesController from '../controllers/categoriesController';
import productsController from '../controllers/productsController';
import cartsController from '../controllers/cartsController';
import ordersController from '../controllers/ordersController';

const router = Router();
router.use('/users', usersController);
router.use('/categories', categoriesController);
router.use('/products', productsController);
router.use('/carts', cartsController);
router.use('/orders', ordersController);

export default router;