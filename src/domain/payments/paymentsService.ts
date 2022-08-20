import { v4 as uuidv4 } from 'uuid';
import OrdersModel from '../orders/ordersModel';
import PaymentsModel from '../payments/paymentsModel';
import { enumPaymentType } from './paymentEntity';

const PaymentsService = {
  async insertPaymentMethod(type: enumPaymentType, orderId: string) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });
    if (!orderExists) throw new Error('Order not found');
    const newPayment = await PaymentsModel.create({
      id: uuidv4(),
      orderId,
      type,
    });
    return newPayment;
  },
};

export default PaymentsService;
