const factorial = n => {
  if (n === 0) {
    return 1
  }

  // ¡Aquí está la recursión!
  return n * factorial(n - 1)
}

module.exports = factorial
