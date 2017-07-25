'use strict'
const trampoline = (fn, ...args) => {
  let result = fn.apply(fn, args)

  while (result && typeof(result) === 'function') {
    result = result()
  }

  return result
}

const factorial = n => {
  if (n < 0) {
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  const fun = (n, acc = 1) => {
    return n ? () => fun(n - 1, n * acc) : acc
  }

  return trampoline(fun(n))
}

module.exports = factorial
