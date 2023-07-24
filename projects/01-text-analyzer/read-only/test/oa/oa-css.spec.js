const fs = require('fs');
const { JSDOM } = require('jsdom');
const css = require('css');

const html = fs.readFileSync('./src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

const stylesPath = document.querySelector('link[rel="stylesheet"]').getAttribute('href');
const style = fs.readFileSync('./src/' + stylesPath, 'utf-8');
const { rules } = css.parse(style).stylesheet;

const BOX_MODEL_ATTRIBUTES = ['width', 'height', 'margin', 'padding', 'border', 'box-sizing', 'background'];

const getRulesForSelector = (selector) => {
  return rules.filter(
    (rule) =>
      rule.type === 'rule' &&
      rule.selectors.some((s) => s.trim() === selector)
  );
}

//get all class rules
const classRules = [
  ...new Set( //remove duplicates
    rules.reduce( //one array with all selectors
      (result, rule) =>
        rule.type === 'rule' ? //only rules
          result.concat( //concat all selectors
            rule.selectors.flatMap((s) => //flat array
              s.trim().match(/\.[a-zA-Z0-9_-]+/) //extract classes from selector
              ?? [] //if no class, empty array
            )
          ) :
          result
      , []
    ))];

function toBeUsedMoreThanOnce(uses, className) {
  const pass = uses > 1;
  if (pass) {
    return {
      message: () =>
        `expected ${className} used more than once`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${className} used more than once, but it was not`,
      pass: false,
    };
  }
}

expect.extend({
  toBeUsedMoreThanOnce
});

describe('CSS', () => {

  const ul = document.querySelector('ul');
  const ulClasses = Array.from(ul.classList.values());

  const lis = Array.from(ul.querySelectorAll('li'));

  describe('Uso de selectores de CSS', () => {

    it('Se usan selectores CSS de tipo para <header>', () => {
      const headerRules = getRulesForSelector('header');
      expect(headerRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de tipo para <footer>', () => {
      const footerRules = getRulesForSelector('footer');
      expect(footerRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de atributo para <textarea>', () => {
      const textarea = document.querySelector('textarea');
      const name = textarea.getAttribute('name');
      const textareaRules = getRulesForSelector(`textarea[name="${name}"]`);
      expect(textareaRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de ID para <button>', () => {
      const button = document.querySelector('button');
      const id = button.getAttribute('id');
      const buttonRules = getRulesForSelector(`#${id}`);
      expect(buttonRules.length).toBeGreaterThan(0);
    });

    it('Se usan selectores CSS de class para <li>', () => {
      expect(
        lis.some((li) => {
          const liClasses = Array.from(li.classList.values());
          return liClasses.some(
            (liClass) => {
              const liRules = getRulesForSelector(`.${liClass}`);
              return liRules.length > 0;
            }
          );
        })
      ).toBe(true);
    });

    it('Todos los selectores CSS de class se usan mas de una vez', () => {
      classRules.forEach((classRule) => {
        const elements = document.querySelectorAll(classRule);
        expect(elements.length).toBeUsedMoreThanOnce(classRule);
      });
    });
  });

  describe('Modelo de caja (box model)', () => {

    it('Se usan atributos de modelo de caja en clase CSS para <li>', () => {
      let allRulesAttributes = [];
      lis.forEach((li) => {
        const liClasses = Array.from(li.classList.values());
        liClasses.forEach((liClass) => {
          const liRules = getRulesForSelector(`.${liClass}`);
          const ulRulesAttributes = liRules[0].declarations.map((declaration) => declaration.property);
          allRulesAttributes = allRulesAttributes.concat(ulRulesAttributes);
        });
      });

      //expect at least one ulRulesAttributes starts with at least one element of boxModelAttributes
      expect(
        allRulesAttributes.some(
          (attribute) => BOX_MODEL_ATTRIBUTES.some(
            boxModelAttribute => attribute.startsWith(boxModelAttribute)
          )
        )
      ).toBe(true);
    });
  });
});
