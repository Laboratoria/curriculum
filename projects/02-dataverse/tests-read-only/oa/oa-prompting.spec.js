/* eslint-disable no-console */
import data from '../../src/data/dataset.js'

describe('Test de data set', () => {
  describe('Dataset', () => {
    it('Debe ser un arreglo', () => {
      expect(Array.isArray(data)).toBe(true)
    });
    it('Debe tener una longitud de 24 objetos', () => {
      expect(data.length).toBe(24)
    });
    it('Los ids son todos distintos', () => {
      const ids = data.map(item => item.id);
      const idsSet = new Set(ids);
      expect(ids.length).toBe(idsSet.size);
    });
    it('Los elementos comparten en sus "facts" al menos 3 propiedades', () => {
      // Iteramos todos los elementos, obtenemos los keys de la propiedad `facts`
      // y vamos acumulando en un objeto la cantidad de veces que aparece cada key
      const factsKeysCount = data.reduce((acc, item) => {
        Object.keys(item.facts).forEach((key) => {
          acc[key] = acc[key] ? acc[key] + 1 : 1;
        });
        return acc;
      }, {});

      // validamos que al menos 3 de las propiedades de `facts` aparezcan
      // en todos los elementos
      const minCount = 3;
      const validKeysCount = Object.values(factsKeysCount)
        .filter((count) => count === data.length).length;
      expect(validKeysCount).toBeGreaterThanOrEqual(minCount);
    });
  });
  
  data.forEach((item) => {
    describe(`*** ${item.name || item.id} ***`, () => {
      it('Debe tener las propiedades requeridas', () => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('shortDescription');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('imageUrl');
        expect(item).toHaveProperty('facts');
      });
    
      describe("id", () => {
        it('Debe ser un string', () => {
          expect(typeof item.id).toBe('string');
        });
    
        it('Tiene el formato correcto', () => {
          expect(/^[a-zA-Z0-9_\-]*$/.test(item.id)).toBe(true);
          expect(item.id.length).toBeGreaterThan(0);
          expect(item.id.length).toBeLessThanOrEqual(32);
        });
      });
      
      describe("name", () => {
        it('Debe ser un string', () => {
          expect(typeof item.name).toBe('string');
        });
      });

      describe('shortDescripcion', () => {
        it('Debe ser un string', () => {
          expect(typeof item.description).toBe('string');
        });
      
        it('Debe tener maximo 20 palabras', () => {
          const words = item.shortDescription.split(/\s+/).filter(word => word !== '');
          expect(words.length).toBeLessThanOrEqual(20);
        });
      });
      
      
      describe('descripcion', () => {
        it('Debe ser un string', () => {
          expect(typeof item.description).toBe('string');
        });
      
        it('Debe tener entre 80 y 100 palabras', () => {
          const words = item.description.split(/\s+/).filter(word => word !== '');
          expect(words.length).toBeGreaterThanOrEqual(80);
          expect(words.length).toBeLessThanOrEqual(100);
        });
      });
    
      describe("imageUrl", () => {
        it('Debe ser un string', () => {
          expect(typeof item.imageUrl).toBe('string');
        });
    
        it('Debe ser una URL válida', () => {
          const urlRegex = /^(https?):\/\/.*\.(jpg|jpeg|png|gif|bmp|svg).*$/;
          expect(urlRegex.test(item.imageUrl)).toBe(true);
        });
      });
    
      describe('facts', () => {
        it('Debe ser un objeto', () => {
          expect(typeof item.facts).toBe('object');
        })
      
        it('Debe tener al menos 3 propiedades', () => {
          expect(Object.keys(item.facts).length).toBeGreaterThanOrEqual(3);
        });

        it('Los nombres de todas las propiedades deben tener formato camelCase', () => {
          expect.hasAssertions();
          Object.keys(item.facts).forEach((k) => {
            expect(/^([a-z]+)(([A-Z]([a-z]+))+)$/.test(k)).toBe(true);
          });
        });
      
        it('Los valores de todas las propiedades deben tener el formato esperado', () => {
          expect.hasAssertions();
          Object.values(item.facts).forEach((v) => {
            expect(['number', 'boolean', 'string']).toContain(typeof v);
            if (typeof v === 'string') {
              expect(v.length).toBeGreaterThan(0);
              expect(v.length).toBeLessThanOrEqual(64);
            }
          });
        });
      });
    });
  });
});
