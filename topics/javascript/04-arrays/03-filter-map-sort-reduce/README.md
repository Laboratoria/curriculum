---
type: read
duration: 45min
---

# filter, map, sort y reduce

Ya vimos algunos de los métodos de uso más común de los arreglos,
pero `Array.prototype` provee mucho métodos más.

Para facilitarte un poco la vida, los hemos dividido de la siguiente manera:

- para agregar y quitar elementos: `push`, `pop`, `shift`, `unshift`, `slice`,
  `splice` y `concat`.
- para buscar elementos dentro del array: `indexOf`, `lastIndexOf`, `includes`,
  `find`, `findIndex` y `filter`.
- para transformar el array: `map`,`reduce`, `sort`, `reverse`, `split` y `join`.

Nosotros ahora nos enfocaremos en los 4 que consideramos un poco más utilizados:
`filter`, `map` `sort` y `reduce`.

Para conocer al detalle cada unos de estos métodos, visita la documentación en
[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array#M.C3.A9todos),

Como hasta ahora, apelamos a nuestra función para comparar arrays.

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

```

Y a un conjunto de datos que utilizaremos como ejemplo para nuestros ejemplos

```js
const inventors = [
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Caroline',
    last: 'Herschel',
    year: 1750,
    passed: 1848,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];

```

Ahora que tenemos todo, comencemos.

## `Array.prototype.filter`

`filter` nos permite obtener un subconjunto de los elementos
del array, que cumplan con cierta condición

```js
const deadBeforeSXX = inventors.filter(inventor => (inventor.passed < 1900));
console.assert(
  equal(deadBeforeSXX, [
    {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852,
    },
    {
      first: 'Caroline',
      last: 'Herschel',
      year: 1750,
      passed: 1848,
    },
  ]),
);

```

## `Array.prototype.map`

`map` nos permite visitar cada uno de los elementos del array,
recolectando en el proceso, un valor de retorno para cada
elemento visitado

Por ejemplo, supongamos que queremos un lista de nombre y apellido
de nuestro dataset

```js
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.assert(
  equal(fullNames, [
    'Ada Lovelace',
    'Lise Meitner',
    'Caroline Herschel',
    'Hanna Hammarström',
  ]),
);

```

O los años que vivió cada una

```js
const yearAlive = inventors.map(({
  first, last, passed, year,
}) => [`${first} ${last}`, passed - year]);
console.assert(
  equal(yearAlive, [
    ['Ada Lovelace', 37],
    ['Lise Meitner', 90],
    ['Caroline Herschel', 98],
    ['Hanna Hammarström', 80],
  ]),
);

```

## `Array.prototype.sort`

Ordena el array *in place*.

```js
let arr = [1, 2, 15];
arr.sort();
console.assert(equal(arr, [1, 15, 2]));

```

Si te fijas bien, aquí hay algo raro, y es que por defecto sort ordena el array,
convirtiendo a todos los elementos en `Strings`,
es por eso que `15` aparece antes que `2`.

Cómo lo solucionamos?

```js
const compareNumeric = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  /* if (a < b) */
  return -1;
};
arr = [1, 2, 15];
arr.sort(compareNumeric);
console.assert(
  equal(arr, [1, 2, 15]),
);

```

Veamos unos ejemplos más interesantes

### Ordenar de mayor a menor según año de nacimiento

```js
let ordered = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  }
  return -1;
});
console.assert(equal(
  ordered,
  [
    {
      first: 'Caroline',
      last: 'Herschel',
      year: 1750,
      passed: 1848,
    },
    {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852,
    },
    {
      first: 'Hanna',
      last: 'Hammarström',
      year: 1829,
      passed: 1909,
    },
    {
      first: 'Lise',
      last: 'Meitner',
      year: 1878,
      passed: 1968,
    },
  ],
));

```

Podríamos haber escrito la función de comparación con un operador
ternario y obtenido el mismo resultado.

```js
ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

```

### Ordenar según la cantidad de años vividos

```js
const moreYearsAlive = inventors.sort((a, b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > next ? -1 : 1;
});
console.assert(equal(
  moreYearsAlive,
  [
    {
      first: 'Caroline',
      last: 'Herschel',
      year: 1750,
      passed: 1848,
    },
    {
      first: 'Lise',
      last: 'Meitner',
      year: 1878,
      passed: 1968,
    },
    {
      first: 'Hanna',
      last: 'Hammarström',
      year: 1829,
      passed: 1909,
    },
    {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852,
    },
  ],
));

