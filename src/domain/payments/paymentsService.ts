import { v4 as uuidv4 } from 'uuid';
import OrdersService from '../orders/ordersService';
import PaymentsModel from '../payments/paymentsModel';

const PaymentsService = {
  async getOrderTotalPayments(orderId: string) {
    const orderPayments = await PaymentsModel.sum('value', {
      where: { orderId },
    });
    return orderPayments;
  },

  async insertPaymentMethod({ type, value, orderId, receiptNumber }: any) {
    const orderExists = await OrdersService.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');

    const id = uuidv4();

    const orderPayments = await this.getOrderTotalPayments(orderId);
    const orderPrice: any = await OrdersService.getOrderBasicInfo(orderId);
    if (orderPayments === orderPrice.totalPrice)
      throw new Error('Order has already been paid in its entirity');
    if (orderPayments + value > orderPrice.totalPrice)
      throw new Error(
        `New payment value is larger than what is due: ${
          orderPrice.totalPrice - orderPayments
        }`,
      );

    const newPayment = await PaymentsModel.create({
      id,
      orderId,
      type,
      value,
      receiptNumber,
    });
    return newPayment;
  },
};

export default PaymentsService;
