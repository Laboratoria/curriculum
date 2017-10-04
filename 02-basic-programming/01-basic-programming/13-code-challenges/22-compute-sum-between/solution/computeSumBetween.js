function computeSumBetween(num1, num2) {
  var sum = 0;
  for (var i = num1; i < num2; i++)
    sum += i;

  return sum;
};

module.exports = computeSumBetween;
