import { Request, Response } from 'express';
import OrdersService from '../orders/ordersService';
import OrderProductsService from './orderProductsService';

const OrderProductsController = {
  async createItemInOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { productId, amount, observation } = req.body;
      const data = await OrderProductsService.createItemInOrderId({
        orderId,
        productId,
        amount,
        observation,
      });
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getAllItemsInOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrdersService.getAllItemsAndDetailsInOrderId(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async updateItemInOrder(req: Request, res: Response) {
    try {
      const { orderProductId } = req.params;
      const { amount, observation } = req.body;
      const data: any = await OrderProductsService.updateItemInOrder({
        orderProductId,
        amount,
        observation,
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async deleteItemInOrder(req: Request, res: Response) {
    try {
      const { orderProductId } = req.params;
      await OrderProductsService.deleteItemInOrder(orderProductId);
      res.json('Item deleted');
      res.status(204);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrderProductsController;
