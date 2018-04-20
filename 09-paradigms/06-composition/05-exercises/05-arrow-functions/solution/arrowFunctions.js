exports.repeat = (operation, num) => {
  if (num <= 0) {
    return;
  }
  operation();
  return exports.repeat(operation, --num);
};

exports.doubleAll = numbers => numbers.map(num => num * 2);

exports.getShortMessages = messages => messages
  .filter(item => item.message.length < 50)
  .map(item => item.message);

exports.countWords = arr => arr.reduce((countMap, word) => {
  countMap[word] = ++countMap[word] || 1;
  return countMap;
}, {});
