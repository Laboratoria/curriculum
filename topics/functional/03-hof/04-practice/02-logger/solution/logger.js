const logger = namespace => (...args) => `${namespace} ${args.join(' ')}`;

module.exports = logger;
