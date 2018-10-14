/* Retorna num1 percentual de num2. */
function percent(num1, num2) {
  return num1 / 100 * num2;
}

function calculateTip(billAmount) {
  var percent = percent(15, billAmount);
  return percent;
}

/**
 * Qual foi o problema com o código?
 *
 * ESCREVA SUA RESPOSTA AQUI.
 */

module.exports = calculateTip;
