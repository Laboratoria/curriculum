function removeStringValuesLongerThan(num, obj) {
  for (const key in obj) {
    if (obj[key].length > num) {
      delete obj[key];
    }
  }

  return obj;
}

module.exports = removeStringValuesLongerThan;
