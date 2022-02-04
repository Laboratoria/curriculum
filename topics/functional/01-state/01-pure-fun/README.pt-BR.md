# Funciones puras

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `30min`

***

Las funciones puras tienen aplicaciones en muchos ámbitos, entre ellos la
programación funcional. También facilitan la concurrencia, y como veremos en
siguientes etapas serán muy empleadas en aplicaciones basadas en React+Redux.

Anteriormente mencionamos que una función es básicamente un proceso que toma una
entrada o argumentos, y produce una salida o valor de retorno. También hemos
visto que las funciones se emplean con ciertos propósitos:

* *Manipulación de datos:* Transforma una serie de argumentos o entrada en un
  valor de retorno. Un ejemplo de esto sería hacer *flattening*<sup>1</sup> de
  un objeto muy anidado.
* *Procedimientos:* Una función puede ser llamada para realizar una serie de
  pasos (receta). **La secuencia es conocida como procedimiento** (primero haz
  esto, luego haz aquello), el estilo de programación bajo este estilo se
  denomina **programación por procedimientos**, la cual está enmarcada en la
  **programación imperativa**, donde se usan sentencias que modifican o mutan el
  estado del programa, de la misma forma en la que mandatos imperativos expresan
  comandos en nuestro lenguaje natural, un programa imperativo consiste en
  comandos que la computadora debe realizar. La programación imperativa se
  enfoca en describir *cómo* un programa opera, mientras que en la programación
  funcional nos enfocamos en *qué* debe realizar un programa sin especificar
  *cómo* dicho programa debe alcanzar el resultado.
* *Entrada/Salida:* Algunas funciones existen para comunicarse con otras partes
  o subsistemas, por ejemplo: la pantalla, almacenamiento, registro de
  operaciones en disco, operaciones a través de la red.

Una vez vistas las diversas aplicaciones de las funciones procedamos a dejar
claro que significa una *función pura*.

> Toda función que dados los mismos inputs siempre retorna lo mismo, y sin
> efectos secundarios, es una *función pura*.

En **programación funcional**, el comportamiento de las funciones depende de una
y solo una cosa: los argumentos pasados explícitamente a la función. Esto quiere
decir que si proporcionas los mismos datos como argumentos o entrada, la función
siempre debe producir el mismo valor de retorno. A esta propiedad se le conoce
como **transparencia referencial**.

Lo mencionado en el párrafo anterior, hace que en las funciones puras sea más
fácil apreciar todas las circunstancias que pueden presentarse, incluyendo
aquellos escenarios que resultan en errores. Escribir funciones que solo
dependen de sus argumentos para definir su comportamiento también facilita
replicar *bugs* o poner en práctica *Test-Driven Development* (TDD por sus
siglas en inglés).

Comencemos desarrollando nuestros casos de pruebas:

**lowercaser.test.js.**

```js
const lowerCaser = require('./lowercaser')

test('Should take an input string and returns it lowercased', () => {
  expect(lowerCaser('LOREM IPSUM')).toBe('lorem ipsum')
})
```

***

NOTA:

A lo largo del curso usaremos [Jest][] como *framework* para la ejecución de
pruebas unitarias. Puedes instalar **Jest** por medio de `npm` al ejecutar el
siguiente comando:

```sh
npm install --save-dev jest
```

O también puedes usar `yarn` al ejecutar:

```sh
yarn add --dev jest
```

Para correr las pruebas haremos:

```sh
yarn run jest -- fichero.test.js
```

***

Ahora, pasemos a implementar lo especificado en nuestros casos de pruebas:

**lowercaser.js.**

```js
const lowerCaser = input => input.toString().toLowerCase()

module.exports = lowerCaser
```

Una vez completada nuestra implementación inicial, corroboremos nuestro trabajo
por medio de la ejecución de las pruebas:

