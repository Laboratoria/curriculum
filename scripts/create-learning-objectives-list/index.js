#! /usr/bin/env node
const runningAsScript = require.main === module;

require('dotenv').config();
const { promises: fs } = require('fs');
const gSheetsApi = require('g-sheets-api');

const requestLearningObjectivesFromSpreadsheet = options =>
  new Promise((resolve, reject) => {
    gSheetsApi(options, (results, error) => {
      // Apparently `g-sheets-api` doesn't expose an error argument :(
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

const parseLearningObjectivesFromSpreadsheet = results => {
  const categoryFromResult = result => result.split('[')[0].trim();
  const nameFromResult = result =>
    result
      .split('[')[1]
      .split(']')[0]
      .trim();

  const learningObjectives = results
    .map(result => Object.values(result)[0])
    .map(result => ({
      category: categoryFromResult(result),
      name: nameFromResult(result),
    }));

  const learningObjectivesWithCategories = learningObjectives.reduce(
    (accumulator, result) => {
      if (accumulator.find(value => value.category === result.category)) {
        const index = accumulator.findIndex(
          value => value.category === result.category,
        );
        return [
          ...accumulator.slice(0, index),
          {
            category: result.category,
            objectives: [...accumulator[index].objectives, result.name],
          },
          ...accumulator.slice(index + 1, -1),
        ];
      }
      return [
        ...accumulator,
        { category: result.category, objectives: [result.name] },
      ];
    },
    [],
  );

  return learningObjectivesWithCategories;
};

const writeMarkdownFile = ({
  textToWrite,
  pathToWriteTo = 'projects/learning-objectives.md',
}) => {
  fs.writeFile(pathToWriteTo, textToWrite);
};

const lastIndex = array => array.length - 1;

const interpolateLearningObjectives = learningObjectivesWithCategories => {
  let text = '# Objetivos de aprendizaje\n\n';

  learningObjectivesWithCategories.forEach((lowc, lowcIndex) => {
    text += `## ${lowc.category}\n\n`;

    lowc.objectives.forEach((objective, objectiveIndex) => {
      text += `- [ ] ${objective}\n`;
      // Add a new line if this is the last objective from its category
      // but not the last category
      text +=
        objectiveIndex === lastIndex(lowc.objectives) &&
        lowcIndex !== lastIndex(learningObjectivesWithCategories)
          ? '\n'
          : '';
    });
  });
  return { textToWrite: text };
};

runningAsScript && requestLearningObjectivesFromSpreadsheet({
  sheetId: process.env.learningObjectivesSpreadsheetId,
  sheetNumber: process.env.learningObjectivesSpreadsheetNumber,
})
  .then(parseLearningObjectivesFromSpreadsheet)
  .then(interpolateLearningObjectives)
  .then(writeMarkdownFile)
  .then(() => console.log('✅ Learning objectives list created.'))
  .catch(console.log.bind(console));

module.exports = {
  parseLearningObjectivesFromSpreadsheet,
  interpolateLearningObjectives,
};
