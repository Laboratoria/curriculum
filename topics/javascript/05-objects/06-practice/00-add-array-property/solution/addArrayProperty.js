const addArrayProperty = (obj, key, arr) => {
  const myObj = obj;
  myObj[key] = arr;

  return myObj;
};

module.exports = addArrayProperty;
