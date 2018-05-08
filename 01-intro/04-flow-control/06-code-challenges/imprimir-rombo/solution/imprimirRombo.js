function espacios (n) {

  var s = '';

  for (var i = 0; i < n; i++) {
    s += ' ';
  }

  return s;
}

function imprimirRombo (n) {

  for (var k = 0; k < 2 * n - 1; k++) {

    var i = k < n ? k :  2 * n - 2 - k;
    var content = '';

    for (j = 1; j <= 2 * i + 1; j++){
      content +=  j;
      var sp = espacios (n - (i + 1));
    }

    console.log(sp + content);
  }
}

var n = prompt();
imprimirRombo(n);

module.exports = imprimirRombo;
