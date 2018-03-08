function getProductOfAllElementsAtProperty(obj, key) {
  var product = 0;
  var array = obj[key];

  // if (array instanceof Array) {
  if (Array.isArray(array) && (0 < array.length)) {
    product = array[0];

    for (var i = 1; i < array.length; i++)
      product *= array[i];
  }

  return product;
};

module.exports = getProductOfAllElementsAtProperty;
