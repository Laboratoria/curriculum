const getLongestOfThreeWords = (word1, word2, word3) => {
  let strLong = word1;

  if (strLong.length < word2.length) {
    strLong = word2;
  }

  if (strLong.length < word3.length) {
    strLong = word3;
  }

  return strLong;
};

export default getLongestOfThreeWords;
