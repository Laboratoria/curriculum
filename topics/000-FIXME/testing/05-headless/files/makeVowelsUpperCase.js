const vowels = ['aeiou'].split('');

const isVowel = char => vowels.indexOf(char) > -1;

const makeVowelsUpperCase = string => string.split('').reduce(
  (memo, char) => `${memo}${isVowel(char) ? char.toUpperCase() : char}`,
  '',
);
