function addObjectProperty(obj1, key, obj2) {
  /* eslint-disable-next-line no-param-reassign */
  obj1[key] = obj2;
  return obj2;
}

module.exports = addObjectProperty;
