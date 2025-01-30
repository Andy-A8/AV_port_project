const express = require('express');
const router = express.Router();
const { validateArray } = require('../middleware/validate_input');
const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');

// Sorting Routes
router.post('/sort/bubble', validateArray, (req, res) => {
  res.send('Bubble sort logic will go here.');
});

router.post('/sort/quick', validateArray, (req, res) => {
  res.send('Quick sort logic will go here.');
});

router.post('/sort/merge', validateArray, (req, res) => {
  res.send('Merge sort logic will go here.');
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
