export const createAuth = jest.fn().mockReturnValue({
  onAuthStateChanged: jest.fn().mockReturnValue(jest.fn()),
  signInWithGoogle: jest.fn().mockResolvedValue({}),
  signOut: jest.fn(),
});