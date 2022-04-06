import { should } from 'chai';
import supertest from 'supertest';
import app from '../../app';

const api = supertest(app);
should();

describe('Prime Numbers', () => {
  const endpoint = '/api/primeNumber';
  describe('Get Prime Numbers', () => {
    it('Should return error by not entering number', async () => {
      const response = await api.get(endpoint);
      response.status.should.be.eql(500);
      response.body.message.should.be.eql('You must enter a number first');
    });
    it('Should return the prime numbers', async () => {
      const response = await api.get(`${endpoint}?number=15`);
      response.status.should.be.eql(200);
      response.body.data.should.be.eql('13,11,7,5,3,2');
    });
  });
});
