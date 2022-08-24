import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import ProductsModel from '../products/productsModel';
import { OrderProduct } from './orderProductEntity';

class OrdersProductsModel extends Model<OrderProduct> {}

OrdersProductsModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ProductsModel,
        key: 'id',
      },
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    partialPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'orders_products',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

OrdersProductsModel.hasOne(ProductsModel, {
  foreignKey: 'id',
  sourceKey: 'productId',
  as: 'product',
});

export default OrdersProductsModel;
