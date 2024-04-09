const computeSumOfAllElements = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }

  return sum;
};

export default computeSumOfAllElements;
