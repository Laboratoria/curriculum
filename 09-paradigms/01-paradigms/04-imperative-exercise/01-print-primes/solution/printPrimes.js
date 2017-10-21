function printPrimes() {
  for (var i = 2; i < 20; i++) {
    var isPrime = true;
    for (var j = 2; j <= (i / 2); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

module.exports = printPrimes;
