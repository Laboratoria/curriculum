function removeStringValuesLongerThan(num, obj) {
  for (var key in obj) {
    if (obj[key].length > num) {
      delete obj[key];
    }
  }

  return obj;
}

module.exports = removeStringValuesLongerThan;
