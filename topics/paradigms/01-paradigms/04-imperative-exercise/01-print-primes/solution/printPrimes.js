function printPrimes() {
  for (let i = 2; i < 20; i++) {
    let isPrime = true;
    for (let j = 2; j <= (i / 2); j++) {
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

export default printPrimes;
