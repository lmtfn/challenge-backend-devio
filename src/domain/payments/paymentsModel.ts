import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
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

export default PaymentsModel;
