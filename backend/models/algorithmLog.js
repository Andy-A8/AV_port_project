const mongoose = require('mongoose');

const AlgorithmLogSchema = new mongoose.Schema({
  algorithm: { type: String, required: true },
  input: { type: Array, required: true },
  output: { type: String, required: true },
  steps: { type: Array, required: true },
  executionTime: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AlgorithmLog', AlgorithmLogSchema);
