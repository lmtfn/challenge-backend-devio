import ProductsModel from '../products/productsModel';

const ProductsService = {
  async productExists(productId: string) {
    const productExists = await ProductsModel.count({
      where: {
        id: productId,
      },
    });
    return productExists;
  },

  async getUnitPrice(productId: string) {
    const productExists = await this.productExists(productId);
    if (!productExists) throw new Error('Order not found');

    const unitPrice: any = await ProductsModel.findOne({
      where: {
        id: productId,
      },
    });
    return unitPrice.unitPrice;
  },
};

export default ProductsService;
