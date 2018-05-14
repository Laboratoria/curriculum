const imprimirCirculo = (r) => {

  const circulo = [];
  const espacios = [];
  let x = r;
  let i;

  while (x >= 0) {

    const y = Math.sqrt( r * r - x * x);
    let j = 0;
    let str = '';
    let e = '';
    x--;

    while (j <= y) {
      str += '**';
      j++;
    }

    for (i = 0; i < r - y; i++) {
      e += '  ';
    }

    console.log (e + str + str);
  }

  x = 0;

  while (x <= r) {

    const y = Math.sqrt ( r * r - x * x);
    let j = 0;
    let str = '';
    let e = '';
    x++;

    while (j <= y) {
      str += '**';
      j++;
    }

    for (i = 0; i < r - y; i++) {
      e += '  ';
    }

    console.log (e + str + str);
  }
}

var n = prompt();
imprimirCirculo(n);

module.exports = imprimirCirculo;
