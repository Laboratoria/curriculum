const factorial = require('./factorial.safe')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})

test('Should not accept negative values', () => {
  expect(() => {
    factorial(-1)
  }).toThrow('Cannot compute the factorial of a negative integer')
})

test('Should avoid too much recursion', () => {
  expect(() => {
    factorial(32768)
  }).not.toThrowError(/tack size exceeded/)
})
