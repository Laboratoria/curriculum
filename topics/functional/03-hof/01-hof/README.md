---
type: read
duration: 30min
---

# Funciones de orden superior (Higher Order Functions)

Una función de orden superior se adhiere a una definición muy específica:

* Toma una función como argumento, o ...
* Devuelve una función como resultado

Veamos entonces algunos ejemplos de funciones que toman otras funciones como
argumento, verás que este patrón es palpable en el estilo de programación
funcional.

## Funciones que toman otras funciones

Ya has visto un montón de funciones que toman otras funciones, quizá las más
prominentes hasta ahora son `map`, `reduce`, y `filter`. Todas estas funciones
se adhieren a la definición de orden superior ya que reciben una función como
argumento. Ahora exploremos este concepto en más detalle y veamos su importancia
en el contexto de la programación funcional.

### Pensando en pasar funciones: `max`, `finder` y `best`

Empecemos con un ejemplo. Muchos lenguajes de programación incluyen una función
llamada algo como `max`, que se utiliza para encontrar el valor más grande
(generalmente de un número) en una lista o una matriz.

De hecho, módulos populares como [Lodash](https://lodash.com) o
[Ramda](http://ramdajs.com/) incluyen una función que realiza esta misma tarea:

```js
const _ = require('lodash')

_.max([1, 2, 3, 4, 5]);
// => 5

_.max([1, 2, 3, 4.75, 4.5])
// => 4.75

Math.max.apply(null, [1, 2, 3, 4.75, 4.5])
// => 4.75

Math.max(1, 2, 3, 4.75, 4.5)
// => 4.75
```

No hay nada sorprendente en ninguno de los resultados, pero hay una limitación
particular en este caso de uso. Es decir, ¿qué pasa si queremos encontrar el
valor máximo en una matriz de objetos en lugar de números? Afortunadamente,
`_.max` es una función de orden superior que toma un segundo argumento opcional.
Este segundo argumento es, como habrás adivinado, una función que se utiliza
para generar un valor numérico a partir del objeto que se le suministra. Por
ejemplo:

```js
const people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}]

_.max(people, p => p.age)
// => { name: 'Fred', age: 65 }
```

Esta es una manera muy útil de construir funciones porque en lugar de enfocarse
en la comparación de valores numéricos, `_.max` proporciona una forma arbitraria
de comparar objetos. Sin embargo, esta función sigue siendo algo limitada ya que
la comparación se hace a través del operador _mayor que_ (`>`).

Creemos una nueva función llamada `finder` que tome dos funciones: una que
construya el valor comparable y la otra que compare dos valores y retorne el
"mejor" valor de los dos.

```js
const finder = (valueFun, bestFun, coll) =>
  _.reduce(coll, (best, current) => {
    const bestValue = valueFun(best)
    const currentValue = valueFun(current)
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current
  })
```

Ahora, usando la función `finder`, la operación `_.max` se puede
simular de la siguiente forma:

```js
finder(_.identity, Math.max, [1, 2, 3, 4, 5])
// => 5
```

En este último ejemplo nota el uso de la función `_.identity`, dicha función
sólo toma un valor y lo devuelve. Parece poco inútil, ¿verdad?, pero en el
ámbito de la programación funcional es necesario pensar en términos de
funciones.

En cualquier caso, ahora con `finder` podemos usar diferentes funciones para
adaptarnos a cada caso:

```js
const plucker = field => obj => obj && obj[field]

finder(plucker('age'), Math.max, people)
// => { name: 'Fred', age: 65 }

finder(plucker('name'), (x, y) => (x.charAt(0) === "L") ? x : y, people)
// => { name: 'Lucy', age: 36 }
```

La última función filtra nombres que comiencen con la letra `L`.

La implementación de `finder` es corta y funciona como esperamos, pero duplica
alguna lógica para aportar máxima flexibilidad. Observa una similitud en la
implementación de `finder` y la lógica de comparación para la función de primera
clase de _best-value_:

```js
// en finder
return (bestValue === bestFun(bestValue, currentValue)) ? best : current

// en la función best-value
return (x.charAt(0) === "L") ? x : y
```

Nota que la lógica es exactamente la misma en ambos casos. Es decir, ambos
algoritmos están devolviendo un valor u otro basado en cierta condición. La
implementación de `finder` puede ser ajustada haciendo dos suposiciones:

* La función _best-value_ devuelve `true` si el primer argumento es "mejor" que
  el segundo argumento
* Que la función _best-value_ sabe cómo "descubrir" sus argumentos

Teniendo en cuenta estas suposiciones, se logra la siguiente implementación:

```js
const best = (fun, coll) => _.reduce(coll, (x, y) => fun(x, y) ? x : y)

best((x, y) => x > y, [1, 2, 3, 4, 5])
// => 5
```

Con la lógica duplicada eliminada, ahora tenemos una solución más elegante. De
hecho, el ejemplo anterior muestra una vez más que el patrón
`best((x, y) => x > y, ...)` proporciona la misma funcionalidad que `_.max` o
incluso el `Math.max.apply(null, [1, 2, 3, 4, 5])`. Los programadores
funcionales tienden a capturar patrones como éste para crear funciones útiles.

## Funciones que devuelven otras funciones

Ya hemos visto funciones que retornan otras funciones, la más reciente ha sido
`plucker`. Como es de suponer, todas estas funciones son funciones de orden
superior. Ahora hablaremos más profundamente sobre las funciones de orden
superior que devuelven (y a veces también toman) funciones y cierres/closures.
Para empezar, definamos `repeatedly`, una función que repite un cálculo
computacional dado por otra función cierto número de veces.

```js
const repeatedly = (times, fun) => _.map(_.range(times), fun)
```

Utilicemos una función que ignore sus argumentos y en su lugar devuelve una
constante y con ella alimentemos a `repeatedly`:

```js
repeatedly(3, () => "Odelay!")
// => ["Odelay!", "Odelay!", "Odelay!"]
```

El uso de una función que devuelve una constante es tan útil que es casi un
patrón de diseño para la programación funcional y a menudo se llama simplemente
`k`. Sin embargo, en aras de la claridad, lo llamaremos `always`; Se implementa
de la siguiente manera:

```js
const always = value => () => value
```

La operación `always` es útil para ilustrar algunos puntos sobre
closures/cierres. Primero, un cierre captura un solo valor (o referencia) y
devuelve repetidamente el mismo valor:

```js
let f = always(function(){})

f() === f()
// => true
```

Debido a que la función `always` produce un valor único, se puede ver que desde
una invocación de `always` a otra, la función capturada vinculada a `value` es
siempre la misma.

Cualquier función creada con `function` devolverá una instancia única,
independientemente del contenido de su cuerpo. El uso de `(function () {})` es
una forma rápida de garantizar que se generan valores únicos. Teniendo esto en
mente, una segunda nota importante acerca de los cierres es que cada nuevo
cierre captura un valor diferente que todos los demás:

```js
let g = always(function(){})

f() === g()
// => false
```

Mantener estas dos reglas en mente al usar closures/cierres ayudará a evitar la
confusión.

Continuemos con el ejemplo y reemplacemos la función anónima que usamos
previamente con `always`:

```js
repeatedly(3, always("Odelay!"))
// => ["Odelay!", "Odelay!", "Odelay!"]
```

La función `always` es lo que se conoce como un combinador. Esta lección no se
centrará en gran medida en los combinadores, aunque verás que se utilizan en
bases de código construido en un estilo funcional.

Antes de seguir adelante, mostraremos la implementación de otra función que
retorna otra función, `invoker`, que toma un método y devuelve una función que
invocará ese método en cualquier objeto dado. Observalo a continuación:

```js
// Helpers
const existy = x => x != null
const truthy = x => (x !== false) && existy(x)
const doWhen = (cond, action) => truthy(cond) ? action() : undefined

const fail = thing => {
  throw new Error(thing)
}

const invoker = (name, method) =>
  (target, ...args) => {
    if (!existy(target)) {
      fail("Must provide a target")
    }

    const targetMethod = target[name]

    return doWhen((existy(targetMethod) && method === targetMethod), () =>
      targetMethod.apply(target, args)
   )
  }
```

La forma de `invoker` es muy similar a `always`, es decir, es una función que
devuelve una función que utiliza un argumento original, `method`, durante una
invocación posterior. La función devuelta en este caso es un closure/cierre.
Sin embargo, en lugar de devolver una constante, `invoker` realiza alguna
acción especializada basada en el valor de la llamada original. El uso del
`invoker` es el siguiente:

```js
const rev = invoker('reverse', Array.prototype.reverse)

_.map([[1, 2, 3]], rev)
// => [[3, 2, 1]]
```

Si bien es perfectamente legítimo invocar directamente un método sobre una
instancia, en estilo funcional preferimos las funciones que se centran en la
aplicación de argumentos.

## Referencias

* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do) de
  Michael Fogus
