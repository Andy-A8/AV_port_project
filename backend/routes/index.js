const express = require('express');
const router = express.Router();

// Test Route
router.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = router;
