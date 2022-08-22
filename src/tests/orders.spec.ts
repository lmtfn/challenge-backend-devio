// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';
import { enumOrderStatus } from '../domain/orders/orderEntity';

describe('No controller de Orders, ao executar a função', () => {
  describe('createNewOrder,', () => {
    const status = enumOrderStatus.initiated;

    test('em caso de sucesso, deve retornar 201', async () => {
      const response = await supertest(app).post('/order').send({
        status,
      });

      expect(response.status).toBe(201);
    });

    test('em caso de sucesso, deve retornar objeto com tipos corretos', async () => {
      const response = await supertest(app).post('/order').send({
        status,
      });

      expect(typeof response.body).toBe('object');
    });
  });

  describe('getOrderSummary,', () => {
    test('em caso de sucesso, deve retornar 200', async () => {
      const response = await supertest(app).get(
        '/order/8fea0c95-e661-4315-8164-1d740d1a8e38',
      );
      expect(response.status).toBe(200);
    });

    test('em caso de sucesso, deve retornar objeto de objetos', async () => {
      const response = await supertest(app).get(
        '/order/8fea0c95-e661-4315-8164-1d740d1a8e38',
      );

      expect(typeof response.body).toBe('object');
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app).get('/order/dsdfsssdsadasd');

      expect(response.status).toBe(400);
    });
  });

  describe('updateOrderInfo,', () => {
    test('em caso de sucesso, deve retornar 200', async () => {
      const response = await supertest(app)
        .patch('/order/8fea0c95-e661-4315-8164-1d740d1a8e38')
        .send({
          clientsName: 'Maria',
          status: enumOrderStatus.sentToProduction,
        });

      expect(response.status).toBe(200);
    });

    test('em caso de sucesso, deve retornar um objeto', async () => {
      const response = await supertest(app)
        .patch('/order/8fea0c95-e661-4315-8164-1d740d1a8e38')
        .send({
          clientsName: 'Maria',
          status: enumOrderStatus.sentToProduction,
        });

      expect(typeof response.body).toBe('object');
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app)
        .patch('/order/dsdfsssdsadasd')
        .send({
          clientsName: 'Maria',
          status: enumOrderStatus.sentToProduction,
        });

      expect(response.status).toBe(400);
    });
  });
});
