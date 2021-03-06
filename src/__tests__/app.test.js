import request from 'supertest';
import { message } from '../api/health';
import app from '../app';
import config from '../config';

jest.mock('../config/logging');

describe('app', () => {
  describe('GET /error', () => {
    it('should return a 500 status code when we call the error endpoint', done => {
      request(app)
        .get('/error')
        .expect(500)
        .end(done);
    });
  });

  describe('GET /health', () => {
    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/health')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, { ...message, node_env: config.nodeEnv })
        .end(done);
    });
  });

  describe('GET /example', () => {
    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/example')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /exampleAuthenticated', () => {
    beforeEach(() => {
      process.env.AUTHORIZATION_KEYS = 'correct-key';
    });

    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/example-authenticated')
        .set('Authorization', 'correct-key')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /swagger', () => {
    it('should return a 200 when router is configured', done => {
      request(app)
        .get('/swagger')
        .expect(301)
        .end(done);
    });
  });
});
