const getLongestWordOfMixedElements = (arr) => {
  if (arr.length === 0) {
    return '';
  }

  let max = 0;
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      if (arr[i].length > max) {
        max = arr[i].length;
        index = i;
      }
    }
  }

  if (index === -1) {
    return '';
  }

  return arr[index];
};

export default getLongestWordOfMixedElements;
