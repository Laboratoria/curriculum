function getLongestOfThreeWords(word1, word2, word3) {
  var strLong = word1;

  if (strLong.length < word2.length) {
    strLong = word2;
  }

  if (strLong.length < word3.length) {
    strLong = word3;
  }

  return strLong;
};

module.exports = getLongestOfThreeWords;
