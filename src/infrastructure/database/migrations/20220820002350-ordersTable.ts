import { QueryInterface } from 'sequelize';
import OrdersModel from '../../../domain/orders/ordersModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrdersModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrdersModel.drop();
    }),
};
