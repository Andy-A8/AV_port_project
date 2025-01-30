function bubbleSort(array) {
  const arr = [...array]; // Make a copy of the array to avoid mutation
  const steps = []; // To store intermediate steps for visualization

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      steps.push([...arr]); // Save the current state of the array
    }
  }
  return { sortedArray: arr, steps };
}

function quickSort(array) {
  const steps = []; // To store intermediate steps for visualization

  function recursiveSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
      steps.push([...left, pivot, ...right]); // Save the current state
    }

    return [...recursiveSort(left), pivot, ...recursiveSort(right)];
  }

  const sortedArray = recursiveSort(array);
  return { sortedArray, steps };
}

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
