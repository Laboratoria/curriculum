import ExamplePage from './ExamplePage';

describe('ExamplePage', () => {
  it('should render without crashing', () => {
    const el = ExamplePage({ router: { params: { id: 99 } } });
    expect(el instanceof HTMLElement).toBe(true);
  });
});