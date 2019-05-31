function fromListToObject(array) {
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }

  return obj;
}

module.exports = fromListToObject;
