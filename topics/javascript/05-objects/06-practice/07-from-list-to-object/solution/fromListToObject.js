const fromListToObject = (array) => {
  const obj = {};

  for (let i = 0; i < array.length; i += 1) {
    /* eslint-disable-next-line prefer-destructuring */
    obj[array[i][0]] = array[i][1];
  }

  return obj;
};

export default fromListToObject;
