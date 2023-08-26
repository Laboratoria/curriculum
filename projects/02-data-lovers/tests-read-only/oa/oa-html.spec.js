/**
 * @jest-environment jsdom
*/
import fs from 'fs';
import { renderItems } from '../../src/view.js';
import { data as fakeData } from '../../test/data.js';

const html = fs.readFileSync('./src/index.html', 'utf-8');
document.body.innerHTML = html;

const renderDOM = (data) => {
  const items = renderItems(data);
  // function renderItems can return html string or an node element
  if (typeof items === 'string') {
    document.querySelector('#root').innerHTML = items;
  } else if (items instanceof HTMLElement) {
    document.querySelector('#root').appendChild(items);
  } else {
    throw new Error('Error: renderItems should return an HTML string or an HTMLElement');
  }
}

describe('Uso de HTML semántico', () => {
  
  beforeEach(() => {
    renderDOM(fakeData);
  });

  describe('<header>', () => {
    let header, h1;
    beforeEach(() => {
      header = document.querySelector('header');
      h1 = header.querySelector('h1');
    });

    it('La aplicación usa un <header>', () => {
      expect(header).not.toBeNull();
    });

    it('<header> no tiene atributo "id"', () => {
      expect(header.getAttribute('id')).toBeNull();
    });

    it('<header> no tiene atributo "class"', () => {
      expect(header.getAttribute('class')).toBeNull();
    });

    it('<header> es padre de un <h1>', () => {
      expect(h1).not.toBeNull();
    });

    it('<h1> no tiene atributo "id"', () => {
      expect(h1.getAttribute('id')).toBeNull();
    });

    it('<h1> no tiene atributo "class"', () => {
      expect(h1.getAttribute('class')).toBeNull();
    });
  });

  describe('<select>', () => {
    let select = [];
    beforeEach(()=>{
      select = document.querySelectorAll('select');
    });

    it('La aplicación usa un <select>', () => {
      expect(select.length).toBeGreaterThan(0);
    });

    it('<select> tiene atributo "name"', () => {
      Array.from(select).forEach((element) => {
        expect(element.getAttribute('name').length).toBeGreaterThan(0);
      })
      expect.hasAssertions();
    });

    it('<select> no tiene atributo "class"', () => {
      Array.from(select).forEach((element) => {
        expect(element.getAttribute('class')).toBeNull();
      })
      expect.hasAssertions();
    });

    it('<label> existe', () => {
      const label = document.querySelectorAll('label');
      Array.from(select).forEach((element) => {
        const previousFor = element.previousElementSibling.getAttribute('for');
        expect(previousFor).toBe(element.id);
      })
      expect(select.length && label.length).toBeGreaterThan(0);
    })

  });

  describe('<ul>', () => {
    let lis = [];
    beforeEach(()=>{
      lis = document.querySelectorAll('#root > ul > li');
    });

    it('La aplicacion usa un <ul> con <li> para los elementos de data', () => {
      expect(lis.length).toBeGreaterThan(0);
    });

    it('<li> tiene atributo "itemtype"', () => {
      Array.from(lis).forEach((li) => {
        expect(li.getAttribute('itemtype')).not.toBeNull();
        expect(li.getAttribute('itemscope')).not.toBeNull();
      })
      expect.hasAssertions();
    });

  });

  describe('<footer>', () => {
    it('La aplicación usa un <footer>', () => {
      const footer = document.querySelector('footer');
      expect(footer).not.toBeNull();
    });
  });

});
