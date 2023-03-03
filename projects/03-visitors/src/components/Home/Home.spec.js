import Home from './Home';

describe('Home', () => {
  it('should render without crashing', () => {
    const el = Home({});
    expect(el instanceof HTMLElement).toBe(true);
  });
});