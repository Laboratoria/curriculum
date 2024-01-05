# **HITO 2:** Visualización de datos

La división del código en funciones pequeñas facilita su
reutilización en proyectos distintos.
El objetivo de este hito es que Dataverse
funcione al 100% dentro de tu SPA,
incluyendo las funciones de filtrar,
ordenar y calcular.

## Tareas de este hito

* Data

Para utilizar tu set de datos de Dataverse
en este proyecto, crea una carpeta ```data```
dentro de la carpeta ```src```. Dentro de la
carpeta ```data``` , crea un archivo ```dataset.js.```
En este archivo, copia tu set de datos de Dataverse.

``` js
// src/data/dataset.js

export default [
  {
    "id": "marie-curie",
    "name": "Marie Curie",
    "shortDescription": "Física y química, ganadora de dos Premios Nobel.",
    "description": "física y química de origen polaco y nacionalizada francesa, es una de las figuras más icónicas en la historia de la ciencia. Ganadora de dos premios Nobel (Física en 1903 y Química en 1911), Curie realizó investigaciones fundamentales sobre la radiactividad y el descubrimiento de los elementos radio y polonio. Su dedicación y valentía en la investigación científica, a pesar de los desafíos de la discriminación de género y los riesgos de la radiación, la convierten en un modelo a seguir para científicas de todo el mundo.",
    "imageUrl": "https://laboratoria-dataverse-talks.netlify.app/public/marie-curie.jpg",
    "facts": {
      "yearOfBirth": "1867",
      "yearOfDeath": "1934",
      "birthPlace": "Varsovia, Polonia",
      "mainField": "Física y Química"
    },
    "extraInfo": {
      "imageSource": "https://www.historyextra.com/period/first-world-war/life-of-the-week-marie-curie/"
    }
  },
]
```

* Funciones

Para reutilizar las funciones de filtrar,
ordenar y calcular de tu proyecto anterior
en este nuevo proyecto, crea una carpeta ```utils```
dentro de la carpeta ```src```. Dentro de la carpeta
```utils```, crea un archivo ```dataFunctions.js.``` En
este archivo, importa las funciones de filtrar,
ordenar y calcular de tu proyecto anterior.

```js
// src/utils/dataFunctions.js

export const filterByName = () => {
  return 'example';
};

export const orderByAZ = () => {
  return [];
};

export const calculateAge = () => {
  return [];
};
```

Consulta estos enlaces para obtener más información sobre cómo importar [módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules) y [funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)

* Test funciones

Para continuar con las migraciones, es necesario crear una carpeta ```test``` en la raíz del proyecto. Dentro de la carpeta ```test```, crea un archivo ```dataFunctions.spec.js```. En este archivo, copia tus tests de Dataverse y ajusta las importaciones para que funcionen correctamente.

``` js
// test/dataFunctions.spec.js

import { data } from '../src/data/dataset.js';
import { filterByName } from '../src/utils/dataFunctions.js';

console.log(data);

describe('filterByName', () => {

  it('returns `filterByName`', () => {
    expect(filterByName()).toBe('example');
  });
});
```

NOTA: En la carpeta test, considera tener un archivo de prueba (suite) por cada archivo javascript que desees probar.

* Visualizar el set de Datos

Una vez que las funciones se encuentran en dataFunctions.js junto con sus respectivas pruebas, podemos avanzar con la visualización del conjunto de datos. El objetivo es lograr que podamos ver el conjunto de datos de manera similar a Dataverse, pero dentro de la SPA.

Para lograr esto, te recomendamos que realices modificaciones en el archivo ```Home.js``` ubicado en la carpeta ```views```. Este archivo debe contener el código necesario para visualizar el conjunto de datos. Ten en cuenta que, en este caso, cada vista deberá retornar un elemento para que pueda ser renderizado por el router. Es probable que necesites adaptar el código de tu vista anterior para que modifique un nuevo elemento dentro de esta vista ```Home.js```. Si tienes dudas, puedes revisar nuevamente la guía del router y consultar a los coaches para obtener más claridad en este proceso.

``` js
// src/views/Home.js

import { data } from '../data/dataset.js';
import { filterByName } from '../utils/dataFunctions.js';

export function Home(props) {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>DataVerse</h1>
    ...
  `;
  return viewEl;
}
```

[👈Todos los hitos](../README.md#6-hitos)
