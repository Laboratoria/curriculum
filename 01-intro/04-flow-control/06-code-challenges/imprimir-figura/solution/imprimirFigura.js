function espacios (n) {

  var s = '';

  for (var i = 0; i < n; i++) {
    s += ' ';
  }

  return s;
}

function imprimir (num) {

  var figura = '';

  for (var i = 0; i < num; i++) {

    for (var j = 0; j < num - i; j++) {
      figura += '_';
    }

    figura += '/';

    for (var j = 0; j < num - i; j++) {
      figura += "'";
    }

    figura += '\\';
  }

  console.log(figura);
}

var n = prompt();
imprimir (n);
