'use strict'

const isFunction = require('lodash.isfunction')
const bigInt = require('big-integer')

const trampoline = (fn, ...args) => {
  let result = fn.apply(fn, args)

  while (isFunction(result)) {
    result = result()
  }

  return result
}

const factorial = n => {
  if (n < 0) {
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  const fun = (n, acc = bigInt.one) => {
    return n.greater(0) ? () => fun(n.minus(1), acc.multiply(n)) : acc
  }

  return trampoline(fun(bigInt(n)))
}

module.exports = factorial
