---
type: read
duration: 5min
---

# ¿Qué son los paradigmas de programación?

[![Paradigmas - intro](https://embedwistia-a.akamaihd.net/deliveries/96a1ed02f6e5165d6d7d76ad22b7c9b359630123.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/6frz31ykmi?wvideo=6frz31ykmi)

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas
diferentes de pensar en cómo se organiza un programa basado en una serie de
principios, los cuales resultan en estilos muy distintos y lenguajes muy
diversos.

Consideremos la siguiente función:

```js
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
```

La función `sum(array)` recibe un array de números y retorna la suma de todos
los elementos del array. Para llevar a cabo la suma, usamos la variable `total`,
la cual vamos a ir actualizando (mutando) mientras vamos recorriendo el arreglo
con un bucle (`for` en este caso). Estas características son típicas del estilo
imperativo.

Ahora, podemos implementar exactamente la misma funcionalidad usando un enfoque
completamente distinto.

```js
function sum(array) {
  if (!array.length) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};
```

En esta segunda implementación, la función `sum(array)` sigue teniendo la misma
interfaz (recibe los mismos argumentos y retorna lo mismo), pero claramente
podemos ver que la lógica se expresa de una manera muy diferente. En la versión
recursiva hemos reemplazado el bucle `for` por recursión, y además podemos ver
que no hay asignación ni mutación de variables, el "cómputo" se hace por
aplicación de argumentos a funciones. Este tipo de características son propias
del paradigma funcional.

***

PRO TIP:

Haciendo uso de ES2015 podemos refactorizar la versión funcional de `sum` de
esta manera:

```js
const sum = array => !array.length ? 0 : array[0] + sum(array.slice(1));
```

***

Cuando hablamos de **Paradigmas de Programación** inevitablemente tenemos que
hablar de lenguajes de programación. Algunos lenguajes, como JavaScript, son
_multi-paradigma_, lo que quiere decir que nos permiten programar en diferentes
paradigmas, mientras que otros se enfocan específicamente en uno.

**JavaScript** es un leguage _híbrido_, por decirlo de alguna forma, y contiene
elementos propios de lenguajes funcionales (por ejemplo funciones como objetos
de primera clase, lambdas, ...) pero no estamos limitados al paradigma
funcional. **JavaScript nos permite programar de forma _funcional_, _orientado a
objetos_, _orientado a eventos_, _por procedimientos_, ...**

También veremos que los "paradigmas" son "estilos" de programación que no son
necesariamente exclusivos. De hecho, algunos son complementarios o evoluciones
de paradigmas más antiguos o con un nivel de abstracción más bajo. Así, la
programación procedural y orientada a objetos, por ejemplo, ambas son
imperativas, ya que comparten una raíz común.

***

## Referencias

Blog posts:

* [Six programming paradigms that will change how you think about coding](http://www.ybrikman.com/writing/2014/04/09/six-programming-paradigms-that-will/),
  Yevgeniy Brikman, Apr 09 2014

Videos:

* [Programming Paradigms](https://www.youtube.com/watch?v=sqV3pL5x8PI
  "Programming Paradigms /no-iframe/"),
  `10:43`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  30 Aug 2013
* [HTML IS a Programming Language (Imperative vs Declarative)](https://www.youtube.com/watch?v=4A2mWqLUpzw
  "HTML IS a Programming Language (Imperative vs Declarative) /no-iframe/"),
  `8:27`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  Jun 28 2016
* [Qué es un paradigma de programación](https://www.video2brain.com/mx/tutorial/que-es-un-paradigma-de-programacion),
  `5:15`, José Dimas Luján Castillo, [video2brain](https://www.video2brain.com/),
  8 Mar 2017

Otros recursos:

* [Definición de Programming_paradigm en Wikipedia](https://en.wikipedia.org/wiki/Programming_paradigm)
* [Comparativa de paradigmas de programación en Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)
