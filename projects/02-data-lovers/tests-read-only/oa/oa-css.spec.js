/**
 * @jest-environment jsdom
*/
import fs from 'fs';
import css from 'css';
import { renderItems } from '../../src/viewFunctions.js';
const html = fs.readFileSync('./src/index.html', 'utf-8');
document.body.innerHTML = html;

const stylesPath = document.querySelector('link[rel="stylesheet"]').getAttribute('href');
const style = fs.readFileSync('./src/' + stylesPath, 'utf-8');
const { rules } = css.parse(style).stylesheet;

const BOX_MODEL_ATTRIBUTES = ['width', 'height', 'margin', 'padding', 'border', 'box-sizing', 'background'];
const FLEXBOX_ATTRIBUTES = ['flex-wrap', 'flex-direction', 'justify-content', 'align-items'];

const getRulesForSelector = (selector) => {
  return rules.filter(
    (rule) =>
      rule.type === 'rule' &&
      rule.selectors.some((s) => s.trim().includes(selector))
  );
}

const tagRulesCSS = (tag) =>{
  const tagClasses = Array.from(tag.classList.values());
  return tagClasses.reduce((allRules, tagClass) => {
    const rules = getRulesForSelector(`.${tagClass}`);
    const tagRulesAttributes = rules[0].declarations.map((declaration) => declaration.property);
    return allRules.concat(tagRulesAttributes);
  }, []);

}
const fakeData = [
  {
    name: "charizard",
    img: "https://www.serebii.net/pokemongo/pokemon/006.png",
    num: '006',
    type: [
      "fire",
      "flying"
    ],
  },
  {
    name: "charmeleon",
    img: "https://www.serebii.net/pokemongo/pokemon/005.png",
    num: '005',
    type: [
      "fire"
    ],
  },
];
document.querySelector('#root').innerHTML = renderView(fakeData);

describe('CSS', () => {
  const cardsLi = document.querySelectorAll('#root > ul > li');
  describe('Uso de selectores de CSS', () => {
    it('li elementos tienen class', () => {
      cardsLi.forEach((li)=>{
        const liClasses = Array.from(li.classList.values());
        if(liClasses.length){
          const liRulesAttributes = tagRulesCSS(li);
          expect(liRulesAttributes.length).toBeGreaterThan(0);
        }
        expect(liClasses.length).toBeGreaterThan(0);
      });
    });

    it('El contenedor padre de las etiquetas select usa flexbox', () => {
      const parentContainer = document.querySelector('.flexNav');
      const selects = parentContainer.querySelectorAll('select')
      if(selects.length > 0){
        const rules = getRulesForSelector(`.flexNav`);
        const ulRulesAttributes = rules[0].declarations.map((declaration) => declaration.value);
        expect(ulRulesAttributes).toContain('flex');
      }
      expect(selects.length).toBeGreaterThan(0);
    });

    it('Uso de flexbox en la clase del ul', () => {
      const ul = document.querySelector('#root ul');
      expect(
        tagRulesCSS(ul).some(
          (attribute) => FLEXBOX_ATTRIBUTES.some(
            flexboxAttribute => attribute.startsWith(flexboxAttribute)
          )
        )
      ).toBe(true);
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

  describe('Modelo de caja (box model)', () => {
    it('Se usan atributos de modelo de caja en clase CSS para <li>', () => {
      cardsLi.forEach((li) => {
        expect(
          tagRulesCSS(li).some(
            (attribute) => BOX_MODEL_ATTRIBUTES.some(
              boxModelAttribute => attribute.startsWith(boxModelAttribute)
            )
          )
        ).toBe(true);
      });

      //expect at least one ulRulesAttributes starts with at least one element of boxModelAttributes
    });
  });
});
