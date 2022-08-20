import express from 'express';
import ProductsController from '../domain/products/productsController';

const productsRouter = express.Router();

productsRouter.get('/products', ProductsController.getProductsList);

export default productsRouter;
