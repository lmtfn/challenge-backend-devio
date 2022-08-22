// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';
import { enumPaymentType } from '../domain/payments/paymentEntity';
import PaymentsService from '../domain/payments/paymentsService';

describe('No controller de Payments, ao executar a função', () => {
  describe('insertPaymentMethod,', () => {
    test('em caso de sucesso, deve retornar 201', async () => {
      const response = await supertest(app).post('/order').send({
        type: 'pix',
        orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
        value: 10,
        receiptNumber: '82732s8737237',
      });

      expect(response.status).toBe(201);
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app).post('/payment').send({
        type: 'pix',
        orderId: 'dsdfsssdsadasd',
        value: 10,
        receiptNumber: '82732s8737237',
      });

      expect(response.status).toBe(400);
    });
  });
});

describe('No service de Payments, a função', () => {
  describe('insertPaymentMethod,', () => {
    test('deve retornar um objeto', async () => {
      expect(
        typeof PaymentsService.insertPaymentMethod(
          enumPaymentType.pix,
          10,
          '8fea0c95-e661-4315-8164-1d740d1a8e38',
          '82732s8737237',
        ),
      ).toBe('object');
    });
  });
});
