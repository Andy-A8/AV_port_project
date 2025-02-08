const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');

test('Bubble sort should sort the array', () => {
  const input = [5, 3, 8, 4, 2];
  const result = bubbleSort(input).sortedArray;
  expect(result).toEqual([2, 3, 4, 5, 8]);
});

test('Quick sort should sort the array', () => {
  const input = [10, -2, 0, 7, 3];
  const result = quickSort(input).arr;
  expect(result).toEqual([-2, 0, 3, 7, 10]);
});

test('Merge sort should sort the array', () => {
  const input = [6, 1, 9, 5, 3];
  const result = mergeSort(input).sortedArray;
  expect(result).toEqual([1, 3, 5, 6, 9]);
});
