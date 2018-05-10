function getSumOfAllElementsAtProperty(obj, key) {
  let sum = 0;
  const array = obj[key];

  // if (array instanceof Array) {
  if (Array.isArray(array) && (array.length > 0)) {
    sum = array[0];

    for (let i = 1; i < array.length; i += 1) { sum += array[i]; }
  }

  return sum;
}

module.exports = getSumOfAllElementsAtProperty;
