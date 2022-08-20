import express from 'express';
import PaymentsController from '../domain/payments/paymentsController';

const paymentsRouter = express.Router();

paymentsRouter.post('/payment', PaymentsController.insertPaymentMethod);

export default paymentsRouter;
