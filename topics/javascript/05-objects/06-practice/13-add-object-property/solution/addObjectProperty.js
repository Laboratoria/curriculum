const addObjectProperty = (obj1, key, obj2) => {
  const myObj2 = obj1;
  myObj2[key] = obj2;

  return myObj2;
};

module.exports = addObjectProperty;
