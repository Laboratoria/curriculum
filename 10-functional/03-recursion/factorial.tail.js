'use strict'
const factorial = (n, acc = 1) => {
  if (n < 0) {
    // Condición de terminación para prevenir recursividad infinita
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  // Caso base
  if (n === 0) {
    return acc
  }

  // Caso recursivo
  return factorial(n - 1, n * acc)
}

module.exports = factorial
