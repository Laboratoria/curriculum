const isPrime = (n) => {
  if (n === 1) {
    return true;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};


export default isPrime;
