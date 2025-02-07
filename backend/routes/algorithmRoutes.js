const express = require('express');
const router = express.Router();

// Import middleware for input validation
const { validateArray, validateSearchInput } = require('../middleware/validate_input');

// Import sorting and searching service functions
const { bubbleSort, quickSort, mergeSort } = require('../services/sortingService');
const { linearSearch, binarySearch } = require('../services/searchingService');

// Import execution time measurement
const { measureExecutionTime } = require('../utils/performance');

// Import execution for logging algorithms
const algorithmLog = require('../models/algorithmLog');

// Import sorting and searching API
const sortingController = require('../controllers/sortingController');
const searchingController = require('../controllers/searchingController');

// Sorting Routes
// Bubble Sort Route
router.post('/sort/bubble', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const { result, timeTaken } = measureExecutionTime(bubbleSort, [array]);
    res.status(200).json({ sortedArray: result, executionTime: timeTaken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Quick Sort Route
router.post('/sort/quick', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const { result, timeTaken } = measureExecutionTime(quickSort, [array]);
    res.status(200).json({ sortedArray: result, executionTime: timeTaken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Merge Sort Route
router.post('/sort/merge', validateArray, (req, res) => {
  try {
    const { array } = req.body;
    const { result, timeTaken } = measureExecutionTime(mergeSort, [array]);
    res.status(200).json({ sortedArray: result, executionTime: timeTaken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Searching Routes
// Linear Search Route
router.post('/search/linear', validateSearchInput, (req, res) => {
  try {
    const { array, target } = req.body;
    const { result, timeTaken } = measureExecutionTime(linearSearch, [array, target]);
    res.status(200).json({ foundAtIndex: result, executionTime: timeTaken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Binary Search Route
router.post('/search/binary', validateSearchInput, (req, res) => {
  try {
    const { array, target } = req.body;

    // Ensure array is sorted for binary search
    const sortedArray = [...array].sort((a, b) => a - b);

    const { result, timeTaken } = measureExecutionTime(binarySearch, [sortedArray, target]);
    res.status(200).json({ foundAtIndex: result, executionTime: timeTaken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Save Execution Logs
router.post('/log', async (req, res) => {
  try {
    const log = new algorithmLog(req.body);
    await log.save();
    res.status(201).json({ message: 'Log saved successfully', log });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all algorithm execution logs
router.get('/logs', async (req, res) => {
  try {
    const logs = await algorithmLog.find().sort({ createdAt: -1 }); //  Get latest first
    res.json(logs);
  } catch (err) {
    console.error("Error retrieveing history", err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/sort', sortingController.sortArray);
router.post('/search', searchingController.searchArray);

// Metadata Route
router.get('/metadata', (req, res) => {
  res.json({
    sorting: ['bubble', 'quick', 'merge'],
    searching: ['linear', 'binary']
  });
});

// Export the router
module.exports = router;
