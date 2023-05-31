const acorn = require("acorn");
const fs = require("fs");

//read analyzer.js file
const code = fs.readFileSync("src/index.js", "utf8");
//parse the file
const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: "module" });

const getASTMetrics = (node, metrics) => {

  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.name === "querySelector"
  ) {
    metrics[0].push(node);
  }

  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.name === "getElementById"
  ) {
    metrics[1].push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "addEventListener") {
    metrics[2].push(node);
  }

  if (node.type === "ImportDeclaration") {
    metrics[3].push(node);
  }

  if (node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    node.left.property.type === "Identifier" &&
    node.left.property.name === "textContent") {
    metrics[4].push(node);
  }

  if (node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    node.left.property.type === "Identifier" &&
    node.left.property.name === "innerHTML") {
    metrics[5].push(node);
  }

  for (const key in node) {
    /* eslint-disable-next-line no-prototype-builtins */
    if (node.hasOwnProperty(key)) {
      const child = node[key];
      if (typeof child === "object" && child !== null) {
        getASTMetrics(child, metrics);
      }
    }
  }
}

const metrics = [[], [], [], [], [], []];
getASTMetrics(ast, metrics);
const [
  querySelectorCalls,
  getElementByIdCalls,
  addEventListenerCalls,
  importStatements,
  textContents,
  innerHTMLs,
] = metrics;

describe('Uso de selectores del DOM', () => {

  it('Se usa el selector del DOM querySelector', () => {
    expect(querySelectorCalls.length).toBeGreaterThan(0);
  });

  it('Se usa el selector del DOM getElementById', () => {
    expect(getElementByIdCalls.length).toBeGreaterThan(0);
  });

});

describe('Manejo de eventos del DOM', () => {
  it('Se registra un Event Listener para el evento "keyup"', () => {
    expect(
      addEventListenerCalls.some((node) => node.arguments[0].value === "keyup")
    ).toBeTruthy();
  });

  it('Se registra un Event Listener para el evento "click"', () => {
    expect(
      addEventListenerCalls.some((node) => node.arguments[0].value === "click")
    ).toBeTruthy();
  });

});

describe('Manipulación dinámica del DOM', () => {

  it('Se actualiza el DOM al modificar el atributo "innerHTML" o "textContent"', () => {
    expect(textContents.length + innerHTMLs.length).toBeGreaterThan(0);
  });

});

describe('Módulos de ECMAScript', () => {

  it('Se usa "import"', () => {
    expect(importStatements.length).toBeGreaterThan(0);
  });

});
