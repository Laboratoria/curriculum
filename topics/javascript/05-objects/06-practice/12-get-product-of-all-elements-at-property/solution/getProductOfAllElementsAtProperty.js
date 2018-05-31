function getProductOfAllElementsAtProperty(obj, key) {
  let product = 0;
  const array = obj[key];

  // if (array instanceof Array) {
  if (Array.isArray(array) && (array.length > 0)) {
    [product] = array;

    for (let i = 1; i < array.length; i += 1) { product *= array[i]; }
  }

  return product;
}

module.exports = getProductOfAllElementsAtProperty;
