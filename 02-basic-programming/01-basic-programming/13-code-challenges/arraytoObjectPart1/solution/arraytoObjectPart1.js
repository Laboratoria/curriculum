function transformFirstAndLast(array) {
  var obj = {};

  obj[array[0]] = array[array.length - 1];

  return obj;
}

// var array = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

// transformFirstAndLast(array);
