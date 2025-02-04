const mongoose = require('mongoose');

const AlgorithmLogSchema = new mongoose.Schema({
  algorithm: String,
  input: [Number],
  output: [Number],
  steps: [[Number]],
  executionTime: String,
});

module.exports = mongoose.model('AlgorithmLog', AlgorithmLogSchema);
