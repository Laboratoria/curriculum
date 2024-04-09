//
// TAREA
//
// Refactorizar la siguiente función reemplazando el bucle `for` con
// `Array#map`.
//

export default function doubleAll(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }

  return result;
};
