import { v4 as uuidv4 } from 'uuid';
import OrderProductsModel from '../orderProducts/orderProductsModel';
import OrderProductsService from '../orderProducts/orderProductsService';
import OrdersModel from '../orders/ordersModel';
import PaymentsModel from '../payments/paymentsModel';

import ProductsModel from '../products/productsModel';
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

  async getOrderBasicInfo(orderId: string) {
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

  async getOrdersSentToKitchen() {
    const orderDetails = await OrdersModel.findAll({
      where: {
        status: 'sentToProduction',
      },
      attributes: ['id', 'clientsName', 'totalPrice', 'status'],
      include: [
        {
          model: OrderProductsModel,
          as: 'orderitems',
          attributes: ['amount', 'partialPrice', 'observation'],
          include: [
            {
              model: ProductsModel,
              as: 'product',
              attributes: ['name', 'code'],
            },
          ],
        },
      ],
    });
    return orderDetails;
  },

  async getAllItemsAndDetailsInOrderId(orderId: string) {
    const orderExists = await this.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');

    const orderDetails = await OrdersModel.findAll({
      where: {
        id: orderId,
      },
      attributes: ['id', 'clientsName', 'totalPrice', 'status'],
      include: [
        {
          model: OrderProductsModel,
          as: 'orderitems',
          attributes: ['id', 'amount', 'partialPrice', 'observation'],
          include: [
            {
              model: ProductsModel,
              as: 'product',
              attributes: ['id', 'name', 'code'],
            },
          ],
        },
      ],
    });
    return orderDetails;
  },

  async getItemsInOrderId(orderId: string) {
    const orderPrice = await OrderProductsModel.findAll({
      where: {
        orderId,
      },
    });
    return orderPrice;
  },

  async updateOrderPrice(orderId: string) {
    const orderExists = await this.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');

    const orderPrice = await OrderProductsService.getOrderPrice(orderId);

    await OrdersModel.update(
      {
        totalPrice: orderPrice,
      },
      {
        where: {
          id: orderId,
        },
      },
    );
    return this.getOrderBasicInfo(orderId);
  },

  async updateOrderInfo({ orderId, clientsName, status }: any) {
    const orderExists = await this.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');
    await OrdersModel.update(
      {
        clientsName,
        status,
      },
      {
        where: {
          id: orderId,
        },
      },
    );
    return this.getOrderBasicInfo(orderId);
  },
};

export default OrdersService;
