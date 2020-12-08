const camelCased = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const slugToFilename = id => `${camelCased(id.replace(/^\d{2}-/, ''))}.js`;

export const decodeFilenameKeys = obj => Object.keys(obj || {}).reduce(
  (memo, key) => {
    const decodedKey = Buffer.from(key, 'base64').toString('ascii');

    if (typeof obj[key] === 'string') {
      return {
        ...memo,
        [decodedKey]: obj[key],
      };
    }

    return {
      ...memo,
      [decodedKey]: decodeFilenameKeys(obj[key]),
    };
  },
  {},
);