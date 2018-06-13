const removeStringValuesLongerThan = (num, obj) => {
  const obj2 = { ...obj };
  Object.keys(obj2).forEach((key) => {
    if (obj2[key].length > num) {
      delete obj2[key];
    }
  });
  return obj2;
};

module.exports = removeStringValuesLongerThan;
