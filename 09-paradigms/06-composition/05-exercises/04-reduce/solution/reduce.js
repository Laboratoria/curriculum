module.exports = (arr) => arr.reduce((countMap, word) => {
  countMap[word] = ++countMap[word] || 1;
  return countMap;
}, {});
