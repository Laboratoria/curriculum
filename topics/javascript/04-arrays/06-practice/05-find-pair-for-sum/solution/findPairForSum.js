const findPairForSum = (array, number) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if ((array[i] + array[j]) === number) {
        return [array[i], array[j]];
      }
    }
  }

  return [];
};

export default findPairForSum;
