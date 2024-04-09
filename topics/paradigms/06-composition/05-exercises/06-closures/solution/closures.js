const createLogger = namespace => str => console.log(`[${namespace}]: ${str}`);

export default createLogger;
