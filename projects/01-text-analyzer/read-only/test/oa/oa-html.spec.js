const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('./src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

describe('Uso de HTML semántico', () => {  

  describe('<header>', () => {
    
    const header = document.querySelector('header');

    const h1 = header.querySelector('h1');

    it('La aplicación usa un <header>', () => {    
      expect(header).not.toBeNull();
    });

    it('<header> no tiene atributo "id"', () => {
      expect(header.getAttribute('id')).toBeNull();
    });

    it('<header> no tiene atributo "class"', () => {
      expect(header.getAttribute('class')).toBeNull();
    });

    it('<header> no tiene atributo "name"', () => {
      expect(header.getAttribute('name')).toBeNull();
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

    it('<h1> no tiene atributo "name"', () => {
      expect(h1.getAttribute('name')).toBeNull();
    });
  });

  describe('<textarea>', () => {
    
    const textarea = document.querySelector('textarea');

    it('La aplicación usa un <textarea>', () => {
      expect(textarea).not.toBeNull();
    });

    it('<textarea> tiene el atributo "name" en el valor "user-input"', () => {
      expect(textarea.getAttribute('name')).toBe('user-input');
    });

    it('<textarea> no tiene atributo "id"', () => {
      expect(textarea.getAttribute('id')).toBeNull();
    });

    it('<textarea> no tiene atributo "class"', () => {
      expect(textarea.getAttribute('class')).toBeNull();
    });
  });

  describe('<ul>', () => {
    
    const ul = document.querySelector('ul');

    const lis = ul.querySelectorAll('li');

    it('La aplicación usa un <ul>', () => {
      expect(ul).not.toBeNull();
    });

    it('<ul> no tiene atributo "id"', () => {      
      expect(ul.getAttribute('id')).toBeNull();
    });

    it('<ul> no tiene atributo "name"', () => {
      expect(ul.getAttribute('name')).toBeNull();
    });

    it('<ul> tiene 6 hijos <li>', () => {      
      expect(lis.length).toBe(6);
    });    

    it('<li> tienen atributos "class"', () => { 
      lis.forEach((div) => {
        expect(div.getAttribute('class')).not.toBeNull();
      });
    });    

    it('<li> no tienen atributos "id"', () => { 
      lis.forEach((div) => {
        expect(div.getAttribute('id')).toBeNull();
      });
    });

    it('<li> no tienen atributos "name"', () => { 
      lis.forEach((div) => {
        expect(div.getAttribute('name')).toBeNull();
      });
    });

    it('<li> no tienen hijos', () => { 
      const childLiCount = [...lis].reduce((acc, li) => acc + li.childElementCount, 0);
      expect(childLiCount).toBe(0);
    });

    it('Hay un <li> con atributo "data-testid" y valor "character-count"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'character-count')).not.toBeNull();
    });

    it('Hay un <li> con atributo "data-testid" y valor "word-count"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'word-count')).not.toBeNull();
    });

    it('Hay un <li> con atributo "data-testid" y valor "character-no-spaces-count"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'character-no-spaces-count')).not.toBeNull();
    });

    it('Hay un <li> con atributo "data-testid" y valor "number-count"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'number-count')).not.toBeNull();
    });

    it('Hay un <li> con atributo "data-testid" y valor "number-sum"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'number-sum')).not.toBeNull();
    });

    it('Hay un <li> con atributo "data-testid" y valor "character-count"', () => { 
      expect([...lis].find((div) => div.getAttribute('data-testid') === 'word-length-average')).not.toBeNull();
    });
  });

  describe('<button>', () => {
    const button = document.querySelector('button');
    
    it('La aplicación usa un <button>', () => {
      expect(button).not.toBeNull();
    });

    it('<button> tiene el atributo "id" en el valor "reset-button"', () => {
      expect(button.getAttribute('reset-button')).toBeNull();
    });
  });

  describe('<footer>', () => {
    
    const footer = document.querySelector('footer');
    
    const p = footer.querySelector('p');

    it('La aplicación usa un <footer>', () => {
      expect(footer).not.toBeNull();
    });

    it('<footer> no tiene atributo "id"', () => {
      expect(footer.getAttribute('id')).toBeNull();
    });

    it('<footer> no tiene atributo "class"', () => {
      expect(footer.getAttribute('class')).toBeNull();
    });

    it('<footer> no tiene atributo "name"', () => {
      expect(footer.getAttribute('name')).toBeNull();
    });   

    it('<footer> es padre de un <p>', () => {      
      expect(p).not.toBeNull();
    });

    it('<p> no tiene atributo "id"', () => {
      expect(p.getAttribute('id')).toBeNull();
    });

    it('<p> no tiene atributo "class"', () => {
      expect(p.getAttribute('class')).toBeNull();
    });

    it('<p> no tiene atributo "name"', () => {
      expect(p.getAttribute('name')).toBeNull();
    });      
  });

});
