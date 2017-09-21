const Assert = require('chai').assert;
const convertScoreToGrade = require('../solution/convertScoreToGrade');

describe("convertScoreToGrade()", function () {
  it("deberia regresar 'PUNTUACION INVALIDA', para 102", function () {
    var output = convertScoreToGrade(102);

    Assert.deepEqual(output, 'PUNTUACION INVALIDA');
  });

  it("deberia regresar 'F', para 59", function () {
    var output = convertScoreToGrade(59);

    Assert.deepEqual(output, 'F');
  });

  it("deberia regresar 'C', para 79", function () {
    var output = convertScoreToGrade(79);

    Assert.deepEqual(output, 'C');
  });

  it("deberia regresar 'A', para 91", function () {
    var output = convertScoreToGrade(91);

    Assert.deepEqual(output, 'A');
  });
});
