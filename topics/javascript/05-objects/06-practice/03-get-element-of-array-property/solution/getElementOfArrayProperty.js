const getElementOfArrayProperty = (obj, key, index) => {
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
};

export default getElementOfArrayProperty;
