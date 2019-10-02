function isPrime(num) {
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, end) {
  const primes = [];
  for (let i = start; i < end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

exports.getPrimes = getPrimes;
exports.isPrime = isPrime;
