const { parse, stringify } = require('./');

const testValues = [
  [1, 'I'],
  [2, 'II'],
  [3, 'III'],
  [4, 'IV'],
  [5, 'V'],
  [6, 'VI'],
  [7, 'VII'],
  [8, 'VIII'],
  [9, 'IX'],
  [10, 'X'],
  [1492, 'MCDXCII'],
  [1944, 'MCMXLIV'],
  [2020, 'MMXX'],
  [3999, 'MMMCMXCIX'],
];

describe('parse', () => {
  it('should throw when not a string', () => {
    expect(() => parse(1)).toThrow('Not a string');
    expect(() => parse({})).toThrow('Not a string');
    expect(() => parse(new Date())).toThrow('Not a string');
  });

  it('should throw when bad chars', () => {
    expect(() => parse('IG')).toThrow('Unknown roman numeral');
  });

  it('should throw when repetitions of number starting with 5', () => {
    expect(() => parse('LL')).toThrow('Invalid repetition of number starting with 5: L (50)');
  });

  it('should throw when too many repetitions', () => {
    expect(() => parse('IIII')).toThrow('Too many repetitions of roman numeral I');
  });

  it('should throw when invalid substraction prefix (must be 1 or multiple of 10)', () => {
    expect(() => parse('VX')).toThrow('Invalid substraction prefix V');
  });

  it('should throw when wrong order', () => {
    expect(() => parse('LXIIIX')).toThrow('Invalid order');
  });

  testValues.forEach(([expected, input]) => {
    it(`should return ${expected} when input is ${input}`, () => {
      expect(parse(input)).toBe(expected);
    });
  });
});

describe('stringify', () => {
  it('should throw when input not a number', () => {
    expect(() => stringify('OMG')).toThrow('Not a number');
    expect(() => stringify([])).toThrow('Not a number');
  });

  it('should throw when input out of range', () => {
    expect(() => stringify(-1)).toThrow('out of range');
    expect(() => stringify(4000)).toThrow('out of range');
  });

  testValues.forEach(([input, expected]) => {
    it(`should return ${expected} when input is ${input}`, () => {
      expect(stringify(input)).toBe(expected);
    });
  });
});
