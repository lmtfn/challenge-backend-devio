import { QueryInterface } from 'sequelize';
// eslint-disable-next-line import/extensions
import ClientsModel from '../../../domain/clients/clients.model';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ClientsModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ClientsModel.drop();
    }),
};
