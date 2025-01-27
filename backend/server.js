const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running...')
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
