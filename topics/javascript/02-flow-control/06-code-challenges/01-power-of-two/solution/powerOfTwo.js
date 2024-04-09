const powerOfTwo = (number) => {
  let result = 1;

  while (number > 0) {
    result *= 2;
    number -= 1;
  }

  return result;
};

export default powerOfTwo;
