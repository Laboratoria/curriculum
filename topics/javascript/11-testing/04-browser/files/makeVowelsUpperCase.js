const isVowel = (char) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i += 1) {
    if (char === vowels[i]) {
      return true;
    }
  }

  return false;
};

const makeVowelsUpperCase = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isVowel(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;
};

if (typeof module !== 'undefined') {
  module.exports = makeVowelsUpperCase;
}
