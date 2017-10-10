function convertObjectToList(obj) {
  var arr = [],
    arrKeys = Object.keys(obj);

  for (var i = 0; i < arrKeys.length; i++)
    arr.push([arrKeys[i], obj[arrKeys[i]]]);

  return arr;
};

module.exports = convertObjectToList;
