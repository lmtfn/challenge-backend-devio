// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de OrderProducts, ao executar a função', () => {
  describe('createItemInOrderId,', () => {
    const productId = 'eac110e5-c786-47bb-a5a4-212db4c778bc';
    const amount = 3;
    const partialPrice = 30.3;
    test('em caso de sucesso, deve retornar 201', async () => {
      const response = await supertest(app)
        .post('/order-items/8fea0c95-e661-4315-8164-1d740d1a8e38')
        .send({
          productId,
          amount,
          partialPrice,
        });

      expect(response.status).toBe(201);
    });

    test('em caso de sucesso, deve retornar objeto com tipos corretos', async () => {
      const response = await supertest(app)
        .post('/order-items/8fea0c95-e661-4315-8164-1d740d1a8e38')
        .send({
          productId,
          amount,
          partialPrice,
        });

      expect(response.body).toEqual(
        expect.objectContaining({
          orderId: '8fea0c95-e661-4315-8164-1d740d1a8e38',
          productId: 'eac110e5-c786-47bb-a5a4-212db4c778bc',
          amount: 3,
          partialPrice: 30.3,
        }),
      );
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app)
        .post('/order-items/dsdfsssdsadasd')
        .send({
          productId,
          amount,
          partialPrice,
        });

      expect(response.status).toBe(400);
    });
  });

  describe('getItemsInOrderId,', () => {
    test('em caso de sucesso, deve retornar 200', async () => {
      const response = await supertest(app).get(
        '/order-items/8fea0c95-e661-4315-8164-1d740d1a8e38',
      );
      expect(response.status).toBe(200);
    });

    test('em caso de sucesso, deve retornar objeto de objetos', async () => {
      const response = await supertest(app).get(
        '/order-items/8fea0c95-e661-4315-8164-1d740d1a8e38',
      );

      expect(typeof response.body).toBe('object');
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app).get('/order-items/dsdfsssdsadasd');

      expect(response.status).toBe(400);
    });
  });

  describe('updateItemInOrder,', () => {
    const amount = 2;
    const partialPrice = 20.2;
    test('em caso de sucesso, deve retornar 200', async () => {
      const response = await supertest(app)
        .patch('/order-items/e0d53ab6-36c0-4ed3-b32f-58f9e2646db1')
        .send({
          amount,
          partialPrice,
        });

      expect(response.status).toBe(200);
    });

    test('em caso de sucesso, deve retornar um objeto', async () => {
      const response = await supertest(app)
        .patch('/order-items/e0d53ab6-36c0-4ed3-b32f-58f9e2646db1')
        .send({
          amount,
          partialPrice,
        });

      expect(typeof response.body).toBe('object');
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app)
        .patch('/order-items/dsdfsssdsadasd')
        .send({
          amount,
          partialPrice,
        });

      expect(response.status).toBe(400);
    });
  });

  describe('deleteItemInOrder,', () => {
    test('em caso de sucesso, deve retornar mensagem de sucesso', async () => {
      const response = await supertest(app).delete(
        '/order-items/a1fe6bcb-978e-4d7e-a9d7-a064db201898',
      );
      expect(response.body).toBe('Item deleted');
    });

    test('caso o pedido não exista, deve retornar mensagem de erro', async () => {
      const response = await supertest(app).delete(
        '/order-items/dsdfsssdsadasd',
      );

      expect(response.status).toBe(400);
    });
  });
});
