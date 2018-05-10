function fromListToObject(array) {
  const obj = {};

  for (let i = 0; i < array.length; i += 1) {
    obj[array[i][0]] = array[i][1];
  }

  return obj;
}

module.exports = fromListToObject;
