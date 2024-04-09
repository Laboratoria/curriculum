const listAllValues = (obj) => {
  const arr = [];
  const arrKeys = Object.keys(obj);

  for (let i = 0; i < arrKeys.length; i += 1) {
    arr.push(obj[arrKeys[i]]);
  }

  return arr;
};

export default listAllValues;
