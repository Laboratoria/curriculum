/* Retorna num1 percentual de num2. */
function calculatePercent(num1, num2) {
  return num1 / 100 * num2;
}

function calculateTip(billAmount) {
  var percent = calculatePercent(15, billAmount);
  return percent;
}

calculateTip(100);

/**
 * Qual foi o problema com o código?
 *
 * A variável na linha 11 tem o mesmo nome que a função na linha 2.
 */

module.exports = calculateTip;
