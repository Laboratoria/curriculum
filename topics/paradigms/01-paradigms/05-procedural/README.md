---
type: read
duration: 6min
---

# Programación por procedimientos

[![Paradigmas - Programación por Procedimientos](https://embedwistia-a.akamaihd.net/deliveries/4e3484d4a5311cad9a043dc69d9243ed023538e5.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/el19ibmhpj?wvideo=el19ibmhpj)

La programación por procedimientos (_procedural programming_) pertenece a la
rama del estilo _imperativo_. Antes mencionamos que a finales de los años 50
Fortran II introduce la programación por procedimientos, y de esa forma
empezamos a "organizar", "abstraer" y "reusar" nuestro código.

Cuando programamos orientados a procedimientos, lo cual puede ser un enfoque
válido para ciertos programas o scripts, nos concentramos en agrupar código
en procedimientos o funciones, e invocar estos procedimientos con diferentes
argumentos o parámetros. En este sentido es parecido a la programación
funcional, pero con la diferencia de que nos mantenemos en la rama imperativa,
describiendo acciones como pasos secuenciales, que podrían tener efectos
secundarios y donde el output no está necesariamente deterinado por los
argumentos de entrada. Mientras que la programación funcional es más abstracta,
se basa en funciones puras sin efectos secundarios, evitar el estado compartido,
y otros principios específicos de la programación funcional.

Refactoricemos el ejemplo anterior donde sacábamos la propiedad `id` de una
lista de objetos. Empecemos por envolver el código en una función:

```js
function getIds(inputArray) {
  const ids = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id) {
      ids.push(inputArray[i].id);
    }
  }

  return ids;
}

console.log(getIds(array)); // ['uno', 'dos']
```

Este cambio parece menor, pero añade una capa de abstracción que nos da un
montón de flexibilidad. Ahora nuestro código está _encapsulado_ dentro de su
propio _scope_ y podemos reusar la lógica para otros arrays (podemos invocar la
función cuantas veces queramos).

Pero vayamos un paso más allá. Ahora que estamos ordenando nuestro código usando
funciones, aprovechemos a abstraer y mejorar la comprobación que hacíamos para
saber si un objeto tiene una propiedad `id`.

```js
function hasId(obj) {
  return obj && typeof obj.id === 'string';
}

function getIds(inputArray) {
  const ids = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (hasId(inputArray[i])) {
      ids.push(inputArray[i].id);
    }
  }

  return ids;
}

console.log(getIds(array)); // ['uno', 'dos']
console.log(hasId()); // false
console.log(hasId({name: 'foo'})); // false
console.log(hasId({id: 'uno'})); // true
```

En esta nueva versión hemos partido el código en dos funciones, y al hacerlo
hemos tenido que dar nombres a estas funciones. Estos nombres representan de
alguna forma esa capa de abstracción. Ahora podemos hablar de `hasId()`
cuando queremos referirnos a ese pedacito de lógica. Así, poco a poco vamos
creando una semántica que nos permite alejarnos de los detalles de
implementación.

***

## Referencias

Otros recursos:

* [Procedural programming](https://en.wikipedia.org/wiki/Procedural_programming)
