import express from 'express';
import OrderProductsController from '../domain/orderProducts/orderProductsController';

const orderProductsRouter = express.Router();

orderProductsRouter.post(
  '/order-items/:orderId',
  OrderProductsController.createItemInOrderId,
);
orderProductsRouter.get(
  '/order-items/:orderId',
  OrderProductsController.getAllItemsInOrderId,
);
orderProductsRouter.patch(
  '/order-items/:orderProductId',
  OrderProductsController.updateItemInOrder,
);
orderProductsRouter.delete(
  '/order-items/:orderProductId',
  OrderProductsController.deleteItemInOrder,
);

export default orderProductsRouter;
