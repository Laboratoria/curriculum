const acorn = require("acorn");
const fs = require("fs");

//read analyzer.js file
const code = fs.readFileSync("src/analyzer.js", "utf8");
//parse the file
const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: "module" });

const getASTMetrics = (node, [
  parseIntCalls,
  parseFloatCalls,
  NumberCalls,
  splitCalls,
  trimCalls,
  letStatements,
  constStatements,
  ifelseStatements,
  forStatements,
  exportStatements,
]) => {

  if (node.type === "CallExpression" &&
    node.callee.type === "Identifier" &&
    node.callee.name === "parseInt") {
    parseIntCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "Identifier" &&
    node.callee.name === "parseFloat") {
    parseFloatCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "Identifier" &&
    node.callee.name === "Number") {
    NumberCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "split") {
    splitCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "trim") {
    trimCalls.push(node);
  }

  if (node.type === "VariableDeclaration" && node.kind === "let") {
    letStatements.push(node);
  }

  if (node.type === "VariableDeclaration" && node.kind === "const") {
    constStatements.push(node);
  }

  if (node.type === "IfStatement") {
    ifelseStatements.push(node);
  }

  if (node.type === "ForStatement") {
    forStatements.push(node);
  }

  if ([
    "ExportDeclaration",
    "ExportAllDeclaration",
    "ExportNamedDeclaration",
    "ExportDefaultDeclaration",
    "ExportSpecifier",
    "ExportDefaultSpecifier",
  ].includes(node.type)) {
    exportStatements.push(node);
  }

  for (const key in node) {
    /* eslint-disable-next-line no-prototype-builtins */
    if (node.hasOwnProperty(key)) {
      const child = node[key];
      if (typeof child === "object" && child !== null) {
        getASTMetrics(child, [
          parseIntCalls,
          parseFloatCalls,
          NumberCalls,
          splitCalls,
          trimCalls,
          letStatements,
          constStatements,
          ifelseStatements,
          forStatements,
          exportStatements,
        ]);
      }
    }
  }
}

const metrics = [[], [], [], [], [], [], [], [], [], []];
getASTMetrics(ast, metrics);
const [
  parseIntCalls,
  parseFloatCalls,
  NumberCalls,
  splitCalls,
  trimCalls,
  letStatements,
  constStatements,
  ifelseStatements,
  forStatements,
  exportStatements,
] = metrics;

describe('Tipos de datos primitivos', () => {
  it('Se convierten valores tipo "string" a tipo "number" con "parseInt" o "parseFloat" o "Number"', () => {
    expect(parseIntCalls.length + parseFloatCalls.length + NumberCalls.length).toBeGreaterThan(0);
  });
});

describe('Strings', () => {
  it('Se usan métodos para manipular strings como "split" o "trim"', () => {
    expect(splitCalls.length + trimCalls.length).toBeGreaterThan(0);
  });
});

describe('Variables', () => {
  it('Se declaran variables con "let"', () => {
    expect(letStatements.length).toBeGreaterThan(0);
  });

  it('Se declaran variables con "const"', () => {
    expect(constStatements.length).toBeGreaterThan(0);
  });
});

describe('Uso de condicionales', () => {
  it('Se usa el statement "if...else"', () => {
    expect(ifelseStatements.length).toBeGreaterThan(0);
  });
});

describe('Uso de bucles/ciclos', () => {
  it('Se usa el statement "for"', () => {
    expect(forStatements.length).toBeGreaterThan(0);
  });
});

describe('Módulos de ECMAScript', () => {
  it('Se usa "export"', () => {
    expect(exportStatements.length).toBeGreaterThan(0);
  });
});