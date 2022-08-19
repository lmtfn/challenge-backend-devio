import { QueryInterface } from 'sequelize';
import ProductsModel from '../../../domain/products/productsModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ProductsModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ProductsModel.drop();
    }),
};
