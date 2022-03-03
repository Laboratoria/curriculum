# Inmutabilitidad

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `30min`

***

La inmutabilidad es un principio fundamental en la programación funcional, y
también tiene ventajas que ofrecer a otros paradigmas como el orientado a
objetos. En esta lección mostraremos qué es la inmutabilidad, cómo podemos
aprovechar este concepto en JavaScript, y por qué es tan útil.

## ¿Qué es la inmutabilidad?

La definición de mutabilidad indica que algo está sujeto a cambios o
modificaciones. En programación, cuando decimos que un objeto es mutable nos
referimos a que está permitido modificar el estado de dicho objeto a lo largo
del tiempo. Un valor **inmutable** indica exactamente lo opuesto, después que
dicho valor es creado, no puede ser cambiado o alterado nunca.

Esto parece ser un poco extraño, pero recordemos que muchos valores que usamos
todo el tiempo en realidad son inmutables.

Algunos tipos de datos en JavaScript son inmutables por omisión. Las cadenas de
caracteres o _strings_ son un ejemplo de un tipo de dato que no puede ser
cambiado.

**strings.test.js.**

```js
test('should not change the value of the original string', () => {
  const lesson = 'immutability'

  expect(lesson.toUpperCase()).toBe('IMMUTABILITY')
  expect(lesson).toBe('immutability')
})
```

Si ejecutamos las pruebas anteriores veremos que el valor original de la cadena
(`immutability`) no es modificado tras la operación ejecutada:

```sh
$ yarn run jest strings.test.js
PASS  ./strings.test.js
✓ should not change the value of the original string (5ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        0.941s, estimated 1s
  Ran all test suites matching "strings.test.js".
  ✨  Done in 1.56s.
```

De hecho, ningún método sobre cadenas de caracteres puede cambiar la cadena
sobre la que opera, todos ellos retornan nuevas cadenas de caracteres. La razón
tras esto radica en que las cadenas de caracteres son inmutables. Por lo tanto,
su valor no puede cambiar, nosotros solo podemos crear nuevos _strings_.

Las cadenas de caracteres no son los únicos valores inmutables dentro de
JavaScript. Los números también son inmutables. ¿Te puedes imaginar un entorno
en donde al evaluar la expresión 2 + 3 cambie automáticamente el significado del
número 2?, suena absurdo, ¿verdad?. Sin embargo, solemos modificar nuestros
objetos y arreglos todo el tiempo!

## Inmutabilidad y su relación con la recursividad

Más adelante hablaremos con mayor detalle sobre recursividad. Sin embargo, vale
acotar que es un patrón que se suele ver en la programación funcional.

En algunos lenguajes funcionales no puedes escribir la siguiente función
haciendo uso de mutación local:

```js
const range = require('lodash.range')

const summ = array => {
  let result = 0
  const size = array.length

  for (let i = 0; i < size; i++) {
    result += array[i]
  }

  return result
}

summ(range(11))
// => 55
```

El problema es que la función anterior modifica el estado de dos variables
locales. Sin embargo, en lenguajes funcionales tradicionales, las variables
locales no son _variables_ en sí, son inmutables. En este caso, la única vía
para modificar el valor de una variable local es por medio del _call stack_, y
esto es lo que precisamente logramos con la recursión. Veamos una
reimplementación de la función previa usando recursividad:

```js
const range = require('lodash.range')
const isEmpty = require('lodash.isempty')

const summRec = (array, seed = 0) => {
  const [head, ...tail] = array
  return isEmpty(array) ? seed : summRec(tail, head + seed)
}

summRec([])
// => 0

summRec(range(11))
// => 55
```

Cuando usamos recursividad, el cambio de estado es modelado por medio de los
argumentos pasados en la función recursiva. JavaScript permite el manejo del
estado de manera recursiva, pero tiene ciertos límites que veremos más adelante.
Lo importante es hacer notar que existe cierta relación entre la recursividad y
la inmutabilidad de las variables locales.

## En JavaScript, los tipos de datos mutables abundan

Ya esto lo hemos mencionado, pero vale la pena ahondar en ello:

```js
let initial = ['hello']
let greeting = initial.push('world')
```

Podríamos asumir que el resultado sería el siguiente:

```js
initial = ['hello']
greeting = ['hello', 'world']
```

Parece lógico, ¿no?, pues resulta que en realidad el resultado es el siguiente:

```js
initial = ['hello', 'world']
greeting = 2
```

El método [Array.prototype.push()][push] agrega uno o más elementos al final del
array _in situ_ y retorna la _longitud_ del array. Es decir, a diferencia de los
métodos sobre las cadenas de caracteres, en este caso observamos que se esta
mutando la variable (`arr`) original.

