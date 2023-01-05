---
type: read
duration: 15min
---

# Callbacks

En los diferentes lenguajes y estilos de programación siempre ha habido un
problema con el tiempo que toman las cosas en realizarse, quizá no en el sentido
humano, pero sí para una computadora, que puede ejecutar varios miles de
operaciones por segundo. En especial esto sucede con operaciones como ir a
buscar cosas al disco duro, buscar información en alguna API de internet, o
incluso esperar a que el usuario haga algo. Un estilo que triunfó en el pasado
es el `síncrono` :

```js
const fs = require('fs');
const contents = fs.readFileSync('assets/ajson.json').toString();
console.log(contents);
```

En este estilo vemos que para imprimir el contenido del archivo, se debe esperar
a que `readFileSync` termine de leer, no muy eficiente desde el punto de vista
del usuario, que tiene que esperar que se complete la lectura para empezar
a ver algo en la pantalla, pero sí desde el punto de vista del programador, que
solo tiene que ocuparse de que esto funcione, y que con 3 lineas consigue
obtener los datos, ... y que cada linea se ejecuta después de la otra, por lo
que es fácil seguir mentalmente el programa.

Con la llegada de Javascript, también se hizo popular un nuevo estilo de
programación, llamado `asíncrono`:

```js
const fs = require('fs');

fs.readFile('assets/ajson.json', (err, buf) => {
  console.log(buf.toString());
});

console.log('Espera mientras leemos el archivo...');
```

Con esta forma de programar no nos preocupamos de esperar los datos, podemos
hacer otras cosas mientras, tales como informar al usuario de nuestro programa
que algo se está haciendo a través de un mensaje (o barra de progreso si es que
estamos en una página web). Para esto creamos una función, a la que comúnmente
se le llama *callback*, que será la que se ejecute una vez que lleguen los datos
del proceso lento.

## Lecturas complementarias

* [Callback function - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
