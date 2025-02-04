// Optimized Sorting Algorithms Service

// Bubble sort function

function bubbleSort(arr) {
  let steps = [];  // Store each step for visualization
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push([...arr]);  // Store current state of array
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Stop early if no swaps were made
  }
  return { sortedArray: arr, steps };
}

//Quick sort function

function quickSort(arr, low = 0, high = arr.length - 1, steps = []) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high, steps);
    quickSort(arr, low, pivotIndex - 1, steps);
    quickSort(arr, pivotIndex + 1, high, steps);
  }
    return { arr, steps };
}

function partition(arr, low, high, steps) {
  let pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    steps.push([...arr]);  // Log current state
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  steps.push([...arr]);  // Log final state after partitioning
  return i;
}

// Merge sort function

function mergeSort(array) {
  const steps = []; // To store intermediate steps for visualization

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
      steps.push([...result, ...left, ...right]); // Save the current state
    }
    return [...result, ...left, ...right];
  }

  function recursiveSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = recursiveSort(arr.slice(0, mid));
    const right = recursiveSort(arr.slice(mid));

    return merge(left, right);
  }

  const sortedArray = recursiveSort(array);
  return { sortedArray, steps };
}

module.exports = { bubbleSort, quickSort, mergeSort };
