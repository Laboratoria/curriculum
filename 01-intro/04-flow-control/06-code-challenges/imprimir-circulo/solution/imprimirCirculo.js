function espacios (n) {

  var s = '';

  for (var i = 0; i < n; i++) s += ' ';

  return s
}

function imprimirCirculo (r) {

  var circulo = [];
  var espacios = [];
  var x = r;

  while (x >= 0) {

    var y = Math.sqrt( r * r - x * x);
    x--;
    var j = 0;
    var str = '';

    while (j <= y) {
      str += '**';
      j++;
    }

    var e = '';

    for (var i = 0; i < r - y; i++) {
      e += '  ';
    }

    console.log (e + str + str);
  }

  x = 0;

  while (x <= r) {

    var y = Math.sqrt ( r * r - x * x);
    x++;
    var j = 0;
    var str = '';

    while (j <= y) {
      str += '**';
      j++;
    }

    var e = '';

    for (var i = 0; i < r - y; i++) {
      e += '  ';
    }

    console.log (e + str + str);
  }
}

var n = prompt();
imprimirCirculo(n);

module.exports = imprimirCirculo;
