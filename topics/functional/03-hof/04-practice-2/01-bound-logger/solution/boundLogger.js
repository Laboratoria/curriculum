export const log = (...args) => args.join(' ');

export const logger = namespace => log.bind(null, namespace);
