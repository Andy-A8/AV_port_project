const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/', routes);

// Start Server(index.js)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
