import { assert } from 'chai';
import tellFortune from '../solution/tellFortune.js';

describe('tellFortune()', () => {
  it('debería regresar "In the year 2025, you will be a programmer and live in Lima.", para ("programmer", "Lima")', () => {
    assert.deepEqual(tellFortune('programmer', 'Lima'), 'In the year 2025, you will be a programmer and live in Lima.');
  });

  it('debería regresar "In the year 2025, you will be a scientist and live in Boston.", para ("scientist", "Boston")', () => {
    assert.deepEqual(tellFortune('scientist', 'Boston'), 'In the year 2025, you will be a scientist and live in Boston.');
  });

  it('debería regresar "In the year 2025, you will be a singer and live in Madrid.", para ("singer", "Madrid")', () => {
    assert.deepEqual(tellFortune('singer', 'Madrid'), 'In the year 2025, you will be a singer and live in Madrid.');
  });

  it('debería regresar "In the year 2025, you will be a farmer and live in Fiji.", para ("farmer", "Fiji")', () => {
    assert.deepEqual(tellFortune('farmer', 'Fiji'), 'In the year 2025, you will be a farmer and live in Fiji.');
  });
});
