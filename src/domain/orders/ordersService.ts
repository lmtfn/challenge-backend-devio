// import OrdersModel from '../orders/ordersModel';

const OrdersService = {
  async createNewOrder() {
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
  async getOrderById(orderId: string) {
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
  async updateOrderInfo(orderId: string) {
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
  async updateOrderStatus(orderId: string) {
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

export default OrdersService;
