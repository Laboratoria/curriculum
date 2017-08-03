const myLength = require('./mylength.js')

test('Should return the length of the given array', () => {
  expect(myLength([1, 2, 3])).toBe(3)
})

test('Should return zero when an empty array is given', () => {
  expect(myLength([])).toBe(0)
})
