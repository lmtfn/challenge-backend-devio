import { enumPaymentType } from '../../../domain/payments/paymentEntity';
import PaymentsModel from '../../../domain/payments/paymentsModel';

export default {
  async up() {
    await PaymentsModel.bulkCreate(
      [
        {
          id: '261a3d80-8f55-4107-b6cd-8d64c76ec84a',
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          type: enumPaymentType.pix,
          receiptNumber: '8237823742872fg',
        },
        {
          id: 'fc38e7e4-cd39-46ce-a223-cb8f40e3c784',
          orderId: '27bdb86a-5ee1-4ed9-86a7-227bebeb54ee',
          type: enumPaymentType.creditCard,
          receiptNumber: '87498732723487234u',
        },
        {
          id: '6371e5f7-11a0-49a7-8431-5c9b8513c6f3',
          orderId: '27bdb86a-5ee1-4ed9-86a7-227bebeb54ee',
          type: enumPaymentType.debitCard,
          receiptNumber: '283974928374283742387h',
        },
      ],
      {},
    );
  },

  async down() {
    await PaymentsModel.destroy({ truncate: true });
  },
};
