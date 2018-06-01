const addObjectProperty = (obj1, key, obj2) => {

  obj1[key] = obj2;
  return obj2;
};

module.exports = addObjectProperty;
