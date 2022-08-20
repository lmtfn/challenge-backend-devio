// import OrderProductsModel from './orderProductsModel';

const OrderProductsService = {
  async getProductsByOrderId(orderId: string) {
    // const orderExists = await OrdersModel.count({
    //   where: {
    //     id: orderId,
    //   },
    // });
    // if (!orderExists) throw new Error('Order not found');
    // const orderDetails = await OrdersModel.findAll({
    //   where: {
    //     id: orderId,
    //   },
    //   include: ['order_products', 'products'],
    // });
    // return orderDetails;
  },
};

export default OrderProductsService;
