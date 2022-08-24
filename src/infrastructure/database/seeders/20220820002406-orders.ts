import { enumOrderStatus } from '../../../domain/orders/orderEntity';
import OrdersModel from '../../../domain/orders/ordersModel';

export default {
  async up() {
    await OrdersModel.bulkCreate(
      [
        {
          id: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          clientsName: 'Laura Neves',
          totalPrice: 48.1,
          status: enumOrderStatus.initiated,
        },
        {
          id: '27bdb86a-5ee1-4ed9-86a7-227bebeb54ee',
          clientsName: 'João',
          totalPrice: 25.8,
          status: enumOrderStatus.concluded,
        },
        {
          id: 'f2f32fc5-0f77-45c0-93f0-5b2ec834bb27',
          clientsName: 'Olivia Magalhães',
          totalPrice: 24.1,
          status: enumOrderStatus.sentToProduction,
        },
      ],
      {},
    );
  },

  async down() {
    await OrdersModel.destroy({ truncate: true });
  },
};
