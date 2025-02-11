const request = require('supertest');
const app = require('../server');

// Ensure server is properly closed after tests
afterAll(() => {
  server.close();
});

describe('Searching Controller Tests', () => {
  test('Linear search should find the target', async () => {
    const res = await request(app)
      .post('/search/linear')
      .send({ array: [4, 2, 7, 1, 9], target: 7 });

    expect(res.statusCode).toBe(200);
    expect(res.body.found).toBe(true);
    expect(res.body.index).toBe(2);
  });

  test('Binary search should find the target', async () => {
    const res = await request(app)
      .post('/search/binary')
      .send({ array: [1, 2, 4, 7, 9], target: 4 });

    expect(res.statusCode).toBe(200);
    expect(res.body.found).toBe(true);
    expect(res.body.index).toBe(2);
  });

  test('Searching API should return an error for missing target', async () => {
    const res = await request(app)
      .post('/search/linear')
      .send({ array: [4, 2, 7, 1, 9] });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Target is required');
  });
});
