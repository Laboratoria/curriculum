const getNthElement = (array, n) => {
  if (!array.length) {
    return undefined;
  }

  return array[n];
}

module.exports = getNthElement;
