import sequelize from 'sequelize';
import OrderProductsModel from '../orderProducts/orderProductsModel';

const ProductsService = {
  async getProductsList() {
    const productsList = await OrderProductsModel.findAll({
      attributes: [
        'productId',
        [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
      ],
      group: ['productId'],
      order: [['total_amount', 'DESC']],
      include: 'product',
    });
    return productsList;
  },
};

export default ProductsService;
