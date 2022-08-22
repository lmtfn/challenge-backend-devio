import sequelize from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import OrdersModel from '../orders/ordersModel';
import ProductsModel from '../products/productsModel';
import OrderProductsModel from './orderProductsModel';

const OrderProductsService = {
  async createItemInOrderId(
    orderId: string,
    productId: string,
    amount: number,
    partialPrice: number,
    observation: string,
  ) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });
    if (!orderExists) throw new Error('Order not found');
    const newOrderItems = await OrderProductsModel.create({
      id: uuidv4(),
      orderId,
      productId,
      amount,
      partialPrice,
      observation,
    });
    return newOrderItems;
  },

  async getProductsRanking() {
    const productsList = await OrderProductsModel.findAll({
      attributes: [
        'productId',
        [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
      ],
      group: ['productId'],
      order: [['total_amount', 'DESC']],
      include: [
        {
          model: ProductsModel,
          as: 'product',
          attributes: ['name', 'category', 'code', 'unitPrice'],
        },
      ],
    });
    return productsList;
  },

  async getItemsInOrderId(orderId: string) {
    const orderExists = await OrdersModel.count({
      where: {
        id: orderId,
      },
    });
    if (!orderExists) throw new Error('Order not found');
    const orderDetails = await OrderProductsModel.findAll({
      where: {
        orderId,
      },
      include: ['product', 'order'],
    });
    return orderDetails;
  },

  async updateItemInOrder(
    orderProductId: string,
    amount: number,
    partialPrice: number,
    observation: string,
  ) {
    const orderItemExists = await OrderProductsModel.count({
      where: {
        id: orderProductId,
      },
    });
    if (!orderItemExists) throw new Error('Order item not found');
    await OrderProductsModel.update(
      {
        amount,
        partialPrice,
        observation,
      },
      {
        where: {
          id: orderProductId,
        },
      },
    );
    const newOrderItems = await OrderProductsModel.findOne({
      where: {
        id: orderProductId,
      },
    });
    return newOrderItems;
  },

  async deleteItemInOrder(orderProductId: string) {
    const orderItemExists = await OrderProductsModel.count({
      where: {
        id: orderProductId,
      },
    });
    if (!orderItemExists) throw new Error('Order item not found');
    await OrderProductsModel.destroy({
      where: {
        id: orderProductId,
      },
    });
  },
};

export default OrderProductsService;
