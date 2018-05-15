function isPrime(num) {
  for (var i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, end) {
  var primes = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

exports.getPrimes = getPrimes;
exports.isPrime = isPrime;
