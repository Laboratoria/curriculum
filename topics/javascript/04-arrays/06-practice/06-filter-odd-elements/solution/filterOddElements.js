const filterOddElements = (arr) => {
  const ret = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 !== 0) {
      ret.push(arr[i]);
    }
  }

  return ret;
};

export default filterOddElements;
