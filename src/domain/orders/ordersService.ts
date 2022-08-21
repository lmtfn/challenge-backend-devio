import { v4 as uuidv4 } from 'uuid';
import OrdersModel from '../orders/ordersModel';
import { enumOrderStatus } from './orderEntity';

const OrdersService = {
  async createNewOrder() {
    const newOrder = await OrdersModel.create({
      id: uuidv4(),
      totalPrice: 0,
      status: enumOrderStatus.initiated,
    });
    return newOrder;
  },

  async getOrderSummary(orderId: string) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });
    if (!orderExists) throw new Error('Order not found');
    const orderDetails = await OrdersModel.findAll({
      where: {
        id: orderId,
      },
    });
    return orderDetails;
  },

  async updateOrderInfo(
    orderId: string,
    clientsName: string,
    totalPrice: number,
    status: enumOrderStatus,
  ) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });
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
    const updatedOrder = await OrdersModel.findOne({
      where: {
        id: orderId,
      },
    });
    return updatedOrder;
  },
};

export default OrdersService;
