import { Request, Response } from 'express';
import OrderProductsService from './orderProductsService';

const OrderProductsController = {
  async createItemInOrderId(req: Request, res: Response) {
    try {
      const data = await OrderProductsService.createItemInOrderId();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async getItemsInOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrderProductsService.getItemsInOrderId(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async updateItemInOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrderProductsService.updateItemInOrderId(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async deleteItemInOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrderProductsService.deleteItemInOrderId(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrderProductsController;
