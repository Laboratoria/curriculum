---
type: read
duration: 30min
---

# Aplicando curry en JavaScript funcional

La técnica de definir funciones atadas a múltiples parámetros como una serie de
funciones anidadas que solo esperan un parámetro fue popularizada por el
matemático [Haskell Curry][], aunque inicialmente observada por [Frege][] en
1893, a dicha cadena de funciones anidadas se les llama funciones curry o
_curried functions_.

## ¿Qué es _currying_?

En pocas palabras, _currying_ es una técnica que traduce la evaluación de una
función que toma múltiples argumentos en una evaluación de una secuencia de
funciones, cada una de funciones de la secuencia espera un único argumento.
_Currying_ está relacionado con el concepto de [aplicación
parcial][partial-application], pero no es lo mismo.

Una función curry es una que retorna progresivamente una función más específica
por cada uno de los argumentos dados hasta que ya no sean necesarios más
parámetros. Una función parcialmente aplicada, por otra parte, es una función
que es "parcialmente" ejecutada y está lista para su inmediata ejecución una vez
dado el resto de los parámetros esperados.

El _currying_ es elemental en la mayoría de los lenguajes de programación
funcional, por ejemplo Haskell o Scala. A pesar que JavaScript ofrece soporte
para algunas características funcionales, al menos en las versiones actuales, el
_currying_ no es una de ellas. Sin embargo, podemos _emular_ este patrón con las
características actuales del lenguaje.

Para darte una idea de cómo este concepto podría funcionar, vamos a crear
nuestra primera función _curry_ en JavaScript, utilizando la sintaxis familiar
para construir la funcionalidad _currying_ que queremos. Como ejemplo,
imaginemos una función que salude a alguien por su nombre. Todos sabemos cómo
crear una función simple de saludo que toma un nombre y un saludo, y registra el
saludo con el nombre:

```js
const greet = (greeting, name) => `${greeting}, ${name}`

test('Should say Hello', () => {
  expect(greet('Hello', 'Heidi')).toBe('Hello, Heidi')
})
```

Esta función requiere que el nombre y el saludo se pasen como argumentos para
que funcione correctamente. Pero podríamos reescribir la función usando
_currying_ anidado simple, de modo que la función básica sólo requiera un
saludo, y devuelve otra función que toma el nombre de la persona que queremos
saludar.

## Nuestro primer _curry_

```js
const greetCurried = greeting => name => `${greeting}, ${name}`
```

Este pequeño ajuste a la forma en que escribimos la función anterior nos permite
crear una nueva función para cualquier tipo de saludo, y pasar a esa nueva
función el nombre de la persona que queremos saludar:

```js
test('Should allow to reuse functions', () => {
  const greetHello = greetCurried('Hello')

  expect(greetHello('Heidi')).toBe('Hello, Heidi')
  expect(greetHello('Eddie')).toBe('Hello, Eddie')
})
```

También podemos llamar a la función en modo _curry_ original directamente,
simplemente pasando cada uno de los parámetros en un conjunto separado de
paréntesis, uno después del otro:

```js
test('Should work with all the parameters', () => {
  expect(greetCurried('Hi there')('Howard')).toBe('Hi there, Howard')
})
```

## Apliquemos _curry_ a todo

Lo bueno es que ahora que hemos aprendido a modificar nuestra función
tradicional para usar este enfoque para manejar los argumentos, podemos hacerlo
con tantos argumentos como queramos:

```js
const greetDeeplyCurried = greeting =>
  separator =>
    emphasis =>
      name =>
        `${greeting}${separator}${name}${emphasis}`
```

Tenemos la misma flexibilidad con cuatro argumentos que con dos. No importa lo
lejos que vaya el anidamiento, podemos crear nuevas funciones personalizadas
para saludar a tantas personas como escojamos de tantas maneras como nos
convenga:

```js
test('Should allow nested calls', () => {
  const greetAwkwardly = greetDeeplyCurried('Hello')('...')('?')

  expect(greetAwkwardly('Heidi')).toBe('Hello...Heidi?')
  expect(greetAwkwardly('Eddie')).toBe('Hello...Eddie?')
})
```

Además, podemos pasar tantos parámetros como quisiéramos al crear variaciones
personalizadas de nuestra función _curry_ original, creando nuevas funciones que
son capaces de tomar el número apropiado de parámetros adicionales, cada uno se
pasa por separado en su propio conjunto de paréntesis:

```js
test('Other variations', () => {
  const sayHello = greetDeeplyCurried('Hello')(', ')

  expect(sayHello('.')('Heidi')).toBe('Hello, Heidi.')
  expect(sayHello('.')('Eddie')).toBe('Hello, Eddie.')
```

Y se pueden definir variaciones subordinadas:

```js
  const askHello = sayHello('?')

  expect(askHello('Heidi')).toBe('Hello, Heidi?')
  expect(askHello('Eddie')).toBe('Hello, Eddie?')
})
```

## Aplicando _curry_ a funciones tradicionales

Puedes ver lo poderoso que es este enfoque, especialmente si necesitas crear
muchas funciones personalizadas muy detalladas. El único problema es la
sintaxis, pues a medida que construyes estas funciones con _curry_, debes
mantener las funciones devueltas anidadas, y llamarlas con nuevas funciones que
requieran varios conjuntos de paréntesis, cada uno conteniendo su propio
argumento aislado. Se puede poner difícil y enredado.

Antes de abordar la implementación de nuestra función _curry_, consideremos por
ejemplo que para toda función `f(x, y)`, existe una función `f'` tal que
`f'(x)` es una función que puede ser aplicada a `y` que obtenga
`(f'(x))(y) = f(x, y)`.

