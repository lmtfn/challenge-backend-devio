import OrderProductsModel from '../../../domain/orderProducts/orderProductsModel';

export default {
  async up() {
    await OrderProductsModel.bulkCreate(
      [
        {
          id: 'b762be46-af80-46f2-ac7a-4305a86b877b',
          productId: '83db0996-df3a-40ad-82d3-9c1f0afb5573',
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          amount: 1,
          parcialPrice: 12.9,
          observation: '',
        },
        {
          id: 'e0d53ab6-36c0-4ed3-b32f-58f9e2646db1',
          productId: 'eac110e5-c786-47bb-a5a4-212db4c778bc',
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          amount: 1,
          parcialPrice: 10.1,
          observation: '',
        },
        {
          id: '5d2e5482-9599-41ca-bc93-b21dece17bc4',
          productId: 'e8e56817-6cc8-4eb3-bb91-0cd34e86fbed',
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          amount: 1,
          parcialPrice: 25.1,
          observation: 'No onions',
        },
        {
          id: '10aaa69c-6c0a-4675-9306-b1a0115e5aec',
          productId: '83db0996-df3a-40ad-82d3-9c1f0afb5573',
          orderId: '27bdb86a-5ee1-4ed9-86a7-227bebeb54ee',
          amount: 2,
          parcialPrice: 25.8,
          observation: 'No peanut, please!',
        },
        {
          id: 'a1fe6bcb-978e-4d7e-a9d7-a064db201898',
          productId: '62e60c1b-2b27-4e02-9478-5194419ae5e9',
          orderId: 'f2f32fc5-0f77-45c0-93f0-5b2ec834bb27',
          amount: 1,
          parcialPrice: 24.1,
          observation: '',
        },
      ],
      {},
    );
  },

  async down() {
    await OrderProductsModel.destroy({ truncate: true });
  },
};
