const logger = namespace => (...args) => `${namespace} ${args.join(' ')}`;

export default logger;
