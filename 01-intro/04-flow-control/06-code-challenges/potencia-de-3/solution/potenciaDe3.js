function potenciade3() {

  for (var i = 1; ; i++) {

    var resultado = potencia (3, i);

    if (resultado < 10000)
    console.log(resultado);
    else
    break;
  }

  function potencia (b, e) {

    var respuesta = 1;

    for (var i = 1; i <= e; i++) {
      respuesta *= b;
    }
    return respuesta;

  }
}


module.exports = potenciade3;
