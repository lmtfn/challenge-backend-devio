import ProductsModel from '../../../domain/products/productsModel';

export default {
  async up() {
    await ProductsModel.bulkCreate(
      [
        {
          id: '83db0996-df3a-40ad-82d3-9c1f0afb5573',
          name: 'Mc Flurry',
          category: 'Deserts',
          code: '3001',
          unitPrice: 12.9,
        },
        {
          id: 'eac110e5-c786-47bb-a5a4-212db4c778bc',
          name: 'French Fries',
          category: 'Side dishes',
          code: '2001',
          unitPrice: 10.1,
        },
        {
          id: '62e60c1b-2b27-4e02-9478-5194419ae5e9',
          name: 'Big Mac',
          category: 'Sandwiches',
          code: '1001',
          unitPrice: 24.1,
        },
        {
          id: 'e8e56817-6cc8-4eb3-bb91-0cd34e86fbed',
          name: 'Cheddar McMelt',
          category: 'Sandwiches',
          code: '1002',
          unitPrice: 25.1,
        },
      ],
      {},
    );
  },

  async down() {
    await ProductsModel.destroy({ truncate: true });
  },
};