```sh
$ yarn run jest -- lowercaser.test.js

PASS  ./lowercaser.test.js
   ✓ Should take an input string and returns it lowercased (15ms)

   Test Suites: 1 passed, 1 total
   Tests:       1 passed, 1 total
   Snapshots:   0 total
   Time:        0.859s, estimated 1s
   Ran all test suites matching "lowercaser.test.js".
```

Parece que todo funciona como se espera. Continuemos.

## Dada la misma entrada, devuelve siempre la misma salida

Con nuestra función `lowerCaser()`, podemos reemplazar la llamada de la función
por el resultado, y el código tendrá el mismo significado `lowerCaser('LOREM
IPSUM')` siempre será lo mismo que `lorem ipsum` en su programa, sin importar el
contexto, cuántas veces lo llame o cuándo lo llame.

Pero no se puede decir lo mismo de todas las funciones. Algunas funciones se
basan en información distinta de los argumentos que se transmiten para producir
resultados. Considera este ejemplo:

```js
Math.random() // => 0.4011148700956255
Math.random() // => 0.8533405303023756
Math.random() // => 0.3550692005082965
```

A pesar de que no pasamos ningún argumento en ninguna de las llamadas a la
función, todos produjeron resultados diferentes, lo que significa que
`Math.random()` **no es una función pura**. `Math.random()` produce un nuevo
número aleatorio entre 0 y 1 cada vez que lo ejecutas, entonces es obvio que no
se podría simplemente reemplazarlo por `0.4011148700956255` sin cambiar el
significado del programa.

Eso produciría el mismo resultado cada vez que se ejecute el programa. Cuando le
pedimos a la computadora un número aleatorio, por lo general significa que
queremos un resultado diferente al que obtuvimos la última vez. ¿Cuál es el
sentido de un par de dados con los mismos números impresos en todas las caras? A
veces tenemos que preguntarle a la computadora por la hora actual. No vamos a
entrar en detalles de cómo funcionan las funciones de tiempo. Por ahora,
simplemente copia este código:

```js
const time = () => new Date().toLocaleTimeString()
time() // => "5:15:45 PM"
```

¿Qué sucedería si reemplazo la llamada de la función `time()` con la hora
actual? Siempre diría que es la misma hora: la hora con la cual la llamada a la
función se reemplazó. En otras palabras, solo podría producir la salida correcta
una vez al día, y solo si se ejecuta el programa en el momento exacto en que la
hora se reemplazó por la función.

Entonces, claramente, `time()` no es como la función `lowerCaser()`.

Una función solo es pura si, dada la misma entrada, siempre producirá la misma
salida. Tal vez recuerdes esta regla de la clase de álgebra: los mismos valores
de entrada se asignarán siempre al mismo valor de salida. Sin embargo, muchos
valores de entrada se pueden asignar al mismo valor de salida. Por ejemplo, la
siguiente función es pura:

```js
const highpass = (cutoff, value) => value >= cutoff;
```

Los mismos valores de entrada se asignarán siempre al mismo valor de salida:

```js
highpass(5, 5) // => true
highpass(5, 5) // => true
highpass(5, 5) // => true
```

Muchos valores de entrada tal vez se pueden asignar al mismo valor de salida:

```js
highpass(5, 123) // true
highpass(5, 6)   // true
highpass(5, 18)  // true
highpass(5, 1)   // false
highpass(5, 3)   // false
highpass(5, 4)   // false
```

## Efectos colaterales

En este punto cabe aclarar que las funciones puras no producen **efectos
colaterales** o *side-effects*, pues el propósito de vida de una función pura es
únicamente calcular el valor de retorno, solo eso y nada más.

