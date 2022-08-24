import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import OrdersProductsModel from '../orderProducts/orderProductsModel';
import PaymentsModel from '../payments/paymentsModel';
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
      allowNull: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        'initiated',
        'sentToProduction',
        'concluded',
        'cancelled',
      ),
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

OrdersModel.hasMany(OrdersProductsModel, {
  foreignKey: 'orderId',
  sourceKey: 'id',
  as: 'orderitems',
});

export default OrdersModel;
