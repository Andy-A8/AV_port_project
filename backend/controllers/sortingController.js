const AlgorithmLog = require('../models/AlgorithmLog');
const { bubbleSort, quickSort } = require('../services/sortingService');

exports.sortArray = async (req, res) => {
  const { array, algorithm } = req.body;
  let result;

// Select the appropriate sorting algorithm
  if (algorithm === 'bubbleSort') {
    result = bubbleSort(array);
  } else if (algorithm == 'quickSort') {
    result = quickSort(array);
  } else {
      return res.status(400).json({ error: "Invalid sorting algorithm" });
  }

  // Save execution log to MongoDB
  const log = new AlgorithmLog({
    algorithm,
    input: array,
    output: JSON.stringify(result.sortedArray),
    steps: result.steps,
    executionTime: `${result.steps.length} steps`
  });
  await log.save();

  res.json(result);
};
