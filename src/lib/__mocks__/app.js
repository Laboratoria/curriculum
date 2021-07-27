const app = {
  auth: {
    signIn: jest.fn(() => Promise.resolve()),
    signOut: jest.fn(() => Promise.resolve()),
  },
  client: jest.fn(() => Promise.resolve()),
};

const useApp = jest.fn().mockImplementation(() => app);

const mockRestore = () => {
  app.auth.signIn.mockRestore();
  app.auth.signIn.mockImplementation(() => Promise.resolve());
  app.auth.signOut.mockRestore();
  app.auth.signOut.mockImplementation(() => Promise.resolve());

  app.client.mockRestore();
  app.client.mockImplementation(() => Promise.resolve());

  useApp.mockRestore();
  useApp.mockImplementation(() => app);
};

module.exports = {
  ...app,
  useApp,
  mockRestore,
};