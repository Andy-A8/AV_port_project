const AlgorithmLog = require('../models/AlgorithmLog');
const { bubbleSort, quickSort } = require('../services/sortingService');

exports.sortArray = async (req, res) => {
  const { array, algorithm } = req.body;
  let result;

// Select the appropriate sorting algorithm
  if (algorithm === 'bubble') {
    result = bubbleSort(array);
  } else if (algorithm == 'quick') {
    result = quickSort(array);
  } else {
      return res.status(400).json({ error: "Invalid sorting algorithm" });
  }

  // Save execution log
  const log = new AlgorithmLog({
    algorithm,
    input: array,
    output: result.sortedArray,
    steps: result.steps,
    executionTime: `${result.steps.length} steps`
  });
  await log.save();

  res.json(result);
};
