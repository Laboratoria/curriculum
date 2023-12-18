import acorn from 'acorn'
import fs from 'fs';

//read analyzer.js file
const mainCode = fs.readFileSync("src/dataFunctions.js", "utf8");
const renderCode = fs.readFileSync("src/view.js", "utf8");
const mainAst = acorn.parse(mainCode, { ecmaVersion: 2020, sourceType: "module" });
const ast =  acorn.parse(renderCode, { ecmaVersion: 2020, sourceType: "module", program: mainAst});

const getASTMetrics = (node, [
  sortCalls,
  filterCalls,
  reduceCalls,
  mapCalls,
  constStatements,
  forStatements,
  forEachCalls,
  ifelseStatements,
  exportStatements,
]) => {

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    (node.callee.property.name === "sort" || node.callee.property.name === "toSorted")) {
    sortCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "filter") {
    filterCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "reduce") {
    reduceCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "map") {
    mapCalls.push(node);
  }

  if (node.type === "VariableDeclaration" && node.kind === "const") {
    constStatements.push(node);
  }

  if (node.type === "ForStatement") {
    forStatements.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "forEach") {
    forEachCalls.push(node);
  }

  if (node.type === "IfStatement") {
    ifelseStatements.push(node);
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
          sortCalls,
          filterCalls,
          reduceCalls,
          mapCalls,
          constStatements,
          forStatements,
          forEachCalls,
          ifelseStatements,
          exportStatements,
        ]);
      }
    }
  }
}

const metrics = [[], [], [], [], [], [], [], [], [], [], [], []];
getASTMetrics(ast, metrics);
const [
  sortCalls,
  filterCalls,
  reduceCalls,
  mapCalls,
  constStatements,
  forStatements,
  forEachCalls,
  ifelseStatements,
  exportStatements,
] = metrics;

describe('Arrays', () => {
  it('Se usan métodos para manipular arrays como "sort"', () => {
    expect(sortCalls.length).toBeGreaterThan(0);
  });
  it('Se usan métodos para manipular arrays como "filter"', () => {
    expect(filterCalls.length).toBeGreaterThan(0);
  });
  it('Se usan métodos para manipular arrays como "reduce"', () => {
    expect(reduceCalls.length).toBeGreaterThan(0);
  });
  it('Se prefiere el uso de forEach sobre for', () => {
    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });
  it('Se usan métodos para manipular arrays como "map"', () => {
    expect(mapCalls.length).toBeGreaterThan(0);
  });
});

describe('Variables', () => {
  it('Se declaran variables con "const"', () => {
    expect(constStatements.length).toBeGreaterThan(0);
  });
});

describe('Uso de condicionales', () => {
  it('Se usa el statement "if...else"', () => {
    expect(ifelseStatements.length).toBeGreaterThan(0);
  });
});

describe('Módulos de ECMAScript', () => {
  it('Se usa "export"', () => {
    expect(exportStatements.length).toBeGreaterThan(0);
  });
});
