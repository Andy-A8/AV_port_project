const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const algorithmRoutes = require('./routes/algorithmRoutes');
const mongoose = require('express');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware for API routes
app.use('/api', routes);
app.use('/api/algorithms', algorithmRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running...')
});

// Middleware for handling error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'An unexpected error occurred.' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
