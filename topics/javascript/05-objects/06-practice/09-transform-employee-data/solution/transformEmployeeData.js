function transformEmployeeData(array) {
  const arrayMain = [];

  for (let i = 0; i < array.length; i++) {
    const arr = array[i];
    const obj = {};

    for (let j = 0; j < arr.length; j++) {
      obj[arr[j][0]] = arr[j][1];
    }

    arrayMain.push(obj);
  }

  return arrayMain;
}

module.exports = transformEmployeeData;
