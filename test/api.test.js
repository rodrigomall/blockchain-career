const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('./../server');
describe('/', () => {
  describe('GET', () => {
    it('should return HTTP Status 200', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      expect(response.body).to.be.an('object');
    });
  });

  describe('POST', () => {
    it('should return HTTP Status 200', async () => {
      const response = await request(app)
        .post('/')
        .send({ message: 'false' })
        .expect(200);
      expect(response.body).to.be.an('object');
    });
  });
});