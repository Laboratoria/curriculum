module.exports = function doubleAll(numbers) {
  //TAREA
  //Refactorizar el siguiente código reemplazando el bucle `for`
  //con `Array#map`. 
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result
};