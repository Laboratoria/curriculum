export const repeat = (operation, num) => {
  if (num <= 0) {
    return;
  }
  operation();
  return repeat(operation, --num);
};

export const doubleAll = numbers => numbers.map(num => num * 2);

export const getShortMessages = messages => messages
  .filter(item => item.message.length < 50)
  .map(item => item.message);

  export const countWords = arr => arr.reduce((countMap, word) => {
  countMap[word] = ++countMap[word] || 1;
  return countMap;
}, {});
