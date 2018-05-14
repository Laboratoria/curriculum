const contar = (str) => {

  let string = str.toLowerCase();
  let contador = 0;

  for (let x = 0; x < string.length; x++) {

    if ((string.charAt(x) == 'a') || (string.charAt(x) == 'e') || (string.charAt(x) == 'i') || (string.charAt(x) == 'o') || (string.charAt(x) == 'u')) {
      contador++;
    }
  }

  return contador;
}

module.exports = contar;
