const accentMap = {
  'á':'a',
  'é':'e',
  'í':'i',
  'ó':'o',
  'ú':'u',
};


function foldAccent (char) {
  return accentMap[char] || char;
};


if (typeof module !== 'undefined') {
  module.exports = foldAccent;
}
