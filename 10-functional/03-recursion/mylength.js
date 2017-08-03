const myLength = array => {
  const [head, ...tail] = array

  if (!head) {
    return 0
  }

  return 1 + myLength(tail)
}

module.exports = myLength
