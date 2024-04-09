function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) { // end condition
      return value;
    }
    return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
  })(0, initial); // IIFE. kick off recursion with initial values
}

export default reduce;
