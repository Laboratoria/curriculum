const Assert = require('chai').assert;
const convertScoreToGrade = require('../solution/convertScoreToGrade');

describe("convertScoreToGrade()", function () {
  it("debería regresar 'PUNTUACION INVALIDA', para 102", function () {
    var output = convertScoreToGrade(102);

    Assert.deepEqual(output, 'PUNTUACION INVALIDA');
  });

  it("debería regresar 'F', para 59", function () {
    var output = convertScoreToGrade(59);

    Assert.deepEqual(output, 'F');
  });

  it("debería regresar 'C', para 79", function () {
    var output = convertScoreToGrade(79);

    Assert.deepEqual(output, 'C');
  });

  it("debería regresar 'A', para 91", function () {
    var output = convertScoreToGrade(91);

    Assert.deepEqual(output, 'A');
  });
});
