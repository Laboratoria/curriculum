function getLargestNumberAmongMixedElements(arr) {
  if (arr.length == 0) {
    return 0;
  }

  var max = 0;
  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
  }

  if (index == -1) {
    return 0;
  }

  return arr[index];
}

module.exports = getLargestNumberAmongMixedElements;
