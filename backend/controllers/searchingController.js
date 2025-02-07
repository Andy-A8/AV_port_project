const AlgorithmLog = require('../models/AlgorithmLog');
const { binarySearch, linearSearch } = require('../services/searchingService');

exports.searchArray = async (req, res) => {
  const { array, target, algorithm } = req.body;
  let result;

  if (algorithm === 'binary') {
    result = binarySearch(array, target);
  } else if (algorithm === 'linear') {
    result = linearSearch(array, target);
  } else {
    return res.status(400).json({ error: 'Invalid search algorithm' });
  }

  // Save execution log to MongoDB
  const log = new AlgorithmLog({
    algorithm,
    input: array,
    output: result.index !== -1 ? `Found at index ${result.index}` : 'Not found',
    steps: result.steps,
    executionTime: `${result.steps.length} steps`
  });
  await log.save();

  res.json(result);
};
