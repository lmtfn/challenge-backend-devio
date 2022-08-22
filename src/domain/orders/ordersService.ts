import { v4 as uuidv4 } from 'uuid';
import OrdersModel from '../orders/ordersModel';
import PaymentsModel from '../payments/paymentsModel';
import { enumOrderStatus } from './orderEntity';

const OrdersService = {
  async orderExists(orderId: string) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });

    return orderExists;
  },

  async createNewOrder() {
    const newOrder = await OrdersModel.create({
      id: uuidv4(),
      totalPrice: 0,
      status: enumOrderStatus.initiated,
    });
    return newOrder;
  },

  async getOrderInfo(orderId: string) {
    const orderDetails = await OrdersModel.findOne({
      where: {
        id: orderId,
      },
    });
    return orderDetails;
  },

  async getOrderInfoWithPayment(orderId: string) {
    const orderExists = await this.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');
    const orderDetails = await OrdersModel.findAll({
      attributes: ['id', 'clientsName', 'totalPrice', 'status'],
      where: {
        id: orderId,
      },
      include: [
        {
          model: PaymentsModel,
          as: 'payments',
          attributes: ['id', 'type', 'value', 'receiptNumber'],
        },
      ],
    });
    return orderDetails;
  },

  async updateOrderInfo({ orderId, clientsName, totalPrice, status }: any) {
    const orderExists = await this.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');
    await OrdersModel.update(
      {
        clientsName,
        totalPrice,
        status,
      },
      {
        where: {
          id: orderId,
        },
      },
    );
    return this.getOrderInfo(orderId);
  },
};

export default OrdersService;
