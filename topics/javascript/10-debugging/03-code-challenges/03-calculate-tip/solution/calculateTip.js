/* Regresa num1 por ciento de num2. */
const percent = (num1, num2) => num1 * num2 / 100;

const calculateTip = billAmount => percent(15, billAmount);

/**
 * ¿Cuál fue el problema con el código?
 *
 * La variable en la línea 11 tiene el mismo nombre que la función en la línea
 * 2.
 */

export default calculateTip;
