---
type: read
duration: 15min
---

# Arrow Functions

## Diferencias entre arrow functions y funciones clásicas

Una de las novedades más interesantes de ES6 son las denominadas **funciones
flecha**, o *arrow functions*. Las funciones flecha son, como su
nombre indica, definidas mediante una nueva sintaxis que utiliza una "flecha"
(`=>`). Las funciones flecha se comportan de forma sensiblemente distinta a las
funciones tradicionales de JavaScript, a continuación alguna de sus diferencias:

* **No pueden llamarse con `new`**: Al no tener un método constructor, no pueden
  ser utilizadas como constructores. Las funciones flecha lanzarán un error
  cuando se utilicen con `new`.
* **No hay prototipo**: Al no disponer de constructor, tampoco es necesario un
  prototipo. Por lo tanto, no existirá la propiedad `prototype` en una función
  flecha.
* **No crean un nuevo contexto**. El valor de `this`, `super`, `arguments` y
  `new.target` dentro de la función será el mismo que el de la función
  tradicional (*non-arrow*) más cercana.
* **No puedes cambiar `this`**: El valor de `this` dentro de la función flecha
  permanece inmutable a lo largo de todo el ciclo de vida de la función.
* **No hay objeto `arguments`**: Tan solo es posible proporcionarle parámetros a
  una función flecha mediante parámetros nombrados y *rest parameters*.
* **No es posible duplicar parámetros con el mismo nombre**: Tanto en modo
  estricto como no estricto, a diferencia de las funciones clásicas, que no lo
  permiten tan solo en modo estricto.

## Sintáxis

El ejemplo más simple de *arrow function* es el siguiente, aunque veremos en los
ejemplos siguientes que existen diversas variaciones.

```js
const echo = text => text;
```

Esta función sería equivalente a la siguiente:

```js
const echo = function (text) {
  return text;
};
```

En ambos casos, la ejecución de la función daría la siguiente salida:

```js
console.log(echo('Hola Mundo!')); // => Hola Mundo!
```

Como con cualquier función, podemos pasar tantos argumentos como queramos a la
función:

```js
const sum = (a, b) => a + b;
console.log(sum(1, 1)); // => 2
```

O ninguno, claro:

```js
const greet = () => 'Hola, forastero!';
console.log(greet()); // => Hola, forastero!
```

Si queremos realizar operaciones más complicadas, podemos hacerlo con llaves y
definiendo un valor de retorno:

```js
const resize = ({x, y}, ratio) => {
  return {
    x: x * ratio,
    y: y * ratio
  };
};

console.log(resize({ x: 5, y: 15 }, 100)); // => { x: 500, y: 1500 }
```

Una función flecha no crea un nuevo contexto. Una de las mayores fuentes de
errores en JavaScript venía dada por la creación de distintos contextos en una
función dependiendo de quien las esté ejecutando. Tomemos el siguiente ejemplo:

```js
const randomWinner = function (drivers) {
  const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
  return drivers[winner];
};

const F1Race = {
  drivers: [
    'Alonso',
    'Vettel',
    'Button',
    'Massa'
  ],
  init: function () {
    console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    setTimeout((function () {
      console.log('El ganador es', randomWinner(this.drivers));
    }), 1000);
  }
};

F1Race.init();
```

`F1Race` es un objeto que lanza una carrera de Fórmula 1 mediante su función
`init()`. Al cabo de un segundo, se ejecutará la función `randomWinner()`, que a
partir de un array de conductores, seleccionará uno al azar.

Cuando ejecutamos la función `init()`, el programa escribe por consola lo
siguiente:

```text
Los siguientes pilotos van a comenzar la carrera: [ 'Alonso', 'Vettel', 'Button', 'Massa']
```

Esto es posible ya que la función `init` tiene como contexto el propio objeto
`F1Race`. Sin embargo, la función da error tras un segundo, mientras intenta
calcular el ganador de forma aleatoria. ¿Cómo es posible?

El motivo es que la función de callback que se le pasa a `setTimeout` crea un
nuevo contexto, en el que no existe el array drivers.

En ES5 podíamos solucionar este problema utilizando `bind(this)` para asignar
el contexto de la función de callback al del objeto que la contiene, de la
siguiente forma:

```js
init: function () {
  console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
  setTimeout((function () {
    console.log('El ganador es', randomWinner(this.drivers));
  }).bind(this), 1000);
}
```

Con ES2015, podemos solucionar este contratiempo utilizando arrow functions de
una forma mucho más elegante, ya que al no crear un nuevo contexto, `this`
siempre vendrá determinado por la función que lo contiene:

```js
init: function () {
  console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
  setTimeout(() => console.log('El ganador es', randomWinner(this.drivers)), 1000);
}
```
