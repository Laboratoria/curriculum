function transformEmployeeData(array) {
  var arrayMain = [];

  for (var i = 0; i < array.length; i++) {
    var arr = array[i];
    var obj = {};

    for (var j = 0; j < arr.length; j++) {
      obj[arr[j][0]] = arr[j][1];
    }

    arrayMain.push(obj);
  }

  return arrayMain;
}

module.exports = transformEmployeeData;
