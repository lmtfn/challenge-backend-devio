import OrdersModel from '../../../domain/orders/ordersModel';

export default {
  async up() {
    await OrdersModel.bulkCreate(
      [
        {
          id: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          clientId: 'ffec8efd-6dde-41f3-8475-c571caa048ba',
          totalPrice: 48.1,
        },
        {
          id: '27bdb86a-5ee1-4ed9-86a7-227bebeb54ee',
          clientId: '8e423547-175f-4b89-b4d6-df971f1181b2',
          totalPrice: 25.8,
        },
      ],
      {},
    );
  },

  async down() {
    await OrdersModel.destroy({ truncate: true });
  },
};
