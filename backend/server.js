const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parse');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/api', apiRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start Server(api.js)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
app.listen(3000, () => console.log('Server is running on port 3000'));
