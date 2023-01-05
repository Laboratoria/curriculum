---
type: read
duration: 10min
---

# FP

Finalmente llegamos al paradigma funcional (_Functional Programming_), y digo
finalmente porque es probable que sientas curiosidad por conocer un poco más
sobre este paradigma tan incomprendido, pero tan de moda en el mundo de
JavaScript.

A diferencia del paradigma procedural y el orientado a objetos, la programación
funcional pertenece a la rama de los paradigmas _declarativos_. Esto quiere
decir que el "estilo" en el que programamos va a estar mucho más enfocado en qué
queremos hacer y no tanto en los detalles de cómo la computadora lo ejecuta.

Cuando hablamos del estilo imperativo dijimos que nos enfocábamos en asignar
valores a variables, mutar esas variables, e iterar usando bucles. La
programación funcional se caracteriza por exactamente lo opuesto. **En FP el
principal mecanismo de cómputo es la aplicación de argumentos a funciones**.
Como consecuencia, evitamos la asignación de varialbles, mutación, delegamos el
control de flujo, ... De hecho, podemos resumir los principios de la
programación funcional en los siguientes:

* **Higher order functions** (funciones como argumentos y/o valores de retorno)
* **Funciones puras** (sin efectos secundarios y siempre retorna lo mismo para
  los mismos argumentos)
* **Composición** de funciones
* **Inmutabilidad** (no "mutar" valores asignados)
* **Evitar el "estado" compartido** (no usar referencias fuera del scope de la
  función)
* Uso de **recursión** como alternativa a la iteración.

Veamos estos conceptos en acción:

```js
// pasando una función anónima como un argumento
setTimeout(function () {
  //...
}, 100);


// recibiendo una función como un argumento
function map(arr, fn) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(fn(arr[i]));
  }
  return results;
}

// Ahora reemplazando iteración con recursividad
function recursiveMap(arr, fn) {
  if (!arr.length) {
    return [];
  }
  return [fn(arr[0])].concat(recursiveMap(arr.slice(1), fn));
}
```

La última función (`recursiveMap`) es un buen ejemplo de FP porque muestra como
podemos recibir una función como argumento, reemplzar iteración por recursión,
evitar asignación y mutación. Además no accede a ninguna referencia fuera de su
scope (sólo usa variables locales) y no tiene ningún efecto secundario: se
limita a producir un valor de retorno a partir de su input (argumentos) sin
afectar nada fuera de su _scope_.

Para comparar con el ejemplo que hicimos de OOP, ahora vamos a crear una función
que cree objetos, algo parecido a un constructor, pero muy distinto a la vez.
Los constructores son un tipo de función especial que se invoca con `new`, usa
`this` internamente y define un prototipo. La función que vamos a implementar
ahora se va a limitar a crear un objeto y retornarlo, nada de `new`, `this` o
`prototype`.

```js
const createRobot = function (name) {
  return {
    name: name,
    active: false
  };
};
```

ES2015 introduce "arrow functions" (funciones flecha), que es una implementación
de funciones muy parecida al keyword `function`, pero que no implica `new`,
`this` ni `prototype`.

```js
const createRobot = (name) => {
  return {
    name: name,
    active: false
  };
};
```

***

PRO TIP:

Con un poquito más de azúcar sintáctica cortesía de ES2015:

```js
const createRobot = name => ({
  name,
  active: false
});
```

Cuando el cuerpo de la función es sólo una expresión (un objeto literal en
nuestro caso), las "arrow functions" nos permiten hacer _retorno implícito_, lo
que significa que podemos obviar los `{}` que determinan el "bloque" de la
función y el keyword `return`. El resultado de evaluar la expresión será el
valor de retorno. En este ejemplo hemos envuelto la expresión (el objeto
literal) en paréntesis `()` para evitar que los `{}` se confundan con el cuerpo
de la función. En este caso los curly braces son parte del objeto!

***

En FP, en vez de pensar en "tipos", normalmente nos centramos en
transformaciones. Es decir, una función recibe un input (argumentos) y de alguna
forma los "transforma" en otra cosa. Por ejemplo, en la función anterior,
podemos decir que la función `createRobot` transforma un `string` (su input) en
un objeto (su valor de retorno). De esta forma cada función está completamente
aislada del mundo exterior y se concentra en hacer sólo una cosa.

Un buen ejemplo para visualzar el concepto de transformación es el método
`Array#map` en JavaScript (muy parecido al map que acabamos de implementar).
`Array.prototype.map` recibe un argumento, una función que será invocada para
cada elemento del array, y retorna un nuevo arreglo con los resultados de cada
invocación a la función que recibe `Array#map` como argumento.

```js
const array = ['1', '02', '33', '3.14', '028'];

const double = num => num + num;

console.log(array.map(double));
// [ '11', '0202', '3333', '3.143.14', '028028' ]

console.log(array.map(parseFloat));
// [ 1, 2, 33, 3.14, 28 ]

console.log(array.map(parseFloat).map(double));
// [ 2, 4, 66, 6.28, 56 ]

const arrayToDouble = array => array.map(parseFloat).map(double);

console.log(arrayToDouble(array));
// [ 2, 4, 66, 6.28, 56 ]
```

Como vemos en estos ejemplos, podemos encadenar invocaciones a `Array#map` para
ir "transformando" los elementos de un arreglo, ya que cada invocación retorna
un array.

## Qué ventajas ofrece?

* Cómo hemos visto en el ejemplo de arriba, el código funcional tiende a ser más
  conciso y expresivo.
* Más predecible. Más adelante veremos que como resultado de los principios del
  paradigma (uso de funciones puras, inmutabilidad, evitar estado compartido y
  efectos secundarios, ...) nuestro código será más fácil de predecir, aislar y
  probar.
* Se presta a la paralelización y la computación distribuida.
* Se presta a la asincrónia.
* JavaScript, como lenguaje, tiene una naturaleza más funcional que imperativa.

***

## Referencias

Blog posts:

* [Why Learn Functional Programming in JavaScript? (Composing Software)]( https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257),
  Eric Elliott en Medium, Feb 20 2017
* [JavaScript and Functional Programming](https://bethallchurch.github.io/JavaScript-and-Functional-Programming/),
  Beth Allchurch, 29 of June, 2016
* [An introduction to functional programming](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming),
  Mary Rose Cook
* [Introducción a programación funcional en JavaScript — Parte 1](https://medium.com/laboratoria-how-to/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e),
  Lupo Montero en Medium, Feb 15 2017

Otros recursos:

* [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
