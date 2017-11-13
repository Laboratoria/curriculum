const createLogger = namespace => str => console.log(`[${namespace}]: ${str}`);

module.exports = createLogger;
