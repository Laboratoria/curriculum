const reverse = (array) => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }

  return result;
};

export default reverse;