En las ciencias de la computación, una función o expresión se dice que tiene
efectos colaterales si modifica algún estado fuera de su ámbito (*scope*), o si
tiene interacciones observables con la función que la invocó, o si modifica el
mundo exterior aparte de retornar el valor esperado. Por ejemplo, una función
particular podría modificar una variable global (estado fuera de su ámbito),
modificar uno de los argumentos mutables (interactuar con la función la invocó),
levantar una excepción, escribir datos a un fichero o llamar a otra función que
si tiene efectos colaterales. Ten en cuenta que ante la presencia de funciones
con efectos colaterales, el comportamiento de un programa podría depender de su
historia, esto quiere decir que el orden de evaluación importa. Por lo tanto, la
comprensión y análisis de una función con efectos colaterales requiere
conocimientos acerca de su contexto y su posible historia, lo cual hace más
difícil la corrección de errores. En la programación funcional, los efectos
colaterales se usan con moderación.

Veamos un ejemplo de efecto colateral y cómo podemos evitarlo.

Supongamos que deseamos crear una función que concatene dos *arrays* que pueden
contener elementos anidados, tratemos de emular el siguiente comportamiento:

**concat.test.js.**

```js
const concat = require('./concat')

test('should concatenate array on the right with array on the left', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const expected = [1, [2], 3, [4], 5, [6, 7], 8]

  expect(concat(left, right)).toEqual(expected)
})
```

Una implementación inicial puede ser la siguiente:

**concat.js.**

```js
const concat = (left, right) => {
  const result = left

  right.map(item => {
    result.push(item)
  })

  return result
}

module.exports = concat
```

> **Nota**
>
> Ten en cuenta que esta implementación es a modo de ejemplo, en realidad
> podríamos usar [Array.prototype.concat()][concat] directamente.

Comprobemos nuestro trabajo:

```sh
$ yarn run jest -- concat.test.js

 PASS  ./concat.test.js
   ✓ should concatenate the array on the right with the array on the left (3ms)

   Test Suites: 1 passed, 1 total
   Tests:       1 passed, 1 total
   Snapshots:   0 total
   Time:        0.67s, estimated 1s
   Ran all test suites matching "concat.test.js".
```

Todo parece indicar que nuestra función tiene un comportamiento correcto, ahora
agreguemos un caso de prueba para comprobar que no estamos alterando el contexto
externo:

**concat.test.js.**

```js
const concat = require('./concat')

test('should concatenate array on the right with array on the left', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const expected = [1, [2], 3, [4], 5, [6, 7], 8]

  expect(concat(left, right)).toEqual(expected)
})

test('should not mutate external context', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const backup = Object.assign([], left)

  concat(left, right)

  expect(left).toEqual(backup)
})
```

Al ejecutar las pruebas obtenemos lo siguiente:

```sh
$ yarn run jest -- concat.test.js
 FAIL  ./concat.test.js
  ● should not mutate external context

    expect(received).toEqual(expected)

    Expected value to equal:
      [1, [2], 3]
    Received:
      [1, [2], 3, [4], 5, [6, 7], 8]

  ...

  ✓ should concatenate the array on the right with the array on the left (4ms)
  ✕ should not mutate external context (6ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.011s
Ran all test suites matching "concat.test.js".
```

**Ouch!**, con esto se demuestra que nuestra **función no es pura**, pues
estamos alterando el contexto externo, lo cual es un tipo de efecto colateral.

El comportamiento anterior sucede porque los objetos o arreglos pasados a las
funciones como argumento se pasan por referencia, no por copia, lo que significa
que si una función muta una propiedad en un objeto o arreglo, supondría que
dicha mutación sería accesible desde afuera de la función. Las funciones puras
no deben alterar el estado externo.

Si bien el valor de retorno de nuestra función es el esperado, el problema con
la implementación actual es que hemos mutado un estado compartido. Imagina por
un momento que otras funciones pueden depender del estado del arreglo u objeto
asumiendo que su estado es el original (antes de llamar a nuestra función
`concat`), y ahora que hemos mutado ese estado compartido, tenemos que
preocuparnos por el impacto que tendrá dicho cambio en la lógica del programa si
cambiamos el orden en que se han llamado las funciones. Refactorizar el código
podría resultar en errores apareciendo aquí y allá, lo que podría arruinar la
lógica general de nuestra aplicación, y como resultado muchos clientes
disgustados.

