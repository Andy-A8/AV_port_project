const { linearSearch, binarySearch } = require('../services/searchingService');

test('Linear search should find the target', () => {
  const input = [4, 2, 7, 1, 9];
  const target = 7;
  const result = linearSearch(input, target);
  expect(result.found).toBe(true);
  expect(result.index).toBe(2);
});

test('Binary search should find the target', () => {
  const input = [1, 2, 4, 7, 9].sort((a, b) => a - b);
  const target = 4;
  const result = binarySearch(input, target);
  expect(result.found).toBe(true);
  expect(result.index).toBe(2);
});

