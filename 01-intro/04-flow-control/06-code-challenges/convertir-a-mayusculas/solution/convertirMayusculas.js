const convertir = (str) => {

  const firstLetter = str.charAt(0).toUpperCase();
  const length = str.length - 1;
  const lastletter = str.charAt(length).toUpperCase();
  const result = firstLetter + str.slice(1, length ) + lastletter;

  return result;
};

console.log (convertir ("Alexander") );

module.exports = convertir;
