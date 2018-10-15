const Assert = require('chai').assert;
const powerOfTwo = require('../solution/powerOftwo');
const parse = require('../solution/parse');

describe('powerOfTwo()', () => {
  it('debería ser implementado con estructuras de control para calcular la potencia de 2', () => {
    const output = parse('../solution/powerOfTwo.js');
    Assert.deepEqual(output, -1);
  });

  it('debería regresar la potencia de 2 elevado al número ingresado cuando es positivo', () => {
    const output = powerOfTwo(10);
    Assert.deepEqual(output, 1024);
  });

  it('debería regresar 1 cuando el número ingresado es 0', () => {
    const output = powerOfTwo(0);
    Assert.deepEqual(output, 1);
  });

  it('debería regresar 1 cuando el número ingresado es negativo', () => {
    const output = powerOfTwo(-5);
    Assert.deepEqual(output, 1);
  });
});
