const express = require('express');
const router = express.Router();

// Test Route
router.get('/', (req, res) => {
  res.send('Backend is running...');
});

module.exports = router;
