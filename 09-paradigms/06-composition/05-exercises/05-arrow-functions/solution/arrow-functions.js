// Higher Order Functions
exports.repeat = (operation, num) => {
  if (num <= 0) {
    return;
  }
  operation();
  return exports.repeat(operation, --num);
};

// Map
exports.doubleAll = numbers => numbers.map(num => num * 2);

// Filter
exports.getShortMessages = messages => messages
  .filter(item => item.message.length < 50)
  .map(item => item.message);

// Reduce
exports.countWords = arr => arr.reduce((countMap, word) => {
  countMap[word] = ++countMap[word] || 1;
  return countMap;
}, {});