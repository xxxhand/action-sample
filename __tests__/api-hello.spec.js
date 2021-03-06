const request = require('supertest');
const BackendApp = require('../app');

describe('Hello api spec', () => {
  /** @type {request.SuperAgentTest} */
  let client;
  beforeAll(async () => {
    client = request.agent(new BackendApp().app);
  });
  afterAll(async () => {

  });
  test('should get response success', async () => {
    const res = await client
      .get('/api')

    expect(res.status).toBe(200)
    expect(res.body.result).toBe('Hello world');

    
      
  });
});
