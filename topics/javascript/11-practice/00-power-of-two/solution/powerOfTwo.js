const powerOfTwo = (number) => {
  let result = 1;

  while (number > 0) {
    result *= 2;
    number--;
  }

  return result;
};

module.exports = powerOfTwo;
