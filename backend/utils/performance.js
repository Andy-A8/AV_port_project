// Function to measure execution time

function measureExecutionTime(func, args) {
  let start = performance.now();  // Start timing
  let result = func(...args);
  let end = performance.now();    // End timing
  let timeTaken = `${(end - start).toFixed(4)} ms`; 
  return { result, timeTaken };
}

module.exports = { measureExecutionTime };
