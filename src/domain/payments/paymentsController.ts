import { Request, Response } from 'express';
import PaymentsService from './paymentsService';

const PaymentsController = {
  async insertPaymentMethod(req: Request, res: Response) {
    try {
      const { type, orderId } = req.body;
      const data = await PaymentsService.insertPaymentMethod(type, orderId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default PaymentsController;
