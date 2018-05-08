function imprimirTriangulo (n) {

  for (var i = 0; i < n; i++) {
    var s = '';

    for (var j = 0; j <= i; j++) {
      s += '#'
    }

    console.log (s);
  }
}

var n = prompt();
imprimirTriangulo (n);

module.exports = imprimirTriangulo;
