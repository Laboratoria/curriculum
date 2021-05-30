import { createElement, destroyElement } from '../lib/element';
import { createRouter } from './router';

describe('createRouter', () => {
  beforeEach(() => {
    history.replaceState({}, '', '/');
  });

  it('should default to NotFound', () => {
    const Router = createRouter();
    const el = Router();
    expect(el.className).toBe('Router');
    expect(/Not found/.test(el.textContent)).toBe(true);
    destroyElement(el);
  });

  it('should match route, pass props and update on push', () => {
    history.replaceState({}, 'Test', '/test/123');

    const Router = createRouter({
      '/test/_edit': () => null,
      '/test/:id': ({ foo, router }) => createElement('a', {
        textContent: `${foo}:${router.params.id}`,
        onclick: (e) => {
          e.preventDefault();
          router.push('/omg');
        },
      }),
      '/omg': () => createElement('div', { textContent: 'OMG' }),
    });

    const el = Router({ foo: 1 });
    const a = el.querySelector('a');
    expect(a.textContent).toBe('1:123');
    a.click();
    expect(el.textContent).toBe('OMG');
    destroyElement(el);
  });

  it('should rerender on global popstate event', () => {
    const Router = createRouter({
      '/': () => createElement('div', { textContent: 'OMG' }),
      '/foo': () => createElement('div', { textContent: 'foo' }),
    });
    const el = Router({});
    expect(el.textContent).toBe('OMG');

    history.replaceState({}, '', '/foo');
    window.dispatchEvent(new Event('popstate'));
    expect(el.textContent).toBe('foo');

    destroyElement(el);
  });

  it('should ignore components that return a falsy value', () => {
    const Router = createRouter({
      '/': () => null,
    });
    const el = Router({});
    expect(el.children.length).toBe(0);
    destroyElement(el);
  });
});