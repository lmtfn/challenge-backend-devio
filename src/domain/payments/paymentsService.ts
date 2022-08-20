// import PaymentsModel from '../payments/paymentsModel';

const PaymentsService = {
  async insertPaymentMethod(type: string, orderId: string) {
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

export default PaymentsService;
