const express = require('express');
const router = express.Router();

// Test Route
router.get('/', (req, res) => {
  res.send('Welcome to the Algorithm Visualizer - Backend');
});
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is healthy!' });
});

module.exports = router;
