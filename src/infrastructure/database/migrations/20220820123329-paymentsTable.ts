import { QueryInterface } from 'sequelize';
import PaymentsModel from '../../../domain/payments/paymentsModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await PaymentsModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await PaymentsModel.drop();
    }),
};
