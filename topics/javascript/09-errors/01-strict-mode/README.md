---
type: read
duration: 15min
---

# Modo Estricto

El modo estricto realiza cambios en la semántica normal de javascript. Un
aspecto importante es que el modo estricto elimina errores silenciosos, lo que
obligó a escribir un código mejor y no cometer errores.

La directiva `use strict` es una directiva que no supone una instrucción de
código, sino que indica el modo en que el navegador debe ejecutar el código
JavaScript.

Podríamos hablar de dos modos de ejecución JavaScript: `normal mode`, que es el
que hemos estudiado hasta ahora, y el `strict mode`, que vamos a explicar.

## Invocando el modo estricto

Para invocar el modo estricto, sólo tienes que escribir `'use strict';` en tu
archivo JavaScript. Por ejemplo:

```js
'use strict';
```

Ahora que ya sabe cómo invocar el modo estricto, vamos a ver un ejemplo rápido.

```js
'use strict';
foo = 'Alexandra'; // Uncaught ReferenceError: foo is not defined
```

Ahora que estamos usando el _modo estricto_ esto resulta en un error, que nos
dice que `foo` no está definida. Es necesario declarar la variable antes de
usarla.

```js
'use strict';
const foo = 'Guilherme'; // It works!
```

El modo estricto cambia la sintáxis y el comportamiento en tiempo de ejecución.
Los cambios generalmente caen dentro de estas categorías: cambios que convierten
erratas en errores (como errores de sintáxis o en tiempo de ejecución), cambios
que simplifican como una variable particular es calculada, cambios que
simplifian el uso de eval y arguments, cambios que hacen más fácil escribir
JavaScript "seguro", y cambios que anticipan la evolución futura de EMACScript.

## Convirtiendo erratas en errores

El modo estricto cambia algunos errores de sintáxis tolerados en modo no
estricto y los convierte en errores.  JavaScript fue diseñado de modo que fuera
fácil para programadores novatos, y puede haber operaciones que deberían ser
errores pero son tratadas como libres de error. A veces esto sirve para
solucionar el problema en el momento, pero puede crear problemas más graves
en el futuro. El modo estricto trata las erratas como errores, para que puedan
ser descubiertas y subsanadas inmediatamente.

En primer lugar, el modo estricto hace imposible crear variables globales por
accidente. En JavaScript no estricto, si se escribe mal una variable en una
asignación, se creará una nueva propiedad en el objeto globlal y el código
continuará "trabajando" como si nada (aunque es posible que el código así
escrito falle en el futuro, en concreto, en JavaScript más moderno). En modo
estricto, cualquier asignación que produzca variables globales por accidente
lanzará un error.

En segundo lugar, el modo estricto lanza una excepción en asignaciones que de
otro modo fallarían silenciosamente. Por ejemplo, NaN es una variable que no
puede ser asignada. En un código normal, asignar a `NaN` un valor no tiene
efectos; el programador no recibe ningún mensaje de error. En cambio, en modo
estricto, si se intenta asignar un valor a `NaN`, el programador recibirá una
exepción. Cualquier asignación que falle silenciosamente en código normal
(asignaciones a una propiedad de no escritura, asignaciones a una propiedad get,
asignaciones a una nueva propiedad o a un objecto no extendible) lanzará una
excepción en modo estricto:

```js
'use strict';
// Asignación a un no-escritura global
var undefined = 5; // TypeError: "undefined" is read-only
var Infinity = 5; // TypeError: "Infinity" is read-only

// Asignación a una propiedad de no-escritura
const obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // lanza un TypeError

// Asignación a una propiedad de tipo getter
const obj2 = { get x() { return 17; } };
obj2.x = 5; // lanza un TypeError

// Asignación a una nueva propiedad en un objeto no-extendible
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // lanza un TypeError
```

En tercer lugar, el modo estricto lanza una excepción al intentar eliminar
propiedades no eliminables (mientra que en código normal el intento no tendría
ningún efecto):

```js
'use strict';
delete Object.prototype; // lanza TypeError
```
