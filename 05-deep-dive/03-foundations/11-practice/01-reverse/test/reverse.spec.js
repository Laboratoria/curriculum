const Assert = require('chai').assert;
const reverse = require('../solution/reverse');

describe('reverse()', () => {
  it('debería regresar el arreglo invertido cuando es un arreglo de números', () => {
    const output = reverse([1, 2, 3, 4]);
    Assert.deepEqual(output, [4, 3, 2, 1]);
  });

  it('debería regresar el arreglo invertido cuando es un arreglo de caracteres', () => {
    const output = reverse(['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']);
    Assert.deepEqual(output, ['t', 'p', 'i', 'r', 'c', 's', 'a', 'v', 'a', 'j']);
  });

  it('debería regresar el arreglo invertido cuando es un arreglo de objetos', () => {
    const output = reverse([{ 'country': 'Chile' }, { 'country': 'México' }, { 'country': 'Perú' }]);
    Assert.deepEqual(output, [{ 'country': 'Perú' }, { 'country': 'México' }, { 'country': 'Chile' }]);
  });

  it('debería regresar el arreglo vacío cuando es un arreglo vacío', () => {
    const output = reverse([]);
    Assert.deepEqual(output, []);
  });
});