Veamos ahora cómo podemos corregir esta situación:

**concat.js.**

```js
const concat = (left, right) => {
  const result = Object.assign([], left)

  right.map(item => {
    result.push(item)
  })

  return result
}

module.exports = concat
```

Ahora al ejecutar las pruebas obtenemos lo siguiente:

```sh
$ yarn run jest -- concat.test.js
 PASS  ./concat.test.js
  ✓ should concatenate the array on the right with the array on the left (5ms)
  ✓ should not mutate external context (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.977s
Ran all test suites matching "concat.test.js".
```

¿Recuerdas que antes habíamos mencionado que podíamos haber usado
`Array.prototype.concat` directamente?, pues veamos una simplificación del
código:

**concat.js.**

```js
const concat = (left, right) => {
  return left.concat(right)
}

module.exports = concat
```

Si ejecutas de nuevo las pruebas unitarias verás que cumplimos con todas las
condiciones.

***

NOTA: Es común usar métodos como `Array#slice`, `Array#map` o `Array#filter`
además de `Array#concat` para crear copias de arreglos. En **ES6** también
tenemos el *spread operator* que nos permite copiar las propiedades enumerables
de un arreglo u objeto de esta forma:

```js
const array = [1, 2, 3];
const arrayCopy = [...a]; // `b` es un nuevo arreglo con los elementos de `a`.

const obj = { foo: 'bar' };
const objCopy = {...obj};
```

***

## Beneficios

Una vez analizadas las funciones puras, volvamos a repasar los beneficios que
ofrecen, tal como vimos en la apertura de esta unidad:

* Toman ciertos argumentos como entrada y generan un valor de retorno que
  exclusivamente depende de los argumentos dados.
* Representan bloques de código reusable dentro de un programa.
* Promueven buenas prácticas de desarrollo como [DRY][]
  (*Don’t Repeat Yourself*) y [KISS][] (*Keep It Simple, Stupid*).
* Al no depender del contexto externo, son inmunes a toda clase de errores o
  *bugs* que tienen que ver con el estado mutable compartido.
* Su naturaleza independiente las hace excelentes candidatos para procesamiento
  concurrente a lo largo de muchos CPUs e incluso para la computación
  distribuida, lo cual las hace esenciales para la ejecución de tareas de
  cálculo científico y de uso intensivo de recursos.
* Su aislamiento facilita la refactorización y reorganización del código,
  haciendo tú código más adaptable y flexible a futuros cambios.
* Es mucho más sencillo el desarrollo de pruebas unitarias contra funciones
  puras.
* Las funciones puras representan la base de la programación funcional.

Por las razones antes mencionadas, recomendamos favorecer la implementación de
funciones puras. Por lo tanto, siempre que sea práctico implementar los
requerimientos de un programa usando funciones puras, debes darle preferencia
sobre otras opciones.

## Referencias

* Conrad Barski. 2010. Land of Lisp: Learn to Program in Lisp, One Game at a
  Time! (1st ed.). No Starch Press, San Francisco, CA, USA. Page 301.
* [Master the JavaScript Interview: What is a Pure Function?][eliot]. En Medium.
  Consultado el 11 de Julio de 2017
* [Side effect (computer science)](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
* [Imperative Programming](https://en.wikipedia.org/wiki/Imperative_programming)
* [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
* [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
* [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## Notas al pie

1. Algunas veces necesitamos aplanar árboles u objetos muy anidados que son
   resultado de una consulta o *query*, un patrón común es convertirlos en
   arreglos o *arrays* para luego poder aplicar operaciones como `filter()` o
   `map()` sobre ellos.

[Jest]: https://facebook.github.io/jest/
[concat]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/concat
[DRY]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[KISS]: https://en.wikipedia.org/wiki/KISS_principle
[eliot]: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976
