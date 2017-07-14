const lowerCaser = require('./lowercaser')

test('Should take an input string and returns it lowercased', () => {
  expect(lowerCaser('LOREM IPSUM')).toBe('lorem ipsum')
})
