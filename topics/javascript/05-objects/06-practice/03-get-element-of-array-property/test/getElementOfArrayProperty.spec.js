import { assert } from 'chai';
import getElementOfArrayProperty from '../solution/getElementOfArrayProperty.js';

describe('getElementOfArrayProperty()', () => {
  it("debería regresar undefined, para ({yey: [1, 3, 5, 7]}, 'key', 1)", () => {
    const obj = {
      yey: [1, 3, 5, 7],
    };
    const output = getElementOfArrayProperty(obj, 'key', 1);

    assert.deepEqual(output, undefined);
  });

  it("debería regresar undefined, para  ({key: 'eyoooo'}, 'key', 1)", () => {
    const obj = {
      key: 'eyoooo',
    };
    const output = getElementOfArrayProperty(obj, 'key', 0);
    assert.deepEqual(output, undefined);
  });


  it("debería regresar undefined, para ({key: ['Kemal', 'Mahmud']}, 'key', 2)", () => {
    const obj = {
      key: ['Kemal', 'Mahmud'],
    };
    const output = getElementOfArrayProperty(obj, 'key', 2);
    assert.deepEqual(output, undefined);
  });

  it("debería regresar 3, para ({key: [1, 2, 3, 4, 5]}, 'key', 2)", () => {
    const obj = {
      key: [1, 2, 3, 4, 5],
    };
    const output = getElementOfArrayProperty(obj, 'key', 2);
    assert.deepEqual(output, 3);
  });
});
