function filterOddElements(arr) {
  const ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      ret.push(arr[i]);
    }
  }

  return ret;
}

module.exports = filterOddElements;
