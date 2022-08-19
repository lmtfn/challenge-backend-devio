'use strict';

import { QueryInterface, Sequelize } from "sequelize";
import ClientsModel from "../../../domain/clients/clients.model";

export default {
  async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ClientsModel.bulkCreate([{
      id: "ffec8efd-6dde-41f3-8475-c571caa048ba",
      name: 'Laura',
      cpf: "102.000.000-00"
    }, {
      id: "8e423547-175f-4b89-b4d6-df971f1181b2",
      name: "Teresa",
      cpf: "101.000.000-11"
    }, {
      id: "855ee2e3-9741-48fa-875b-a3daec60dc55",
      name: "João",
      cpf: "103.000.000-11"
    }], {});
  },

  async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ClientsModel.destroy({ truncate: true })
  }
};
