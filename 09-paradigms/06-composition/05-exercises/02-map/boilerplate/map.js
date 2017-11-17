//
// TAREA
//
// Refactorizar la siguiente función reemplazando el bucle `for` con
// `Array#map`.
//

module.exports = function doubleAll(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
};
