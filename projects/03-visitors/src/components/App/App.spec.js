import { createAuth } from '../../lib/auth';
import { destroyElement } from '../../lib/element';
import App from './App';

jest.mock('../../lib/auth');

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    createAuth().onAuthStateChanged.mockClear();
  });

  it('should render without crashing', () => {
    const el = App({});
    expect(el instanceof HTMLElement).toBe(true);
    destroyElement(el);
  });

  it('should subscribe to onAuthStateChanged and handle updates', () => {
    const { onAuthStateChanged } = createAuth();
    const el = App({});
    expect(el.children.length).toBe(0);
    expect(onAuthStateChanged).toHaveBeenCalled();
    const update = onAuthStateChanged.mock.calls[0][0];
    expect(typeof update).toBe('function');
    update(null);
    expect(el.querySelector('h2').textContent).toBe('Hola anónimo');
    destroyElement(el);
  });

  it('should navigate to ExamplePage when link is clicked', () => {
    const { onAuthStateChanged } = createAuth();
    const el = App({});
    expect(onAuthStateChanged).toHaveBeenCalled();
    const update = onAuthStateChanged.mock.calls[0][0];
    expect(typeof update).toBe('function');
    update(null);
    expect(el.querySelector('h2').textContent).toBe('Hola anónimo');
    el.querySelector('a').click();
    expect(el.textContent).toBe('ExamplePage 1');
    destroyElement(el);
  });
});