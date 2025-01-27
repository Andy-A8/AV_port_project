const express = require('express');
const router = express.Router();

// Sorting Routes
router.post('/sort/bubble', (req, res) => {
  res.send('Bubble sort logic will go here.');
});

router.post('/sort/quick', (req, res) => {
  res.send('Quick sort logic will go here.');
});

router.post('/sort/merge', (req, res) => {
  res.send('Merge sort logic will go here.');
});

// Searching Routes
router.post('/search/linear', (req, res) => {
  res.send('Linear search logic will go here.');
});

router.post('/search/binary', (req, res) => {
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
