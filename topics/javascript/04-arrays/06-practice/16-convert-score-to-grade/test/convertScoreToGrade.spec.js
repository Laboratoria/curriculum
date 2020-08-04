const { assert } = require('chai');
const convertScoreToGrade = require('../solution/convertScoreToGrade');

describe('convertScoreToGrade()', () => {
  it("debería regresar 'PUNTUACION INVALIDA', para 102", () => {
    const output = convertScoreToGrade(102);

    assert.deepEqual(output, 'PUNTUACION INVALIDA');
  });

  it("debería regresar 'F', para 59", () => {
    const output = convertScoreToGrade(59);

    assert.deepEqual(output, 'F');
  });

  it("debería regresar 'C', para 79", () => {
    const output = convertScoreToGrade(79);

    assert.deepEqual(output, 'C');
  });

  it("debería regresar 'A', para 91", () => {
    const output = convertScoreToGrade(91);

    assert.deepEqual(output, 'A');
  });
});
