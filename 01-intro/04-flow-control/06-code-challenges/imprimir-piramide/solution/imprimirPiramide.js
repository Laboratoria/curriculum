function imprimirPiramide (n) {

  function espacios (n) {

    var s = '';

    for (var i = 0; i < n; i++) {
      s += ' ';
    }

    return s;
  }

  for (var i = 0; i < n; i++) {
    var s = '';

    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }

    var e = espacios (n - (i+1));

    for (var j = i; j >= 1; j--) {
      s += j;
    }

    console.log(e + s);
  }
}

var n = prompt ();
imprimirPiramide (n);

module.exports = imprimirPiramide;
