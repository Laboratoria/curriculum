// We import the object 'analyzer' which contains the functions.
import analyzer from '../src/analyzer';


const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const TEST_TEXT_NUMBERS = 'If I have 8 apples and I buy 2 more, how many apples do I have in total?';
const TEST_TEXT_DECIMALS = 'Calculate the sum of 1.65 plus 0.15 plus 1.10.';
const TEST_TEXT_NOT_A_NUMBER = 'This is not a number: 41u0003jot';


describe('analyzer', () => {
  describe('analyzer.getWordCount', () => {
    it('should return 19 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_NO_NUMBERS)).toBe(19);
    });
  });

  describe('analyzer.getCharacterCount', () => {
    it('should return 123 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEXT_NO_NUMBERS)).toBe(123);
    });
  });

  describe('analyzer.getCharacterCountExcludingSpaces', () => {
    it('should return 102 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEXT_NO_NUMBERS)).toBe(102);
    });
  });

  describe('analyzer.getAverageWordLength', () => {
    it('should return 5.53 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEXT_NO_NUMBERS)).toBe(5.53);
    });
  });

  describe('analyzer.getNumberCount', () => {
    it('should return 0 for "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('should return 3 for "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_DECIMALS)).toBe(3);
    });

    it('should return 2 for "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NUMBERS)).toBe(2);
    });
  });

  describe('analyzer.getNumberSum', () => {
    it('should return 0 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NO_NUMBERS)).toBe(0);
    });
    
    it('should return 0 for "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('should return 2.9 for "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_DECIMALS)).toBe(2.9);
    });

    it('should return 10 for "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NUMBERS)).toBe(10);
    });    
  });

});  

//TODO: Remove .skip to execute the test for optional functionalities.
describe.skip('Optional:', () => {
  const TEST_TEST_EMPTY = '';
  const TEST_TEST_SPACES = '       ';
  const TEST_TEXT_PUNCTUATION_MARKS = '.,;:"«»[]{}()¿?¡!-';

  describe('analyzer.getWordCount', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getWordCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('should return 0 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getWordCount(TEST_TEST_SPACES)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });
  });

  describe('analyzer.getCharacterCount', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('should return 7 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEST_SPACES)).toBe(7);
    });

    it('should return 18 for "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEXT_PUNCTUATION_MARKS)).toBe(18);
    });    
  });

  describe('analyzer.getCharacterCountExcludingSpaces', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEST_EMPTY)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEST_SPACES)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });     
  });

  describe('analyzer.getAverageWordLength', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEST_EMPTY)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEST_SPACES)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEXT_PUNCTUATION_MARKS)).toBe(0);
    });    
  });

  describe('analyzer.getNumberCount', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('should return 0 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEST_SPACES)).toBe(0);
    });
  });

  describe('analyzer.getNumberSum', () => {
    it('should return 0 for "' + TEST_TEST_EMPTY + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEST_EMPTY)).toBe(0);
    });
    
    it('should return 0 for "' + TEST_TEST_SPACES + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEST_SPACES)).toBe(0);
    });
  });
});