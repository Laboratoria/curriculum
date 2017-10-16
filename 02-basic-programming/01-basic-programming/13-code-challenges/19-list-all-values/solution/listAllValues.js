function listAllValues(obj) {
  var arr = [],
    arrKeys = Object.keys(obj);

  for (var i = 0; i < arrKeys.length; i++)
    arr.push(obj[arrKeys[i]]);

  return arr;
};

module.exports = listAllValues;
