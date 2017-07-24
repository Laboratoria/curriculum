const myLength = (array, acc=0) => {
  const [head, ...tail] = array

  if (!head) {
    return acc
  }

  return myLength(tail, acc + 1)
}

module.exports = myLength
