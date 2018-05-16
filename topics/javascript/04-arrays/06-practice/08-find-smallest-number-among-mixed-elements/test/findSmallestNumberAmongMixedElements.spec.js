
const Assert = require('chai').assert;
const findSmallestNumberAmongMixedElements = require('../solution/findSmallestNumberAmongMixedElements');

describe('findSmallestNumberAmongMixedElements()', () => {
  it("debería regresar 0, para  (['cat', 'is', 'cute', 'as', 'fuck'])", () => {
    const output = findSmallestNumberAmongMixedElements(['cat', 'is', 'cute', 'as', 'fuck']);
    Assert.equal(output, 0);
  });

  it('debería regresar 0, para ([])', () => {
    const output = findSmallestNumberAmongMixedElements([]);
    Assert.equal(output, 0);
  });


  it("debería regresar 1, para ([10, 9, 'Yes', 'why', 1, 'ahh'])", () => {
    const output = findSmallestNumberAmongMixedElements([10, 9, 'Yes', 'why', 1, 'ahh']);
    Assert.equal(output, 1);
  });
});
