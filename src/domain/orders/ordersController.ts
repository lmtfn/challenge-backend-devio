import { Request, Response } from 'express';
import OrdersService from './ordersService';

const OrdersController = {
  async createNewOrder(req: Request, res: Response) {
    try {
      const data = await OrdersService.createNewOrder();
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getOrderInfoWithPayment(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrdersService.getOrderInfoWithPayment(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getOrdersSentToKitchen(req: Request, res: Response) {
    try {
      const data = await OrdersService.getOrdersSentToKitchen();
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
      const { clientsName, status } = req.body;
      const data = await OrdersService.updateOrderInfo({
        orderId,
        clientsName,
        status,
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrdersController;
