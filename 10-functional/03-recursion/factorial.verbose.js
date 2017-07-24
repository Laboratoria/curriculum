const factorial = n => {
  // Este es nuestro caso base - cuando n es igual a 0, se detiene la recursión
  // Devolvemos 1 pues es el elemento neutro de la multiplicación 
  if (n === 0) {
    return 1
  }

  // Este es nuestro caso recursivo
  // Correrá para todas las condiciones de n excepto cuando n es igual a 0
  return n * factorial(n - 1)
}

module.exports = factorial
