const vowels = ['aeiou'].split('');

const isVowel = char => vowels.indexOf(char) > -1;

const makeVowelsUpperCase = string => string.split('').reduce(
  (memo, char) => `${memo}${isVowel(char) ? char.toUpperCase() : char}`,
  '',
);

// const isVowel = function (char) {
//   return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
// };

// const makeVowelsUpperCase = function (string) {
//   return string
//     .split('')
//     .reduce(function (memo, char) {
//       return `${memo}${isVowel(char) ? char.toUpperCase() : char}`;
//     }, '');
// };

// const makeVowelsUpperCase = function (string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     result += isVowel(string[i]) ? string[i].toUpperCase() : string[i];
//   }
//   return result;
// };

// const makeVowelsUpperCase = function (string) {
//   let result = '';
//
//   for (let i = 0; i < string.length; i++) {
//     if (isVowel(string[i])) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i];
//     }
//   }
//
//   return result;
// };

// console.log(makeVowelsUpperCase('lupo'));
