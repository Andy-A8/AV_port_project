// Searching Algorithms Service

// Linear search function

function linearSearch(array, target) {
  const steps = []; // To store the indexes visited for visualization
  for (let i = 0; i < array.length; i++) {
    steps.push(i); // Track which index is being checked
    if (array[i] === target) {
      return { found: true, index: i, steps };
    }
  }
  return { found: false, index: -1, steps }; // If target not found
}

// Binary search function

function binarySearch(array, target) {
  const steps = []; // To store the indexes visited for visualization
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    steps.push(mid); // Track the middle index being checked

    if (array[mid] === target) {
      return { found: true, index: mid, steps };
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return { found: false, index: -1, steps }; // If target not found
}

// Export both functions
module.exports = { linearSearch, binarySearch };
