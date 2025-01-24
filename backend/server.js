const express = require("express");
const cors = require('cors');
const routes = require('./routes/index');
const apiRoutes = require("./routes/api");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/', routes);
app.use("/api", apiRoutes);

// Middleware for json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// 404 middleware to handle undefined routes
app.use((req, res, next) => { 
  res.status(404).json({ error: "Route not found" });
});

// Middleware to hande global error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server is running on http://localhost:${PORT}");
});
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
