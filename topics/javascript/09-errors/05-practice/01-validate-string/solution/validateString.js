export default (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('El argumento str debe ser un string');
  }

  if (str.length < 4) {
    throw new RangeError('El argumento str debe tener al menos 4 caracteres');
  }

  if (str.length > 10) {
    throw new RangeError('El argumento str debe tener un máximo de 10 caracteres');
  }

  return str;
};
