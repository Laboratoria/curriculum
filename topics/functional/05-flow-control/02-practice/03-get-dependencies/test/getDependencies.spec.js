import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/getDependencies.js';


describe('getDependencies()', () => {

  it('debería exportar una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('no debería usar for o while', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    assert.equal(/(for|while)\s*\(/g.test(strippedFnBody), false);
  });

  it('debería usar Object.keys() en cada invación', () => {
    const spy = Sinon.spy(Object, 'keys');
    Submission({
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    });
    assert.equal(spy.callCount, 4);
    spy.restore();
  });

  it('debería retornar un array con las dependencias en formato dependencia@versión', () => {
    const loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    };
    assert.deepEqual(
      Submission(loremIpsum),
      ['inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']
    );
  });

});
