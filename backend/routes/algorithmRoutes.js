const express = require('express');
const router = express.Router();
const { validateArray } = require('../middleware/validate_input');
const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');

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
  const { array } = req.body;
  const result = quickSort(array);
  res.status(200).json(result);
});

router.post('/sort/merge', (req, res) => {
  const { array } = req.body;
  const result = mergeSort(array);
  res.status(200).json(result);
});

// Searching Routes
router.post('/search/linear', validateArray, (req, res) => {
  res.send('Linear search logic will go here.');
});

router.post('/search/binary', validateArray, (req, res) => {
  res.send('Binary search logic will go here.');
});

// Metadata Route
router.get('/metadata', (req, res) => {
  res.json({
    sorting: ['bubble', 'quick', 'merge'],
    searching: ['linear', 'binary']
  });
});

module.exports = router;
