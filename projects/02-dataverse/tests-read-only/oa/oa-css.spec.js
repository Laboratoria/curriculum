/* eslint-disable indent */
/**
 * @jest-environment jsdom
*/
import fs from 'fs';
import css from 'css';
import { renderItems } from '../../src/view.js';
import { data as fakeData } from '../../test/data.js';

const html = fs.readFileSync('./src/index.html', 'utf-8');
document.body.innerHTML = html;

const stylesPath = document.querySelector('link[rel="stylesheet"]').getAttribute('href');
const style = fs.readFileSync('./src/' + stylesPath, 'utf-8');
const { rules } = css.parse(style).stylesheet;

const BOX_MODEL_ATTRIBUTES = ['width', 'height', 'margin', 'padding', 'border', 'box-sizing'];
const FLEXBOX_DECLARATION = ['display', 'flex'];
const FLEXBOX_ATTRIBUTES = ['flex-wrap', 'flex-direction', 'justify-content', 'align-items'];

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
      
const getRulesForSelector = (selector) => {
  return rules.filter(
    (rule) =>
      rule.type === 'rule' &&
      rule.selectors.some((s) => s.trim().includes(selector))
  );
}

// returns an array of css declaration objects in format
// [{ 'display": 'block' }, { 'justify-content': 'center' }];
const getCSSDeclarationsForRules = (rules) => {
  return rules.reduce((total, rule) => {
    const declarations = rule.declarations.map(({ property, value }) => ({ [property]: value }));
    return [...total, ...declarations];
  }, []);
}

// get css for an el's classes 
// returns in format [{ 'display': 'block' }, { 'justify-content': 'center'}];
const getDeclarationsForElClasses = (el) => {
  const elClasses = Array.from(el.classList.values());
  return elClasses.reduce((allDeclarations, className) => {
    const rules = getRulesForSelector(`.${className}`);
    // there can be more than one rule for a class
    const declarationsForClass = getCSSDeclarationsForRules(rules);
    return [...allDeclarations, ...declarationsForClass];
  }, []);
}

describe('CSS', () => {

  describe('Uso de selectores de CSS', () => {

    beforeEach(() => {
      renderDOM(fakeData);
    });
    
    it('elementos <li> tienen un class con CSS', () => {
      const elementsLi = document.querySelectorAll('#root > ul > li');
      // all lis should have same classes since rendered dinamically
      // so not checking for common classes here
      elementsLi.forEach((li) => {
        const liRulesAttributes = getDeclarationsForElClasses(li);
        expect(liRulesAttributes.length).toBeGreaterThan(0);
      });
      expect.hasAssertions();
    });

    it('Se usan selectores CSS de tipo para <header>', () => {
      const headerRules = getRulesForSelector('header');
      expect(headerRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de tipo para <footer>', () => {
      const footerRules = getRulesForSelector('footer');
      expect(footerRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de tipo para <select>', () => {
      const selectRules = getRulesForSelector('select');
      expect(selectRules.length).toBeGreaterThan(0);
    });
  });

  describe('Uso de flexbox', () => {

    beforeEach(() => {
      renderDOM(fakeData);
    });

    it('Uso de flexbox en el elemento de <ul>', () => {
      const ul = document.querySelector('#root > ul');
      const cssForTag = getCSSDeclarationsForRules(getRulesForSelector(ul.tagName.toLowerCase()));
      const cssForId = getCSSDeclarationsForRules(getRulesForSelector(`#${ul.id}`));
      const cssForClasses = getDeclarationsForElClasses(ul);
      const cssDeclarations = [...cssForClasses, ...cssForId, ...cssForTag];

      // expect to have display: flex 
      expect(
        cssDeclarations.some((declaration) => {
          const [ flexboxProperty, flexboxValue ] = FLEXBOX_DECLARATION;
          const [ property, value ] = Object.entries(declaration)[0];
          return property ===  flexboxProperty && value === flexboxValue;
        })
      ).toBe(true);
      // and at least one other flexbox property
      expect(
        cssDeclarations.some((declaration) => {
          const [ property ] = Object.entries(declaration)[0];
          return FLEXBOX_ATTRIBUTES.includes(property);
        })
      ).toBe(true);
    });

    it('Los elementos <select> de filtro y sort estan en un elemento que usa flexbox', () => {
      const selects = document.querySelectorAll('body select');
      expect(selects.length).toBeGreaterThan(1);

      // if not more than one select, don't check for common parent
      if (selects.length > 1) {

        const parents = (node) => {
          const nodes = [];
          while ((node = node.parentNode)) {
            nodes.push(node)
          }
          return nodes
        }

        const select1Parents = parents(selects[0]);
        const select2Parents = parents(selects[1]);
        const commonParent = select1Parents.find((node) => select2Parents.includes(node));
        
        const cssForTag = getCSSDeclarationsForRules(getRulesForSelector(commonParent.tagName.toLowerCase()));
        const cssForId = getCSSDeclarationsForRules(getRulesForSelector(`#${commonParent.id}`));
        
        const cssForClasses = getDeclarationsForElClasses(commonParent);
        const allCSSDeclarations = [...cssForId, ...cssForTag, ...cssForClasses];
        expect(allCSSDeclarations.some((declaration) => {
          const [ displayProperty, flexboxValue ] = FLEXBOX_DECLARATION;
          const [ property, value ] = Object.entries(declaration);
          return property === displayProperty && value === flexboxValue;
        }));
      }
    });
  });

  describe('Modelo de caja (box model)', () => {  
    it('Se usan atributos de modelo de caja en clase CSS para <li>', () => {
      const elementsLi = document.querySelectorAll('#root > ul > li');
      elementsLi.forEach((li) => {
        expect(
          getDeclarationsForElClasses(li).some((declaration) => {
            const [ property ] = Object.entries(declaration)[0];
            return BOX_MODEL_ATTRIBUTES.some(attr => property.startsWith(attr));
          })        
        ).toBe(true);
      });
    });

    it('Se usan atributos de modelo de caja para <header> o <footer>', () => {
      const HEADER_SELECTOR = 'header';
      const FOOTER_SELECTOR = 'footer'

      const elements = [
        {
          element: document.querySelector(HEADER_SELECTOR),
          selector: HEADER_SELECTOR,
        },
        {
          element: document.querySelector(FOOTER_SELECTOR),
          selector: FOOTER_SELECTOR
        }
      ];

      const isUsingBoxModelSomeElement = elements.some(elementObj => {
        if (!elementObj.element) return;
        const rules = getRulesForSelector(elementObj.selector);
        const declarations = getCSSDeclarationsForRules(rules);

        return declarations.some((declaration) => {
          const [property] = Object.entries(declaration)[0];
          return BOX_MODEL_ATTRIBUTES.some(attr => property.startsWith(attr));
        })
      });

      expect(isUsingBoxModelSomeElement).toBe(true)
    })
  });
});
