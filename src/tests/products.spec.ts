// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Products, ao executar a função', () => {
  describe('getProductsList,', () => {
    test('em caso de sucesso, deve retornar 200', async () => {
      const response = await supertest(app).get('/products');

      expect(response.status).toBe(200);
    });

    test('deve retornar um objeto de objetos', async () => {
      const response = await supertest(app).get('/products');
      expect(typeof response).toBe('object');
    });
  });
});
