/* Regresa num1 por ciento de num2. */
function percent(num1, num2) {
  return num1 / 100 * num2;
}

function calculateTip(billAmount) {
  var percent = percent(15, billAmount);
  return percent;
}

/**
 * ¿Cuál fue el problema con el código?
 *
 * ESCRIBA SU RESPUESTA AQUÍ.
 */

module.exports = calculateTip;
