import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import { Client } from './clientEntity';

class ClientsModel extends Model<Client> {}

ClientsModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'clients',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

export default ClientsModel;
