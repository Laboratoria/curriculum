const coinConvert = (dollars) => {
  const soles = dollars * 3.25;
  const pesosMexicanos = dollars * 18;
  const pesosChilenos = dollars * 660;

  return [soles, pesosMexicanos, pesosChilenos];
};

export default coinConvert;
