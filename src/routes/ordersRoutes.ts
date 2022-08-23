import express from 'express';
import OrdersController from '../domain/orders/ordersController';

const ordersRouter = express.Router();

ordersRouter.post('/order', OrdersController.createNewOrder);
ordersRouter.get('/order/:orderId', OrdersController.getOrderInfoWithPayment);
ordersRouter.get('/orders', OrdersController.getOrdersSentToKitchen);
ordersRouter.patch('/order/:orderId', OrdersController.updateOrderInfo);

export default ordersRouter;
