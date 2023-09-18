import data from '../../src/data/dataset.js'

describe('Test de data set', ()=>{

  // Array

  it('La data debe ser un arreglo', ()=>{
    expect(Array.isArray(data)).toBe(true)
  })

  it('La data debe tener una longitud de 24 objetos', ()=>{
    expect(data.length).toBe(24)
  })

  it('cada objeto debe tener las propiedades "name", "imgSrc", "statistics", y "description"', () => {
    expect.assertions(data.length*4)
    data.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('imgSrc');
      expect(item).toHaveProperty('statistics');
      expect(item).toHaveProperty('description');
    })
  });

  //Property name

  it('El valor de la propiedad "name" debe ser un string', ()=>{
    data.forEach(item => {
      expect(typeof item.name).toBe('string')
    })
  })

  //Property imgSrc

  it('El valor de la propiedad "imgSrc" debe ser un string', ()=>{
    data.forEach(item => {
      expect(typeof item.imgSrc).toBe('string')
    })
  })

  it('La propiedad "imgSrc" debe contener una URL válida', () => {
    data.forEach((item) => {
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
      expect(urlRegex.test(item.imgSrc)).toBe(true);
    });
  });

  //Property statistics

  it('El valor de la propiedad "statistics" debe ser un objeto', ()=>{
    data.forEach(item => {
      expect(typeof item.statistics).toBe('object')
    })
  })

  it('la propiedad "statistics" debe tener como valor un objeto con las propiedades "value" y "label"', () => {
    expect.assertions(data.length*2)
    data.forEach(item => {
      expect(item.statistics).toHaveProperty('value');
      expect(item.statistics).toHaveProperty('label');
    })
  });

  it('La propiedad "value" del objeto statistics debe ser un número', ()=>{
    expect.assertions(data.length)
    data.forEach(item => {
      expect(typeof item.statistics.value).toBe('number')
    })
  })

  it('La propiedad "label" del objeto statistics debe ser un string', ()=>{
    expect.assertions(data.length)
    data.forEach(item => {
      expect(typeof item.statistics.label).toBe('string')
    })
  })
  
  //descripcion

  it('El valor de la propiedad "description" debe ser un string', ()=>{
    data.forEach(item => {
      expect(typeof item.description).toBe('string')
    })
  })

  it('El valor de la propiedad "description" debe tener al menos 100 palabras', ()=>{
    data.forEach((item) => {
      const words = item.description.split(/\s+/).filter(word => word !== '');
      if (words.length < 100) {
        console.error(`El objeto con el nombre: ${item.name} no cumple con la condición, tiene ${words.length} palabras`);
      }
      expect(words.length).toBeGreaterThanOrEqual(100)
    })
  })

});