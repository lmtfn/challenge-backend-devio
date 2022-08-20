import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import PaymentsModel from '../payments/paymentsModel';
import OrderProductsModel from '../orderProducts/orderProductsModel';
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
    clientsName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('initiated', 'sentToProduction', 'concluded'),
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

OrdersModel.hasMany(PaymentsModel, {
  foreignKey: 'orderId',
  sourceKey: 'id',
  as: 'payments',
});

OrdersModel.hasMany(OrderProductsModel, {
  foreignKey: 'orderId',
  sourceKey: 'id',
  as: 'orderproducts',
});

export default OrdersModel;
