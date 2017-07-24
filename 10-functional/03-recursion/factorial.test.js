const factorial = require('./factorial')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})
