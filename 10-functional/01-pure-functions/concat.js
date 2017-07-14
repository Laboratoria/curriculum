const concat = (left, right) => {
  const result = left

  right.map(item => {
    result.push(item)
  })

  return result
}

module.exports = concat
