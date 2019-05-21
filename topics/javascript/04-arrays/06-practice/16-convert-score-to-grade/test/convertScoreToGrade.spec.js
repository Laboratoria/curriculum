const Assert = require('chai').assert;
const convertScoreToGrade = require('../solution/convertScoreToGrade');

describe('convertScoreToGrade()', () => {
  it("deve devolver 'PONTUAÇÃO INVÁLIDA', para 102", () => {
    const output = convertScoreToGrade(102);

    Assert.deepEqual(output, 'PONTUAÇÃO INVÁLIDA');
  });

  it("deve devolver 'F', para 59", () => {
    const output = convertScoreToGrade(59);

    Assert.deepEqual(output, 'F');
  });

  it("deve devolver 'C', para 79", () => {
    const output = convertScoreToGrade(79);

    Assert.deepEqual(output, 'C');
  });

  it("deve devolver 'A', para 91", () => {
    const output = convertScoreToGrade(91);

    Assert.deepEqual(output, 'A');
  });
});
