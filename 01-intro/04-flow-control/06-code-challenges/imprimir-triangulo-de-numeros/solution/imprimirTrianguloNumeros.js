function espacios (n) {

  var s = '';

  for (var i = 0; i < n; i++) {
    s += ' ';
  }

  return s;
}

function imprimir (n) {

  for (var k = 0; k < n; k++) {
    var i = k;
    var content = '';

    for (j = 1; j <= 2 * i + 1; j++) {
      if (j == i + 1) {
        content += j;
      } else {
        if (j == 1 || j == 2 * i + 1)
          content += '1';
        else
          content += ' ';
      }
      var sp = espacios(n - (i + 1));
    }

    console.log(sp + content);
  }
}

var n = prompt();
imprimir(n);
