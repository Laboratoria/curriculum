const concat = (left, right) => {
  const result = Object.assign([], left)

  right.map(item => {
    result.push(item)
  })

  return result
}

module.exports = concat
