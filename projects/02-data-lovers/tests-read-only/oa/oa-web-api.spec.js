import acorn from 'acorn'
import fs from 'fs';

//read analyzer.js file
const mainCode = fs.readFileSync("src/main.js", "utf8");
const renderCode = fs.readFileSync("src/viewFunctions.js", "utf8");
const mainAst = acorn.parse(mainCode, { ecmaVersion: 2020, sourceType: "module" });
const ast =  acorn.parse(renderCode, { ecmaVersion: 2020, sourceType: "module", program: mainAst});


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

  if (node.type === "CallExpression" &&
   node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    (node.callee.property.name === "createElement" || node.callee.property.name === "appendChild")) {
    metrics[6].push(node);
  }

  if (node.type === "VariableDeclaration" &&
      node.declarations &&
      node.declarations[0].init &&
      node.declarations[0].init['type'] === "TemplateLiteral"){
    metrics[7].push(node);
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

const metrics = [[], [], [], [], [], [],[],[]];
getASTMetrics(ast, metrics);
const [
  querySelectorCalls,
  getElementByIdCalls,
  addEventListenerCalls,
  importStatements,
  textContents,
  innerHTMLs,
  createElementCalls,
  templateCalls
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

  it('Se registra un Event Listener para el evento "change"', () => {
    expect(
      addEventListenerCalls.some((node) => node.arguments[0].value === "change")
    ).toBeTruthy();
  });

  it('Se registra un Event Listener para el evento "click"', () => {
    expect(
      addEventListenerCalls.some((node) => node.arguments[0].value === "click")
    ).toBeTruthy();
  });
//aqui falta ver conseguir el current
  it('Se registra un Event Listener con un event.target', () => {
    // para probar que hay algun lugar donde se use e.target, como aqui: const arrayType = filterData(data.pokemon, 'type', e.target.value);
    expect(
      addEventListenerCalls.some((node) => node.arguments[1].body.body[0].declarations[0].init.arguments[2].object.property.name === 'target')
    ).toBeTruthy();
  });

  it('Se registra un Event Listener con un parametro de evento', () => {
    expect(
      addEventListenerCalls.some((node) => node.arguments[1].params[0].name === ('e') || node.arguments[1].params[0].name === ('event'))
    ).toBeTruthy();
  });

});

describe('Manipulación dinámica del DOM', () => {

  it('Se actualiza el DOM al modificar el atributo "innerHTML" o "textContent"', () => {
    expect(textContents.length + innerHTMLs.length).toBeGreaterThan(0);
  });

  it('Existe manipulación dinamica mediante createElement o template strings', () => {
    expect(createElementCalls.length || templateCalls.length).toBeGreaterThan(0);
  });

});

describe('Módulos de ECMAScript', () => {

  it('Se usa "import"', () => {
    expect(importStatements.length).toBeGreaterThan(0);
  });

});