```

## `Array.prototype.reduce`

Cuando queremos iterar un array, usamos `forEach`.
Ahora bien, para hacer lo mismo pero recolectando una lista de valores,
con un valor de cada elemento, usamos `map`.

`reduce` es similar a map, pero lo usamos para iterar un array
y obtener un **único valor** que contenga un consolidado de
todos los elementos.

Su signatura es la siguiente:

```js
let initial = 0;
const value = arr.reduce((previousValue, item, index, array) => {
  /* aqui tu codigo */
}, initial);

```

Donde

- `item` -- es el elemento actual que estamos iterando

- `index` -- el índice actual

- `array` -- el array actual.

Hasta aquí todo mas o menos normal, pero se agrega un parámetro:

- `previousValue` -- que es el resultado de la llamada anterior de la función.
  En la primera llamada a la función, el valor de `previousValue` es `initial`.

Veamos un ejemplo simple: Sumar todos los elementos de un array

```js
arr = [1, 2, 3, 4, 5];
initial = 0;
const arrSum = arr.reduce((sum, current) => sum + current, initial);
console.assert(arrSum === 15);

```

Aqui usamos la variante más común de `reduce`, que sólo utiliza los dos primeros
argumentos.

Veamos más detalle que está sucediendo:

1. En la primera llamada, `sum` tiene el valor `initial` (el segundo argumento
   de `reduce`), que es `0`. Y `current` es el primer elemento del array, que es
   `1`. Entonces el resultado es `1`.
2. En la segunda llamada, `sum === 1`, y sumamos el segundo elemento del array
   (`2`) y devolvemos.
3. En la tercera llamada, `sum === 3` y sumamos al tercer elemento (`3`) ...

Y así sigue:

![image](https://user-images.githubusercontent.com/211721/40194646-c88004e4-59d0-11e8-8ba2-71e6afeef003.png)

Si lo pasamos a una tabla, donde cada fila representa una llamada a la función
sobre el próximo elemento del array

|   |`sum`|`current`|`result`|
|---|-----|---------|---------|
|primera llamada|`0`|`1`|`1`|
|segunda llamada|`1`|`2`|`3`|
|tercera llamada|`3`|`3`|`6`|
|cuarta llamada|`6`|`4`|`10`|
|quinta llamada|`10`|`5`|`15`|

Como se puede apreciar, el resultado de la llamada anterior, se convierte en el
primer parámetro de la próxima llamada.

Y para terminar, solo decir que `reduceRight` hace lo mismo, pero comenzando por
el final del array.

Veamos ahora un par de ejemplos:

### Calcular la cantidad de años vividos, de todas las inventoras sumadas

```js
const totalYears = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0,
);
console.assert(totalYears === 305);

```

### Sumar la cantidad de apariciones de cada medio de transporte

Cambiamos de dataset

```js
const transportationData = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk',
  'car', 'van', 'bike', 'walk', 'car', 'van',
  'car', 'truck',
];

const transportReduceFn = (obj, item) => {
  const result = {
    ...obj,
  };
  /* si es la primera vez que encuentro este medio de transporte */
  if (!obj[item]) {
    result[item] = 0; /* inicializo en 0 */
  }
  result[item] += 1;
  return result;
};

let transportation = transportationData.reduce(transportReduceFn, {});
console.assert(equal(
  transportation,
  {
    car: 5, truck: 3, bike: 2, walk: 2, van: 2,
  },
));

```

### Ahora lo mismo, pero agregando un nuevo medio de transporte (pogostick)

```js
transportationData.push('pogostick');
transportation = transportationData.reduce(transportReduceFn, {});
console.assert(equal(
  transportation,
  {
    car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1,
  },
));

```

***

En esta lectura hemos visto algunos ejemplos de métodos de arrays que siempre al
comienzo, pero que una vez que uno aprende a dominarlos, son super útiles.

## Lecturas complementarias

- [Array en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array methods en javascript.info](https://javascript.info/array-methods)
