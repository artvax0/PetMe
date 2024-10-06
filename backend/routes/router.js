import { Router } from "express";
import usersController from '../controllers/usersController.js';
import categoriesController from '../controllers/categoriesController.js';
import productsController from '../controllers/productsController.js';
import cartsController from '../controllers/cartsController.js';
import ordersController from '../controllers/ordersController.js';

const router = Router();
router.use('/users', usersController);
router.use('/categories', categoriesController);
router.use('/products', productsController);
router.use('/carts', cartsController);
router.use('/orders', ordersController);

export default router;