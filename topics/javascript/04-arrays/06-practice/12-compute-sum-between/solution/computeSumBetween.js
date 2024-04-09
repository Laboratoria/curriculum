const computeSumBetween = (num1, num2) => {
  let sum = 0;

  for (let i = num1; i < num2; i += 1) {
    sum += i;
  }

  return sum;
};

export default computeSumBetween;
