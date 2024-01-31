# **HITO 2:** Visualización de datos

La división del código en funciones pequeñas facilita su
reutilización en proyectos distintos.
El objetivo de este hito es que Dataverse
funcione al 100% dentro de tu SPA,
incluyendo las funciones de filtrar,
ordenar y calcular.

## Tareas de este hito

- [Migración del set de datos de Dataverse](#migración-del-set-de-datos-de-dataverse)
- [Reutilización de Funciones de Dataverse](#reutilización-de-funciones-de-dataverse)
- [Configuración de pruebas de funciones migradas](#configuración-de-pruebas-de-funciones-migradas)
- [Visualizar el set de Datos](#visualizar-el-set-de-datos)

### Migración del set de datos de Dataverse

Crea una carpeta llamada `data` dentro de `src`.
En dicha carpeta, crea un archivo `dataset.js` y
copia tu set de datos de en ese archivo.

``` js
// src/data/dataset.js

export default [
  {
    "id": "marie-curie",
    "name": "Marie Curie",
    "shortDescription": "Física y química, ganadora de dos Premios Nobel.",
    "description": "física y química ...",
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

### Reutilización de Funciones de Dataverse

Vamos a reutilizar las funciones de filtrar, ordenar y
calcular de tu proyecto anterior en este nuevo proyecto.
Para ello, crea un nuevo archivo en la siguiente ruta:
`src/lib/dataFunctions.js` y copia las funciones mencionadas
en ese archivo. Si aún no existe, deberás crear una carpeta llamada
`lib` dentro de la carpeta `src` (src/lib).

>[!TIP]
> Regresa al README principal tantas veces como sea necesario.
> [5. Consideraciones técnicas](../README.md#5-consideraciones-técnicas)

Ejemplo:

```js
// src/lib/dataFunctions.js

export const filterData = (data, filterBy, value) => {
  return 'example';
};

export const sortData = (data, sortBy, sortOrder) => {
  return [];
};

export const computeStats = (data) => {
  return [];
};
```

>[!TIP]
>Consulta estos enlaces para obtener más información sobre cómo importar
>[módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
>y [funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)

### Configuración de pruebas de funciones migradas

Para continuar con las migraciones, es necesario crear una
carpeta `test` en la
raíz del proyecto. Dentro de la carpeta `test`, crea un archivo
`dataFunctions.spec.js`. En este archivo, copia tus tests de Dataverse
y ajusta las importaciones para que funcionen correctamente.

``` js
// test/dataFunctions.spec.js

import { data } from '../src/data/dataset.js';
import { filterData } from '../src/lib/dataFunctions.js';

console.log(data);

describe('filterData', () => {

  it('returns `filterData`', () => {
    expect(filterData()).toBe('example');
  });
});
```

> [!TIP]
> En la carpeta test, considera tener un archivo de prueba
(suite) por cada archivo javascript que desees probar.

### Visualizar el set de Datos

Una vez que las funciones se encuentran en `dataFunctions.js`
junto con sus respectivas pruebas,
podemos avanzar con la visualización del conjunto de datos.
El objetivo es lograr que podamos ver
el conjunto de datos de manera similar a Dataverse, pero dentro de la SPA.

Para lograr esto, te recomendamos que realices modificaciones
en el archivo `Home.js` ubicado en la carpeta `views`.
Este archivo debe contener el código necesario para
visualizar el conjunto de datos. Ten en cuenta que,
en este caso, cada vista deberá retornar
un elemento para que pueda ser renderizado por el router.
Es probable que necesites adaptar el
código de tu vista anterior para que modifique un nuevo elemento
dentro de esta vista `Home.js`.
Si tienes dudas, puedes revisar nuevamente la
[guía del router](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md)
y consultar a los coaches para obtener
más claridad en este proceso.

``` js
// src/views/Home.js

import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

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
