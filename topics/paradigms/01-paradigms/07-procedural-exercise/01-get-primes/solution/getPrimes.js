export function isPrime(num) {
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

export function getPrimes(start, end) {
  const primes = [];
  for (let i = start; i < end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

