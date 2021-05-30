//
// Este módulo abstrae la creación y eliminación de elementos del DOM, dándonos
// una API un poco más declarativa y ergonómica.
//

//
// Crea elemento DOM
//
export const createElement = (tagName, opts = {}) => {
  const { children, style, ...rest } = opts;
  const element = Object.assign(document.createElement(tagName), rest);

  if (Array.isArray(children)) {
    children.filter(item => item).forEach(element.appendChild.bind(element));
  }

  if (style) {
    Object.assign(element.style, style);
  }

  return element;
};

//
// Destruye elemento DOM
//
// Elimina elemento DOM usando `.remove`, pero antes se asegura de invocar
// `element.destroy()` (en caso de que exista) de forma recursiva en todo los
// nodos del subárbol.
//
// Esto es útil para asegurarnos de que podemos _cancelar_ subscripciones a
// eventos globales al _desmontar_ nuestros componentes (antes de volver a
// renderizar).
//
export const destroyElement = (element) => {
  if (element instanceof HTMLCollection) {
    return [...element].forEach(item => destroyElement(item));
  }
  if (element.children.length) {
    destroyElement(element.children);
  }
  if (typeof element.destroy === 'function') {
    element.destroy();
  }
  element.remove();
};
