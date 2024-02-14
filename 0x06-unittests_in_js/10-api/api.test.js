const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const URL = 'http://localhost:7865';
  const userName = 'browniwils'

  it('GET / returns correct response', (done) => {
    request.get(`${URL}/`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${URL}/cart/16`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${URL}/cart/-16`, (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${URL}/cart/9babd1a0-fb34-404b-9966-d62c846824c0`, (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${URL}/login`, {json: {userName: userName}}, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Welcome ${userName}`);
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${URL}/available_payments`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
