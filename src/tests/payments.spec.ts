// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';
import { enumPaymentType } from '../domain/payments/paymentEntity';
import PaymentsService from '../domain/payments/paymentsService';

describe('No controller de Payments, ao executar a função', () => {
  describe('insertPaymentMethod,', () => {
    test('em caso de sucesso, deve retornar 201', async () => {
      const response = await supertest(app)
        .post('/payment/8fea0c95-e661-4315-8164-1d740d1a8e38')
        .send({
          type: 'pix',
          value: 10,
          receiptNumber: '82732skjahdjash8737237',
        });

      expect(response.status).toBe(201);
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app)
        .post('/payment/dsdfsssdsadasd')
        .send({
          type: 'pix',
          value: 10,
          receiptNumber: '82732gs8737237',
        });

      expect(response.status).toBe(400);
    });
  });
});

describe('No service de Payments, a função', () => {
  describe('insertPaymentMethod,', () => {
    test('deve retornar um objeto', async () => {
      expect(
        typeof (await PaymentsService.insertPaymentMethod({
          type: enumPaymentType.pix,
          value: 10,
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          receiptNumber: '82732s87aljdadasl37237',
        })),
      ).toBe('object');
    });
  });
});
