const request = require('supertest');
const app = require('../server'); // Import your Express app

// Ensure server is properly closed after tests
afterAll(() => {
  server.close();
});

describe('Sorting Controller Tests', () => {
  test('Bubble sort should return a sorted array', async () => {
    const res = await request(app)
      .post('/sort/bubble')
      .send({ array: [5, 3, 8, 4, 2] });

    expect(res.statusCode).toBe(200);
    expect(res.body.sortedArray).toEqual([2, 3, 4, 5, 8]);
  });

  test('Quick sort should return a sorted array', async () => {
    const res = await request(app)
      .post('/sort/quick')
      .send({ array: [10, -2, 0, 7, 3] });

    expect(res.statusCode).toBe(200);
    expect(res.body.sortedArray).toEqual([-2, 0, 3, 7, 10]);
  });

  test('Merge sort should return a sorted array', async () => {
    const res = await request(app)
      .post('/sort/merge')
      .send({ array: [6, 1, 9, 5, 3] });

    expect(res.statusCode).toBe(200);
    expect(res.body.sortedArray).toEqual([1, 3, 5, 6, 9]);
  });

  test('Sorting API should return error for invalid input', async () => {
    const res = await request(app)
      .post('/sort/bubble')
      .send({ array: "not an array" });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid input, expected an array of numbers');
  });
});
