const {
  parseLearningObjectivesFromSpreadsheet,
  interpolateLearningObjectives,
} = require('./');
const learningObjectivesFromSpreadsheet = require('./learningObjectivesFromSpreadsheetExample');
const learningObjectivesToInterpolate = require('./learningObjectivesToInterpolateExample');

describe('Learning objectives list', () => {
  it('should parse objectives from spreadsheet result', () => {
    expect(
      parseLearningObjectivesFromSpreadsheet(learningObjectivesFromSpreadsheet),
    ).toMatchSnapshot();
  });

  it('should interpolate objectives with markdown template', () => {
    expect(
      interpolateLearningObjectives(learningObjectivesToInterpolate),
    ).toMatchSnapshot();
  });
});
