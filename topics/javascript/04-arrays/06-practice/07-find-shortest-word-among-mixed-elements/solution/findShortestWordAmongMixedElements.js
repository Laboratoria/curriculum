const findShortestWordAmongMixedElements = (arr) => {
  if (arr.length === 0) {
    return '';
  }

  let min = 10000;
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      if (arr[i].length < min) {
        min = arr[i];
        index = i;
      }
    }
  }

  if (index === -1) {
    return '';
  }

  return arr[index];
};

export default findShortestWordAmongMixedElements;
