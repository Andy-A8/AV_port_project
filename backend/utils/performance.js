// Function to measure execution time

function measureExecutionTime(func, args) {
  let start = performance.now();  // Start timing
  let result = func(...args);
  let end = performance.now();    // End timing
  return { result, timeTaken: `${(end - start).toFixed(4)} ms` };
}

module.exports = { measureExecutionTime };
