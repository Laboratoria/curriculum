
import { createElement, destroyElement } from './element';

describe('createElement', () => {
  it('should be a function', () => {
    expect(typeof createElement).toBe('function');
  });

  it('should create an HTMLUnknownElement when no tagName', () => {
    expect(createElement() instanceof HTMLUnknownElement).toBe(true);
  });

  it('should throw when tagName is invalid/empty string', () => {
    expect(() => createElement('')).toThrow('Unexpected syntax');
  });

  it('should create DOM element of given tagName', () => {
    expect(createElement('span') instanceof HTMLSpanElement).toBe(true);
    expect(createElement('div') instanceof HTMLDivElement).toBe(true);
  });

  it('should add children when present', () => {
    const element = createElement('div', {
      children: [createElement('span', { className: 'inner' })],
    });
    expect(element instanceof HTMLDivElement).toBe(true);
    expect(element.children.length).toBe(1);
    expect(element.children[0] instanceof HTMLSpanElement).toBe(true);
    expect(element.children[0].className).toBe('inner');
  });

  it('should add style when present', () => {
    const element = createElement('div', {
      style: {
        backgroundColor: 'pink',
      },
    });
    expect(element.style.backgroundColor).toBe('pink');
  });
});

describe('destroyElement', () => {
  it('should invoke element.remove', () => {
    const element = document.createElement('div');
    element.remove = jest.fn();
    expect(destroyElement(element)).toBeUndefined();
    expect(element.remove).toHaveBeenCalled();
  });

  it('should invoke element.destroy if present', () => {
    const element = document.createElement('div');
    element.destroy = jest.fn();
    expect(destroyElement(element)).toBeUndefined();
    expect(element.destroy).toHaveBeenCalled();
  });

  it('should handle HTMLCollection as well as HTMLElement as input', () => {
    const element = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');

    child1.destroy = jest.fn();
    child2.destroy = jest.fn();

    element.appendChild(child1);
    element.appendChild(child2);

    expect(destroyElement(element.children)).toBeUndefined();
    expect(child1.destroy).toHaveBeenCalled();
    expect(child2.destroy).toHaveBeenCalled();
  });

  it('should invoke element.destroy in subtree', () => {
    const element = document.createElement('div');
    const child = document.createElement('div');
    const grandchild = document.createElement('div');

    element.destroy = jest.fn();
    child.destroy = jest.fn();
    grandchild.destroy = jest.fn();

    child.appendChild(grandchild);
    element.appendChild(child);

    expect(destroyElement(element)).toBeUndefined();
    expect(element.destroy).toHaveBeenCalled();
  });
});
