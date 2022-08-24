import express from 'express';
import orderProductsRouter from './orderProductsRoutes';
import ordersRouter from './ordersRoutes';
import paymentsRouter from './paymentsRoutes';
import productsRouter from './productsRoutes';

const routes = express.Router();

routes.use(orderProductsRouter);
routes.use(ordersRouter);
routes.use(paymentsRouter);
routes.use(productsRouter);

export default routes;
