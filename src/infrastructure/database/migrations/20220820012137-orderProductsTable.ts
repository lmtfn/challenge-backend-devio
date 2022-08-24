import { QueryInterface } from 'sequelize';
import OrderProductsModel from '../../../domain/orderProducts/orderProductsModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrderProductsModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrderProductsModel.drop();
    }),
};
