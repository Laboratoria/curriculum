---
type: read
duration: 15min
---

# Declarativo vs Imperativo

[![Paradigmas - Declarativo vs Imperativo](https://embedwistia-a.akamaihd.net/deliveries/9e9d7f42e688950f919c2ea4b08fbe4a6f6b93ea.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/ty5mr7p77t?wvideo=ty5mr7p77t)

Hemos mencionado que los primeros lenguajes de programación eran imperativos, y
que se centraban en el "cómo" más que en el "qué". Como contrapartida, el estilo
declarativo se caracteriza por lo contrario, enfocarse más en "qué" queremos
hacer, desde el punto de vista de un ser humano, en vez de cómo lo debe ejecutar
la computadora. Por ende, cuanto más declarativo, más alejado del hardware.

Algunos paradigmas son más imperativos y otros más declarativos. Por ejemplo,
la programación orientada a procedimientos, o la programación orientada objetos,
van a tener un caracter imperativo, mientras que la programación funcional tiene
un caracter mucho más declarativo.

Imáginemos que tenemos la siguiente data en un array de objetos:

```js
const array = [
  {id: 'uno', name: 'el primero'},
  {id: 'dos', name: 'el segundo'},
  {name: 'no tengo id'},
];
```

A partir de esta data, ahora nos piden extraer los `id` de cada un de los
objetos y amacenarlos en un nuevo arreglo (`ids`). Si nos planteamos el
problema desde un enfoque imperativo, podríamos implementar una solución así:

```js
const ids = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].id) {
    ids.push(array[i].id);
  }
}

console.log(ids); // ['uno', 'dos']
```

En el código anterior, probablemente puedas identificar claramente el estilo
imperativo. Las variables como "contadores" y "acumuladores", son típicos del
estilo imperativo. En este estilo el principal mecanismo de cómputo se lleva a
cabo a través de la asignación de valores en variables. Veremos así uso de
variables globales y mutación de los valores asignados a variables a través del
tiempo.

JavaScript nos ofrece utilidades para afrontar este tipo problemas desde el
enfoque funcional. Así, los arrays (gracias a `Array.prototype`) tienen una
serie de métodos para manipular su data a través de "higher order functions",
que en este caso son funciones que aceptan otra función como argumento, como por
ejemplo `Array.prototype.filter` o `Array.prototype.map`. Veamos cómo podemos
usar estas herramientas para implementar la misma lógica:

```js
const ids = array
  .filter(item => typeof item.id === 'string')
  .map(item => item.id);

console.log(ids); // ['uno', 'dos']
```

En esta nueva versión hacemos lo siguiente:

1. Usamos `Array#filter` para crear un nuevo arreglo sólo con aquellos elementos
   que tengan un `id` que sea un string (`typeof item.id === 'string'`).
2. Usamos `Array#map` para transformar cada elemento del arreglo y crear un
   nuevo arreglo con los resultados.

De esta forma los detalles de la iteración quedan escondidos detrás de
`Array#filter` y `Array#map`, haciendo nuestro código más declarativo.

También podemos ver cómo "encadenamos" (method chaining) las invocaciones de
`filter` y `map` ya que ambas retornan un array, que a su vez tiene todos los
métodos de `Array.prototype`.

El estilo declarativo depende de que el lenguaje (o librerías) nos ofrezcan este
tipo de herramientas o abstracciones con las que poder expresar nuestra lógica
sin preocuparnos tanto sobre los detalles de implementación.

Para terminar esta sección, cabe mencionar que HTML es un lenguaje declarativo!
Muchos se quejarían diciendo que HTML no es un lenguaje de programación, sino un
lenguaje de marcado (_markup language_). Pero podemos considerear a HTML como un
lenguaje declarativo muy restringido, no de uso general, donde sólo podemos
crear un árbol de nodos a partir de una estructura de etiquetas (_tags_) con una
sintáxis y semántica predefinida. Es declarativo en el sentido de que no le
estamos diciendo a la computadora cómo convertir nuestro código en
instrucciones, sino que describimos de formal declarativa lo que queremos que
ocurra (el compilador o intérprete se encarga del resto).

***

## Referencias

Videos:

* [HTML IS a Programming Language (Imperative vs Declarative)](https://www.youtube.com/watch?v=4A2mWqLUpzw 
  "HTML IS a Programming Language (Imperative vs Declarative) /no-iframe/"),
  `8:27`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  Jun 28 2016

Otros recursos:

* [Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)
* [Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)
