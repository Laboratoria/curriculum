import acorn from 'acorn'
import fs from 'fs';

//read analyzer.js file
const mainCode = fs.readFileSync("src/main.js", "utf8");
const renderCode = fs.readFileSync("src/viewFunctions.js", "utf8");
const mainAst = acorn.parse(mainCode, { ecmaVersion: 2020, sourceType: "module" });
const ast =  acorn.parse(renderCode, { ecmaVersion: 2020, sourceType: "module", program: mainAst});

           
const getASTMetrics = (node, [ 
  querySelectorCalls=[],
  getElementByIdCalls=[],
  addEventListenerCalls=[],
  importStatements=[],
  textContents=[],
  innerHTMLs=[],
  createElementCalls=[],
  templateCalls=[] ]) => {
  
  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.name === "querySelector"
  ) {
    querySelectorCalls.push(node);
  }

  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.name === "getElementById"
  ) {
    getElementByIdCalls.push(node);
  }

  if (node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "addEventListener") {
    addEventListenerCalls.push(node);
  }

  if (node.type === "ImportDeclaration") {
    importStatements.push(node);
  }

  if (node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    node.left.property.type === "Identifier" &&
    node.left.property.name === "textContent") {
    textContents.push(node);
  }

  if (node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    node.left.property.type === "Identifier" &&
    node.left.property.name === "innerHTML") {
    innerHTMLs.push(node);
  }

  if (node.type === "CallExpression" &&
   node.callee.type === "MemberExpression" &&
    node.callee.property.type === "Identifier" &&
    (node.callee.property.name === "createElement" || node.callee.property.name === "appendChild")) {
    createElementCalls.push(node);
  }

  if (node.type === "VariableDeclaration" && 
      node.declarations && 
      node.declarations[0].init &&
      node.declarations[0].init['type'] === "TemplateLiteral"){
    templateCalls.push(node);
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

const metrics = [[], [], [], [], [], [], [], []];
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

  it('Se prefiere el uso de querySelector sobre getElementById', () => {
    expect(getElementByIdCalls.length < querySelectorCalls.length).toBe(true);
  });

});

describe('Manejo de eventos del DOM', () => {

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

  it('Se registra un Event Listener con un parametro de evento', () => {
    expect(
      addEventListenerCalls.some((node) => {
        if (node.arguments[1].params.length === 0) return false;
        // que existe un param tipo { target } { currentTarget }
        const hasTargetParam = node.arguments[1].params[0].type === 'ObjectPattern' && (
          node.arguments[1].params[0].properties[0].key.name === ('target') ||
          node.arguments[1].params[0].properties[0].key.name === ('currentTarget'));
        // que existe un param tipo e, event
        const hasNamedEventParam = !!(node.arguments[1].params[0].name);
        return hasNamedEventParam || hasTargetParam;
      })
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
