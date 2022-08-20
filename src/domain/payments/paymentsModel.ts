import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import OrdersModel from '../orders/ordersModel';
import { Payment } from './paymentEntity';

class PaymentsModel extends Model<Payment> {}

PaymentsModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: OrdersModel,
        key: 'id',
      },
    },
    type: {
      type: DataTypes.ENUM('pix', 'cash', 'creditCard', 'debitCard'),
      allowNull: false,
    },
    receipt: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'payments',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

PaymentsModel.hasOne(OrdersModel, {
  foreignKey: 'id',
  sourceKey: 'orderId',
  as: 'order',
});

export default PaymentsModel;