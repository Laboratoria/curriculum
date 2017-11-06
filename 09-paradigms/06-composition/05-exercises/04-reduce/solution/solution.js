function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1;
      return countMap;
    }, {});
  }
  
  module.exports = countWords