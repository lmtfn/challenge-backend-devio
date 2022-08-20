import express from 'express';
import OrdersController from '../domain/orders/ordersController';

const ordersRouter = express.Router();

ordersRouter.post('/order', OrdersController.createNewOrder);
ordersRouter.get('/order/:orderId', OrdersController.getOrderById);
ordersRouter.patch('/order/:orderId', OrdersController.updateOrderInfo);
ordersRouter.patch(
  '/order-status/:orderId',
  OrdersController.updateOrderStatus,
);

export default ordersRouter;
