import sequelize from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import OrdersService from '../orders/ordersService';
import ProductsModel from '../products/productsModel';
import ProductsService from '../products/productsService';
import OrderProductsModel from './orderProductsModel';

const OrderProductsService = {
  async orderItemExists(orderProductId: string) {
    const orderItemExists = await OrderProductsModel.count({
      where: {
        id: orderProductId,
      },
    });
    return orderItemExists;
  },

  async createItemInOrderId({ orderId, productId, amount, observation }: any) {
    const orderExists = await OrdersService.orderExists(orderId);
    if (!orderExists) throw new Error('Order not found');

    const id = uuidv4();
    const unitPrice = await ProductsService.getUnitPrice(productId);
    await OrderProductsModel.create({
      id,
      orderId,
      productId,
      amount,
      partialPrice: parseFloat((unitPrice * amount).toFixed(2)),
      observation,
    });

    await OrdersService.updateOrderPrice(orderId);

    const newOrderItem = await this.getOrderItem(id);
    return newOrderItem;
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

  async getOrderItem(orderProductId: string) {
    const orderItem = await OrderProductsModel.findOne({
      where: {
        id: orderProductId,
      },
    });
    return orderItem;
  },

  async getOrderPrice(orderId: string) {
    const orderPrice = await OrderProductsModel.sum('partialPrice', {
      where: { orderId },
    });

    if (!orderPrice) return 0;

    return orderPrice;
  },

  async updateItemInOrder({ orderProductId, amount, observation }: any) {
    const orderItemExists = await this.orderItemExists(orderProductId);
    if (!orderItemExists) throw new Error('Order item not found');

    const itemInfo: any = await this.getOrderItem(orderProductId);

    const unitPrice = await ProductsService.getUnitPrice(itemInfo.productId);
    await OrderProductsModel.update(
      {
        amount,
        partialPrice: parseFloat((unitPrice * amount).toFixed(2)),
        observation,
      },
      {
        where: {
          id: orderProductId,
        },
      },
    );
    await OrdersService.updateOrderPrice(itemInfo.orderId);

    const newOrderItem = await this.getOrderItem(orderProductId);
    return newOrderItem;
  },

  async deleteItemInOrder(orderProductId: string) {
    const orderItemExists = await this.orderItemExists(orderProductId);
    if (!orderItemExists) throw new Error('Order item not found');

    const itemInfo: any = await this.getOrderItem(orderProductId);

    const itemOrder = itemInfo.orderId;

    await OrderProductsModel.destroy({
      where: {
        id: orderProductId,
      },
    });

    return OrdersService.updateOrderPrice(itemOrder);
  },
};

export default OrderProductsService;
