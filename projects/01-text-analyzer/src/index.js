import analyzer from './analyzer.js';

// Selects the textarea by the name attribute
const textInput = document.querySelector('textarea[name="user-input"]');
// Selects the button by the allowed id
const clearButton = document.getElementById('reset-button');
// Selects all <li> elements for metrics
const metricsList = document.querySelectorAll('ul > li');

// Function to update metrics in <li> elements
function updateResults(text) {
  const results = [
    `words: ${analyzer.getWordCount(text)}`,
    `characters: ${analyzer.getCharacterCount(text)}`,
    `characters (no spaces): ${analyzer.getCharacterCountExcludingSpaces(text)}`,
    `average word length: ${analyzer.getAverageWordLength(text)}`,
    `numbers: ${analyzer.getNumberCount(text)}`,
    `sum of numbers (out of words): ${analyzer.getNumberSum(text)}`
  ];
  metricsList.forEach((li, i) => {
    li.textContent = results[i];
  });
}

// Atualiza ao digitar
textInput.addEventListener('input', () => {
  updateResults(textInput.value);
});

// Limpa textarea e métricas ao clicar
clearButton.addEventListener('click', () => {
  textInput.value = '';
  updateResults('');
});

// Inicializa com valores zerados
updateResults('');