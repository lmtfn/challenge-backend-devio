import { Request, Response } from 'express';
import PaymentsService from './paymentsService';

const PaymentsController = {
  async insertPaymentMethod(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { type, value, receiptNumber } = req.body;
      const data = await PaymentsService.insertPaymentMethod({
        type,
        value,
        orderId,
        receiptNumber,
      });
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default PaymentsController;
