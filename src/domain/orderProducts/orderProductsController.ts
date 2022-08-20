import { Request, Response } from 'express';
import OrderProductsService from './orderProductsService';

const OrderProductsController = {
  async getProductsByOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const data = await OrderProductsService.getProductsByOrderId(orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrderProductsController;