Ahora imagina por un momento que tenemos un tipo de dato denominado
`ImmutableArray` y tiene un comportamiento similar a las cadenas de caracteres
y números:

```js
const initial = new ImmutableArray(['hello'])
const greeting = initial.push('world')

initial.toArray() // => ['hello']
greeting.toArray() // => ['hello', 'world']
```

También imagina que tenemos un tipo de dato mapa inmutable, en donde el
establecimiento de nuevas propiedades sobre el objeto o mapa en realidad no
establece el valor _in situ_, en vez de ello devuelve un nuevo objeto con los
cambios deseados:

```js
const firstOrder = new ImmutableMap({name: 'Julia', details: 'espresso macchiato'})
const newOrder = firstOrder.set('details': 'doppio')

firstOrder.toObject() // => {name: 'Julia', details: 'espresso macchiato'}
newOrder.toObject() // => {name: 'Julia', details: 'doppio'}
```

Al igual que las operaciones con cadenas de caracteres, el cambio de la orden
de Julia, no implica que originalmente no haya solicitado un _espresso
macchiato_.

Si quisieramos incluir este tipo de estructuras de datos en nuestras
aplicaciones al menos por ahora debemos recurrir a bibliotecas externas, por
ejemplo, haciendo uso de [immutable.js][] tendríamos lo siguiente:

```js
const Map = require('immutable')
const firstOrder = Map({name: 'Julia', details: 'espresso macchiato'})
const newOrder = firstOrder.set('details': 'doppio')

firstOrder.get('details') // => 'espresso macchiato'
newOrder.get('details') // => 'doppio'
```

***

## Lecturas complementarias

### Object.freeze() y clone

Dado que JavaScript pasa _arrays_ y objetos por referencia, nada en realidad es
inmutable en estos casos. También, dado que los campos o propiedades de los
objetos en JavaScrit son siempre visibles, no hay una manera sencilla de
hacerlos inmutables. Existen maneras de ocultar datos usando encapsulación para
evitar cambios accidentales, pero en líneas generales, todos los objetos en
JavaScrit son mutables, a menos que sean congelados.

Versiones recientes de JavaScript proveen el método `Object#freeze`, que dado un
objeto o _array_, causará que las siguientes mutaciones fallen. En el caso de
estar usando el modo estricto, la falla generará una excepción `TypeError`, de
lo contrario, cualquier mutación fallará silenciosamente.

El método `freeze` funciona como sigue a continuación:

```js
let a = [1, 2, 3]
a[1] = 42
a // => [1, 42, 3]

Object.freeze(a)
```

Un _array_ normal es mutable por omisión, pero después de llamar a
`Object#freeze`, lo que ocurre es lo siguiente:

```js
a[1] = 108
a // => [1, 42, 3]
```

Esto es, la mutación que se intentó hacer sobre el _array_ no tuvo efecto.
También podemos hacer uso del método `Object#isFrozen` para verificar si el
_array_ está congelado:

```js
Object.isFrozen(a)
// => true
```

Existen dos problemas al usar `Object#freeze` para asegurar inmutabilidad.

* A menos que tengas completo control de la base de código del proyecto, algunos
  errores podrían ocurrir.
* El método `Object#freeze` es _shallow_.

En el primer punto podríamos argumentar que otras compañeras de trabajo podrían
asumir por ejemplo que el objeto o _array_ es mutable, cuando no es así. También
podríamos considerar que una biblioteca que uses explota la mutabilidad de los
objetos o _arrays_. Por lo tanto, congelar objetos y pasarlos a otras APIs
arbitrarias podría ser causa de problemas.

Ahora bien, el otro argumento en contra de `Object#freeze` es que es una
operación _shallow_. Esto es, `freeze` solo aplicará en el nivel superior de la
estructura de datos y no recorrerá niveles anidados. Por ejemplo:

```js
let x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}]

Object.freeze(x)

x[0] = ''
x
// => [{a: [1, 2, 3], b: 42}, {c: {d: []}}]
```

El intento de modificación del _array_ falla. Sin embargo, realizar una mutación
de una porción anidada dentro de dicho arreglo es posible:

```js
x[1]['c']['d'] = 100000
x
// => [ { a: [ 1, 2, 3 ], b: 42 }, { c: { d: 100000 } } ]
```

Para aplicar un congelamiento profundo sobre un objecto, tendremos que usar
recursión para recorrer la estructura de datos:

```js
const _ = require('lodash')

const deepFreeze = obj => {
  if (!Object.isFrozen(obj)) {
    Object.freeze(obj)
  }

  for (const key in obj) {
    if (!obj.hasOwnProperty(key) || !_.isObject(obj[key])) {
      continue
    }
    deepFreeze(obj[key])
  }
}
```

Ahora, podemos usar `deepFreeze` y esperar el comportamiento adecuado:

```js
const x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}]
deepFreeze(x)
x[0] = null
x
// => [ { a: [ 1, 2, 3 ], b: 42 }, { c: { d: [] } } ]
x[1]['c']['d'] = 100000
x
// => [ { a: [ 1, 2, 3 ], b: 42 }, { c: { d: [] } } ]
```

Sin embargo, es necesario considerar de nuevo que el congelamiento de objetos
puede generar errores al interactuar con APIs terceras. Por lo que nuestras
opciones se ven reducidas a las siguientes:

* Usar `_.clone` si conoces de antemano que un _shallow_ copy es apropiado
* Crear `deepClone` (similar a la función `deepFreeze`) para hacer copias de
  estructuras de datos anidadas
* Construir tú código basado en funciones puras
* Usar bibliotecas externas que te permitan manejar estructuras de datos
  inmutables

### Acerca del rendimiento

Puedes pensar que al usar estructuras de datos inmutables estás afectando
sobremanera el rendimiento de tú aplicación y puede que tengas razón. Siempre
que se ejecute alguna operación que modifica al objeto inmutable, se
necesitará crear una nueva instancia copiando los valores existentes y
agregando las nuevas propiedades necesarias. Esto ciertamente pueden ser
operaciones costosas a nivel computacional que simplemente mutar un simple
objeto.

Sin embargo, al saber que un objeto inmutable nunca cambiará, dichas
estructuras pueden ser implementadas usando una estrategía denominada
_structural sharing_, lo cual resulta ser menos costoso en el uso de la memoria
de lo que imaginas.  Por supuesto, no será tan rápido si lo comparamos con los
_arrays_ y _objetos_ nativos, pero los beneficios que brindan las estructuras
de datos inmutables pueden ser mayores. En la practica, es posible que el uso de
estructuras de datos inmutables mejore el rendimiento global de tú aplicación,
sin importar que ciertas operaciones particulares sean más costosas por el tipo
de operaciones que realizan.

### Seguimiento de cambios

Las operaciones a nivel de DOM, o determinar qué componentes de la vista deben
ser actualizados dado ciertos cambios en el modelo, suelen ser costosas por lo
que minimizar el número de operaciones necesarias para la actualizar la UI
siempre es bienvenido.

Una manera eficiente de reducir el número de operaciones necesarias para
actualizar la UI es utilizar estructuras de datos que cumplan con las siguientes
condiciones:

* Inmutables: Una vez creadas, una colección no puede ser alterada en ningún
  otro momento.
* Persistente: Nuevas colecciones pueden ser creadas a partir de previas, (ej.
  por medio de operaciones como `set`). La colección original seguirá siendo
  válida incluso después de la creación de la nueva colección.
* _structural sharing_: Nuevas colecciones son creadas usando tanto como sea
  posible la misma estructura de la colección original, reduciendo la copia al
  mínimo para mejorar el rendimiento.

La inmutabilidad hace que el seguimiento de cambios sea barato. Un cambio
siempre resultará en un nuevo objeto, por lo que solo es necesario verificar si
la referencia al objeto ha cambiado. Por ejemplo, en este ejemplo de código
regular JavaScript:

```js
const x = { foo: 'bar' };
const y = x;
y.foo = 'baz';
x === y; // => true
```

Sin embargo, `y` fue editada, dado que es una referencia al mismo objeto `x`,
esta comparación retorna `true`. Podemos escribir código similar con
immutable.js:

```js
const SomeRecord = Immutable.Record({ foo: null });
const x = new SomeRecord({ foo: 'bar' });
const y = x.set('foo', 'baz');
const z = x.set('foo', 'bar');
x === y; // => false
x === z; // => true
```

En este caso, dado que una referencia se retorna al realizar una mutación sobre
`x`, podemos utilizar el chequeo de igualdad (`x === y`) para verificar que un
nuevo valor se ha almacenado en `y` y es diferente al original almacenado en
`x`. Esto puede implicar un incremento significativo en el rendimiento.

## Referencias

* [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
* [Immutability in JavaScript](https://www.sitepoint.com/immutability-javascript/)
* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do) de
  Michael Fogus
* [React: Optimizing Performance](https://facebook.github.io/react/docs/optimizing-performance.html)

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[immutable.js]: http://facebook.github.io/immutable-js/