La función `f'` del ejemplo anterior es llamada forma _curried_ de la función.
Desde una perspectiva de programación funcional, _currying_ puede ser descrita
por la función: `curry : ((a, b) -> c) -> (a -> b -> c)`

Ahora bien, un enfoque es crear una **función de orden superior** (_Higher
Order Function_ en inglés) que tome como argumento una función existente que
fue escrita sin todas las devoluciones anidadas (_uncurried form_). Nuestra
función de orden superior debe retornar otra función que espera un solo
argumento,...

```js
const curryIt = f => x => {
  // ...
}
```

Luego que se suministra dicho argumento se procede a verificar si el número de
argumentos esperados (`Function.length`) por la función _uncurried_ es igual o
menor a 1, de ser así ejecuta dicha función, esta condición particular también
nos servirá como condición de parada en nuestra llamada recursiva.

```js
const curryIt = f => x => {
  if (f.length <= 1) {
    f(x)
  } else {
    // ...
  }
}
```

En cambio, si el número de parámetros esperados es mayor a 1 debemos recurrir a
la recursión y aplicar de nuevo nuestra función de orden superior, en este
último caso pasaremos como argumento una nueva función equivalente, por medio
de `Function.prototype.bind()`, a la función _uncurried_ excepto por su
parámetro inicial. Algo similar a los siguiente:

```js
// función uncurried
const greet = (greeting, name) => `${greeting}, ${name}`
// función equivalente a excepción del argumento inicial
const greetWithGreeting = greet.bind(null, 'Hello') // [Function: bound greet]
greetWithGreeting('Heidi')
// => 'Hello, Heidi'
```

Sin mayor preámbulo veamos el resultado final de nuestra función `curryIt`:

```js
const curryIt = f => x => f.length <= 1 ? f(x) : curryIt(f.bind(null, x))
```

Para usar esto, le pasamos una referencia a una función que toma cualquier
número de argumentos, junto con tantos de los argumentos como queremos
pre-poblar. Lo que recuperamos es una función que está a la espera de los
argumentos restantes:

```js
const greeter = (greeting, separator, emphasis, name) =>
  `${greeting}${separator}${name}${emphasis}`

test('should return a curried equivalent of the provided function', () => {
  const greetHello = curryIt(greeter)('Hello')(', ')('.')

  expect(greetHello('Heidi')).toBe('Hello, Heidi.')
  expect(greetHello('Eddie')).toBe('Hello, Eddie.')
```

Y al igual que antes, no estamos limitados en términos del número de argumentos
que queremos utilizar al construir funciones derivadas de nuestra función
original que usa _curry_:

```js
  const greetGoodbye = curryIt(greeter)('Goodbye')(', ')

  expect(greetGoodbye('.')('Joe')).toBe('Goodbye, Joe.')
})
```

## Siendo serios sobre _curry_

Nuestra pequeña función `curryIt` no puede manejar todos los casos de borde,
como los parámetros faltantes u opcionales, pero hace un trabajo razonable
siempre y cuando permanezcamos estrictos sobre la sintaxis para pasar
argumentos.

Algunas bibliotecas funcionales de JavaScript como [Ramda][] tienen funciones de
_curry_ más flexibles que pueden dividir los parámetros requeridos para una
función y permiten pasarlos individualmente o en grupos para crear variaciones
_curry_ personalizadas. Si deseas aplicar _curry_ extensivamente, este es
probablemente el camino a seguir.

Independientemente de cómo elijas añadir _curry_ a tu programación, ya sea que
desee utilizar paréntesis anidados o prefieras incluir una función de transporte
más robusta, llegar a una convención de nomenclatura coherente para sus
funciones _curry_ ayudará a hacer tu código más legible. Te recomiendo que cada
variación derivada de una función tenga un nombre que deje claro cómo se
comporta, y qué argumentos está esperando.

## Orden de los argumentos

Una cosa que es importante tener en cuenta al momento de implementar _curry_ es
el orden de los argumentos. Usando el enfoque que hemos descrito, obviamente lo
que tú deseas es que el argumento que es más probable que sea reemplazado de
una variación a la siguiente sea el último argumento pasado a la función
original.

Pensar con antelación sobre el orden de los argumentos hará que sea más fácil
diseñar un algoritmo para ser implementado con _curry_  y aplicarlo a tu
trabajo. Tener en cuenta el orden de tus argumentos en términos de menor a mayor
probabilidades de cambiar es un buen hábito al momento de diseñar funciones.

## Conclusión

_Curry_ es una técnica increíblemente útil en JavaScript funcional. Te permitirá
generar una biblioteca de funciones pequeñas y fácilmente configuradas que se
comportan consistentemente, son rápidas de usar y que se pueden entender al leer
su código. Agregar _curry_ a tu práctica de codificación alentará el uso de
funciones parcialmente aplicadas a través de tu código, evitando una gran
cantidad de repeticiones, y puede ayudarte a obtener mejores hábitos sobre cómo
nombrar y manejar los argumentos de la función.

## Referencias

* [A Beginner’s Guide to Currying in Functional JavaScript][currying]
* [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [Function.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
* [Frequently Asked Questions for comp.lang.functional](http://www.cs.nott.ac.uk/~pszgmh/faq.html#currying)
* [Currying - Part 6 of Functional Programming in JavaScript por Mattias P Johansson](https://www.youtube.com/watch?v=iZLP4qOwY8I 
  "Currying - Part 6 of Functional Programming in JavaScript por Mattias P Johansson /no-iframe/")

[Ramda]: http://ramdajs.com/
[currying]: https://www.sitepoint.com/currying-in-functional-javascript/
[partial-application]: https://en.wikipedia.org/wiki/Partial_application
[Haskell Curry]: https://en.wikipedia.org/wiki/Haskell_Curry
[Frege]: https://en.wikipedia.org/wiki/Gottlob_Frege
