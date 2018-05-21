const countVowels = (str) => {
  const vowels = 'aeiou';
  const lowercased = str.toLowerCase();
  let counter = 0;

  for (let i = 0; i < lowercased.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lowercased[i] === vowels[j]) {
        counter += 1;
      }
    }
  }

  return counter;
};

module.exports = countVowels;
