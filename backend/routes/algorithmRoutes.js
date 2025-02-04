const express = require('express');
const router = express.Router();

// Import middleware for input validation
const { validateArray, validateSearchInput } = require('../middleware/validate_input');

// Import sorting and searching service functions
const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');
const { linearSearch, binarySearch } = require('../services/searchingService');

// Sorting Routes
// Bubble Sort Route
router.post('/sort/bubble', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const result = bubbleSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Quick Sort Route
router.post('/sort/quick', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const result = quickSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Merge Sort Route
router.post('/sort/merge', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const result = mergeSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Searching Routes
// Linear Search Route
router.post('/search/linear', validateSearchInput, (req, res) => {
  try {
    const { array, target } = req.body;
    const result = linearSearch(array, target);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/search/binary', validateSearchInput, (req, res) => {
  try {
    const { array, target } = req.body;

    // Ensure array is sorted for binary search
    const sortedArray = [...array].sort((a, b) => a - b);

    const result = binarySearch(sortedArray, target);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Metadata Route
router.get('/metadata', (req, res) => {
  res.json({
    sorting: ['bubble', 'quick', 'merge'],
    searching: ['linear', 'binary']
  });
});

// Export the router
module.exports = router;
