const countVowels = (str) => {
  const vowels = 'aeiou';
  const lowercased = str.toLowerCase();
  let counter = 0;

  for (let i = 0; i < lowercased.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (lowercased[i] === vowels[j]) {
        counter += 1;
      }
    }
  }

  return counter;
};

export default countVowels;
