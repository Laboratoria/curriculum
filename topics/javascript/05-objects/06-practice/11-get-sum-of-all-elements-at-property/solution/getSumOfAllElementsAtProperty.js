function getSumOfAllElementsAtProperty(obj, key) {
  var sum = 0;
  var array = obj[key];

  // if (array instanceof Array) {
  if (Array.isArray(array) && (0 < array.length)) {
    sum = array[0];

    for(var i = 1; i < array.length; i++)
      sum += array[i];
  }

  return sum;
};

module.exports = getSumOfAllElementsAtProperty;
