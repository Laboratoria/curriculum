const analyzer = {  
  getWordCount: (text) => {
    if (!text) return 0;
    return (text.trim().match(/\b\w+\b/g) || []).length;
  },
  getCharacterCount: (text) => {
    if (!text) return 0;
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (!text) return 0;
    return text.replace(/[\s\p{P}]/gu, '').length;
  },
  getAverageWordLength: (text) => {
    if (!text) return 0;
    const words = text.trim().split(/\s+/).filter(w => w);
    if (words.length === 0) return 0;
    const totalLength = words.reduce((sum, w) => sum + w.length, 0);
    return parseFloat((totalLength / words.length).toFixed(2));
  },
  getNumberCount: (text) => {
    if (!text) return 0;
    return (text.match(/\b\d+(?:\.\d+)?\b/g) || []).length;
  },
  getNumberSum: (text) => {
    if (!text) return 0;
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g) || [];
    const numericArray = numbers.map(n => parseFloat(n));
    return numericArray.reduce((sum, n) => sum + n, 0);
  },
  getSentenceCount: (text) => {
    if (!text) return 0;
    // Counts sentences ending with period, question or exclamation
    return (text.match(/[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/g) || []).filter(s => s.trim().length > 0).length;
  },
  getParagraphCount: (text) => {
    if (!text) return 0;
    // Counts paragraphs separated by line breaks
    return (text.split(/\n+/).filter(p => p.trim().length > 0)).length;
  },
};

export default analyzer;
