import { QueryInterface } from "sequelize";
import ClientsModel from "../../../domain/clients/clients.model";

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ClientsModel.sync({ force: true })
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ClientsModel.drop()
        }
    )
};