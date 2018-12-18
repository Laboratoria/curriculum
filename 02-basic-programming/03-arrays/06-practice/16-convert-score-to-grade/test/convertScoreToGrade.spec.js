const Assert = require('chai').assert;
const convertScoreToGrade = require('../solution/convertScoreToGrade');

describe("convertScoreToGrade()", function () {
  it("deve devolver 'PONTUAÇÃO INVÁLIDA', para 102", function () {
    var output = convertScoreToGrade(102);

    Assert.deepEqual(output, 'PONTUAÇÃO INVÁLIDA');
  });

  it("deve devolver 'F', para 59", function () {
    var output = convertScoreToGrade(59);

    Assert.deepEqual(output, 'F');
  });

  it("deve devolver 'C', para 79", function () {
    var output = convertScoreToGrade(79);

    Assert.deepEqual(output, 'C');
  });

  it("deve devolver 'A', para 91", function () {
    var output = convertScoreToGrade(91);

    Assert.deepEqual(output, 'A');
  });
});
