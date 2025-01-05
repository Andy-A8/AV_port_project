const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Basic route - GET method
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server(index.js)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
