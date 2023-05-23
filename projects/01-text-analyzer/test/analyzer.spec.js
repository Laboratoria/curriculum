// importamos el objeto 'analyzer', que contiene las funciones
import analyzer from '../src/analyzer';


const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const TEST_TEXT_NUMBERS = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
const TEST_TEXT_DECIMALS = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
const TEST_TEXT_NOT_A_NUMBER = 'Esto no es un número: 41u0003jot';


describe('analyzer', () => {
  describe('analyzer.getWordCount', () => {
    it('debería retornar 19 para "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_NO_NUMBERS)).toBe(19);
    });
  });

  describe('analyzer.getCharacterCount', () => {
    it('debería retornar 123 para "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEXT_NO_NUMBERS)).toBe(123);
    });
  });

  describe('analyzer.getCharacterCountExcludingSpaces', () => {
    it('debería retornar 102 para "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEXT_NO_NUMBERS)).toBe(102);
    });
  });

  describe('analyzer.getAverageWordLength', () => {
    it('debería retornar 5.53 para "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEXT_NO_NUMBERS)).toBe(5.53);
    });
  });

  describe('analyzer.getNumberCount', () => {
    it('debería retornar 0 para "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('debería retornar 3 para "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_DECIMALS)).toBe(3);
    });

    it('debería retornar 2 para "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NUMBERS)).toBe(2);
    });
  });

  describe('analyzer.getNumberSum', () => {
    it('debería retornar 0 para "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NO_NUMBERS)).toBe(0);
    });
    
    it('debería retornar 0 para "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('debería retornar 2.9 para "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_DECIMALS)).toBe(2.9);
    });

    it('debería retornar 10 para "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NUMBERS)).toBe(10);
    });    
  });

});  

//TODO: eliminar .skip para que se ejecute el test de las funcionalidades opcionales
describe.skip('Opcional:', () => {
  const TEST_TEST_EMPTY = '';
  const TEST_TEST_SPACES = '       ';
  const TEST_TEXT_PUNCTUATION_MARKS = '.,;:"«»[]{}()¿?¡!-';

  describe('analyzer.getWordCount', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getWordCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('debería retornar 0 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getWordCount(TEST_TEST_SPACES)).toBe(0);
    });

    it('debería retornar 0 para "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });
  });

  describe('analyzer.getCharacterCount', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('debería retornar 7 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEST_SPACES)).toBe(7);
    });

    it('debería retornar 18 para "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEXT_PUNCTUATION_MARKS)).toBe(18);
    });    
  });

  describe('analyzer.getCharacterCountExcludingSpaces', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEST_EMPTY)).toBe(0);
    });

    it('debería retornar 0 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEST_SPACES)).toBe(0);
    });

    it('debería retornar 0 para "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });     
  });

  describe('analyzer.getAverageWordLength', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEST_EMPTY)).toBe(0);
    });

    it('debería retornar 0 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEST_SPACES)).toBe(0);
    });

    it('debería retornar 0 para "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });    
  });

  describe('analyzer.getNumberCount', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('debería retornar 0 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEST_SPACES)).toBe(0);
    });
  });

  describe('analyzer.getNumberSum', () => {
    it('debería retornar 0 para "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('debería retornar 0 para "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEST_SPACES)).toBe(0);
    });
  });

});