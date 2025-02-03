const express = require('express');
const router = express.Router();
const { validateArray } = require('../middleware/validate_input');
const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');
const { linearSearch, binarySearch } = require('../services/searchingService');

// Sorting Routes
router.post('/sort/bubble', (req, res) => {
  try {
    const { array } = req.body;
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    const result = bubbleSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/sort/quick', (req, res) => {
  try {
    const { array } = req.body;
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    const result = quickSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/sort/merge', (req, res) => {
  try {
    const { array } = req.body;
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    const result = mergeSort(array);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Searching Routes
router.post('/search/linear', (req, res) => {
  try {
    const { array, target } = req.body;
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    const result = linearSearch(array, target);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/search/binary', (req, res) => {
  try {
    const { array, target } = req.body;
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    const sortedArray = [...array].sort((a, b) => a - b); // Ensure array is sorted
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

module.exports = router;
