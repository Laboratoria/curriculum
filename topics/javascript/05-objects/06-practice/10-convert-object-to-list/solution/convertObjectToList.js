function convertObjectToList(obj) {
  const arr = [];
  const arrKeys = Object.keys(obj);

  for (let i = 0; i < arrKeys.length; i++) {
    arr.push([arrKeys[i], obj[arrKeys[i]]]);
  }

  return arr;
}

module.exports = convertObjectToList;
