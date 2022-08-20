import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import ClientsModel from '../clients/clientsModel';
import { Order } from './orderEntity';

class OrdersModel extends Model<Order> {}

OrdersModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ClientsModel,
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

OrdersModel.hasOne(ClientsModel, {
  foreignKey: 'id',
  sourceKey: 'clientId',
  as: 'client',
});

export default OrdersModel;
