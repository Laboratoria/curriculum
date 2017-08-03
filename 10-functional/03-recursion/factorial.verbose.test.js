const factorial = require('./factorial.verbose')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})

test('Should not accept negative values', () => {
  expect(() => {
    factorial(-1)
  }).toThrow('Cannot compute the factorial of a negative integer')
})
