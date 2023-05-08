---
type: read
duration: 15min
---

# Tests en el navegador

Hasta este punto hemos estado ejecutando nuestros tests con Node.js, pero como
front-end developers nos interesa también poder ejcutar nuestros tests en un
entorno de navegador, con un `window` y un `DOM` de verdad. Esto nos va a
permitir automatizar tests así como hacer _cross-browser_ testing y probar
nuestro código en distintos navegadores.

Imagina que tienes una página web con una lista no ordenada (`ul`), algo así:

```html
<ul>
  <li>Betty Snyder Holberton</li>
  <li>Jean Jennings Bartik</li>
  <li>Kathleen McNulty Mauchly Antonelli</li>
  <li>Marlyn Wescoff Meltzer</li>
  <li>Ruth Lichterman Teitelbaum</li>
  <li>Frances Bilas Spence</li>
</ul>
```

Y los usuarios te han estado pidiendo un _feature_ para que los textos que
aparecen en la lista salgan con todas las vocales en mayúscula. Es una petición
un poco extraña, pero la vida misma es muy extraña...

Para implementar este _feature_ acuerdas con tu equipo que necesitan una función
que reciba un string y retorne otro string en el cual se hayan reemplazado todas
las vocales en minúsculas por mayúsculas. Necesitamos una función con la
siguiente firma (_signature_):

```js
string makeVowelsUpperCase(string)
```

Si esta función existiera, sabemos que podríamos seleccionar los nodos que
queremos (los `<li>`) y remplazar su contenido con lo que retorne
`makeVowelsUpperCase()` pasándole el contenido original.

```js
[...document.querySelectorAll('li')]
  .forEach(el => el.innerHTML = makeVowelsUpperCase(el.innerHTML));
```

Antes de asignarle a nadie la implementación de esta función, decidimos escribir
algunos tests para que sirvan de guía y describan el comportamiento esperado. En
una carpeta nueva, crea un archivo con el nombre `makeVowelsUpperCase.spec.js` y
añade los siguientes tests:

```js
describe('makeVowelsUpperCase()', () => {

  it('debería convertir "hola mundo" en "hOlA mUndO"', () => {
    assert.equal(makeVowelsUpperCase('hola mundo'), 'hOlA mUndO');
  });

  it('debería convertir "Betty Snyder Holberton" en "BEtty SnydEr HOlbErtOn"', () => {
    assert.equal(
      makeVowelsUpperCase('Betty Snyder Holberton'),
      'BEtty SnydEr HOlbErtOn'
    );
  });

});
```

Como punto de partida de la implementación, por ahora simplemente creemos un
archivo con el nombre `makeVowelsUpperCase.js` en la misma carpeta donde creaste
el archivo anterior con los tests. En este archivo por ahora solo vamos a
declarar una función que recibe un argumento y retorna el argumento tal y como
lo recibió.

```js
const makeVowelsUpperCase = function (string) {
  return string;
};
```

Para poder ejecutar los tests en el navegador empecemos por crear un archivo
HTML con el nombre `test.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js"></script>
    <script src="./makeVowelsUpperCase.js"></script>
    <script>
      const { assert } = chai;
      mocha.setup('bdd');
    </script>
    <script src="./makeVowelsUpperCase.spec.js"></script>
    <script>mocha.run();</script>
  </body>
</html>
```

Este archivo HTML hace lo siguiente:

1. Añade la hoja de estilos de `mocha` desde el CDN de [cdnjs](https://cdnjs.com/)

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.css"
   />
   ```

2. Añade un `<div>` con `id="mocha"` para que mocha escriba los resultados

   ```html
   <div id="mocha"></div>
   ```

3. Añade `mocha` y `chai` desde CDN de [cdnjs](https://cdnjs.com/)

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js"></script>
   ```

4. Incluímos el código que queremos testear (el archivo
   `makeVowelsUpperCase.js`) que acabamos de crear.

   ```html
   <script src="./makeVowelsUpperCase.js"></script>
   ```

5. Guardamos una referencia a `chai.assert` en la constante `assert` en entorno
   global para poder usar directamente `assert` en los tests (en vez de
   `chai.assert`);

   ```js
   const { assert } = chai;
   ```

6. Inicializa la interfaz BDD de `mocha`

   ```js
   mocha.setup('bdd');
   ```

7. Incluimos todos los tests que queramos correr

   ```html
   <script src="./makeVowelsUpperCase.spec.js"></script>
   ```

8. Finalmente ejecutamos los tests.

   ```js
   mocha.run();
   ```

Ya tenemos un entorno donde ejecutar los tests en el navegador. Abre el archivo
`test.html` en tu navegador y deberías ver algo así:

![Output de Mocha en navegador](https://user-images.githubusercontent.com/110297/34898926-a840563a-f7c3-11e7-8872-c3f3a1f5339d.png)

Esto nos muestra que nuestros tests han corrido, pero la implementación actual
de `makeVowelsUpperCase` no pasa los tests ya que no retorna los valores
esperados.

Ya estamos listos para asignarle el trabajo de implementar la función a una
compañera, quien tendrá clara cuál es la intención de la función y su
comportamiento esperado. Los tests le permitirán saber si la implementación se
ajusta o no a los requerimientos.

Continuemos imaginando... digamos que han pasado unos días y Pepita, una
compañera, nos envía una implementación de `makeVowelsUpperCase` para que la
revisemos. Antes de siquiera leer su código, primero vamos a ejecutar los tests.
Asegúrate de reemplazar el código en el archivo `makeVowelsUpperCase.js` con el
de Pepita:

```js
const isVowel = function (char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }

  return false;
};

const makeVowelsUpperCase = function (string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;
};
```

Si ahora abrimos otra vez el archivo `test.html` veremos lo siguiente.

![Output de Mocha en navegador con tests aprobados](https://user-images.githubusercontent.com/110297/34899917-c8f6d402-f7c9-11e7-9e69-c00ed149d0e0.png)

Parece que el código de Pepita pasa todos los tests :tada:

***

Pero ahí no termina la historia... han pasado unos días, el código de Pepita ya
está en producción, y recibimos un reporte de un _bug_: las vocales con acento
no se están transformando a mayúsculas! Gracias a que tenemos tests para esta
función, podemos rápidamente escribir un nuevo test para replicar y confirmar
el problema reportado, así que añadimos el siguiente test a nuestro archivo
`makeVowelsUpperCase.spec.js`:

```js
it('debería convertir vocales con acento', () => {
  assert.equal(makeVowelsUpperCase('cómo estás?'), 'cÓmO EstÁs?');
});
```

Si volvemos a ejecutar los test podemos ver que efectivamente el nuevo test no
pasa:

![image](https://user-images.githubusercontent.com/110297/34906409-37ba7ecc-f83b-11e7-9500-10b5d1b49842.png)

En la siguiente lectura veremos como arreglar esto.
