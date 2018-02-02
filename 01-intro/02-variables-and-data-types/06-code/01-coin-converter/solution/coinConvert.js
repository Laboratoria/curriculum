module.exports = function coinConverter() {

  var usDollars = 100;
  var peruvianSoles = usDollars*3.25;
  var mexicanPesos = usDollars*18;
  var chileanPesos = usDollars*660;

  return {
    // Imprime el monto equivalente en soles
    soles :() => console.log(peruvianSoles);

    // Imprime el monto equivalente en pesos mexicanos
    pesosMx:() => console.log(mexicanPesos);

    // Imprime el monto equivalente en pesos chilenos
    pesosCl:() => console.log(chileanPesos);
  };
};
