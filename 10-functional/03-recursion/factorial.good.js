const factorial = n => {
  if (n < 0) {
    // Condición de terminación para prevenir recursividad infinita
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  // Caso base
  if (n === 0) {
    return 1
  }

  // Caso recursivo
  return n * factorial(n - 1)
}

module.exports = factorial
