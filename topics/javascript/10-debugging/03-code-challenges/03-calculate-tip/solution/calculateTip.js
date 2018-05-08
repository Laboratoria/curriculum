/* Regresa num1 por ciento de num2. */
function calculatePercent(num1, num2) {
  return num1 / 100 * num2;
}

function calculateTip(billAmount) {
  var percent = calculatePercent(15, billAmount);
  return percent;
}

calculateTip(100);

/**
 * ¿Cuál fue el problema con el código?
 *
 * La variable en la línea 11 tiene el mismo nombre que la función en la línea
 * 2.
 */

module.exports = calculateTip;
