export const extend = (...sources) => Object.assign({}, ...sources);

// Implementación usando `bind` (aplicación parcial)
// exports.extend = Object.assign.bind(Object, {});
