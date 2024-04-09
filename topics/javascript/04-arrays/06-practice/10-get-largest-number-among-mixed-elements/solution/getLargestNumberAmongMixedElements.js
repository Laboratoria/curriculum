const getLargestNumberAmongMixedElements = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let max = 0;
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
  }

  if (index === -1) {
    return 0;
  }

  return arr[index];
};

export default getLargestNumberAmongMixedElements;
