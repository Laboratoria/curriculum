module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'burger-queen-api',
    },
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    autoStart: false,
  },
};
