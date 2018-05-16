function getElementOfArrayProperty(obj, key, index) {
  // var output = getElementOfArrayProperty(obj, 'key', 0);
  // console.log(output); // --> 'Jamil'

  if (!obj[key]) {
    return undefined;
  }

  if (!Array.isArray(obj[key])) {
    return undefined;
  }

  if (!obj[key][index]) {
    return undefined;
  }

  return obj[key][index];
}

module.exports = getElementOfArrayProperty;
