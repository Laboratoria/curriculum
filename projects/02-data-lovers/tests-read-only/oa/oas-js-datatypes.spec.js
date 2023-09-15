import data from '../../src/data/dataset.js'

describe('Test de data set', ()=>{
  it('La data debe ser un arreglo', ()=>{
    expect(Array.isArray(data)).toBe(true)
  })

  it('La data debe tener una longitud de 24 objetos', ()=>{
    expect(data.length).toBe(24)
  })

  it('cada objeto debe tener las propiedades "name", "img", "statistics", y "description"', () => {
    expect.assertions(data.length*4)
    data.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('img');
      expect(item).toHaveProperty('statistics');
      expect(item).toHaveProperty('description');
    })

  });

  it('la propiedad "statistics" debe tener como valor un objeto con las propiedades "value" y "label"', () => {
    expect.assertions(data.length*4)
    data.forEach(item => {
      expect(item.statistics).toHaveProperty('value');
      expect(item.statistics).toHaveProperty('label');
    })
  });

  it('La propiedad value del objeto statistics debe ser un número', ()=>{
    data.forEach(item => {
      expect(typeof item.statistics.value).toBe('number')
    })
  })
})