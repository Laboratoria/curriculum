const concat = require('./concat1')

test('should concatenate the array on the right with the array on the left', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const expected = [1, [2], 3, [4], 5, [6, 7], 8]

  expect(concat(left, right)).toEqual(expected)
})

test('should not mutate external context', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const backup = Object.assign([], left)

  concat(left, right)

  expect(left).toEqual(backup)
})
