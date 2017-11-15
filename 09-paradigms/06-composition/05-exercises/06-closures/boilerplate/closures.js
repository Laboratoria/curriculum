// const createLogger = function (namespace){
// //Escribe aquí tu código

// };

// module.exports = createLogger;
const createLogger = namespace => str => console.log(`[${namespace}]: ${str}`);

module.exports = createLogger;
