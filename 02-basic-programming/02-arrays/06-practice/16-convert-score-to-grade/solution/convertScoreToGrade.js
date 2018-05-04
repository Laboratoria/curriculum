function convertScoreToGrade(score) {
  var str = 'PUNTUACION INVALIDA';

  switch (true) {
    case ((score <= 100) && (score >= 90)):
      str = 'A';
      break;
    case ((score <= 89) && (score >= 80)):
      str = 'B';
      break;
    case ((score <= 79) && (score >= 70)):
      str = 'C';
      break;
    case ((score <= 69) && (score >= 60)):
      str = 'D';
      break;
    case ((score <= 59) && (score >= 0)):
      str = 'F';
      break;
  }
  return str;
};

module.exports = convertScoreToGrade;
