import { Request, Response } from 'express';
import OrdersService from './ordersService';

const OrdersController = {
  async createNewOrder(req: Request, res: Response) {
    try {
      const data = await OrdersService.createNewOrder();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async getOrderById(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrdersService.getOrderById(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async updateOrderInfo(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrdersService.updateOrderInfo(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async updateOrderStatus(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrdersService.updateOrderStatus(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrdersController;
