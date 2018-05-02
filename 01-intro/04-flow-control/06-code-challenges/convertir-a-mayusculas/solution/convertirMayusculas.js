function convertir (str) {

  var firstLetter = str.charAt(0).toUpperCase();
  var length = str.length - 1;
  var lastletter = str.charAt(length).toUpperCase();
  var result = firstLetter + str.slice(1, length ) + lastletter;

  return result;
}

console.log (convertir ("Alexander") );
