import express from 'express';
import OrderProductsController from '../domain/orderProducts/orderProductsController';

const orderProductsRouter = express.Router();

orderProductsRouter.get(
  '/order-products/:orderId',
  OrderProductsController.getProductsByOrderId,
);

export default orderProductsRouter;
