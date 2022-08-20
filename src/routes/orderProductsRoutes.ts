import express from 'express';
import OrderProductsController from '../domain/orderProducts/orderProductsController';

const orderProductsRouter = express.Router();

orderProductsRouter.post(
  '/order-items',
  OrderProductsController.createItemInOrderId,
);
orderProductsRouter.get(
  '/order-items/:orderId',
  OrderProductsController.getItemsInOrderId,
);
orderProductsRouter.patch(
  '/order-items/:orderId',
  OrderProductsController.updateItemInOrderId,
);
orderProductsRouter.delete(
  '/order-items/:orderId',
  OrderProductsController.deleteItemInOrderId,
);

export default orderProductsRouter;
