---
type: read
duration: 15min
---

# Promesas

Hasta ahora hemos visto el uso de _callbacks_ para manejar tareas asíncronas. En
esta lectura introducimos un tipo de dato nuevo (`Promise`), que está
específicamente diseñado para encapsular operaciones asíncronas y poder
encadenarlas.

Cuando usamos _callbacks_, es común que nos encontremos con situaciones donde
una operación asícrona depende de que otra se haya completado, y así vamos
anidando callbacks y es fácil perder el hilo de lo que se está
ejecutando en un momento determinado. Más aun si en la vida real comienzan a
existir _callbacks_ para todo:

```js
unProcesoLento(
  (datos) => {
    otroProcesoLento(
      (otrosDatos) => {
        yAunOtroProcesoLento(
          (masDatos) => {
            /*
             * podemos seguir anidando callbacks...
             */
          }
        );
      }
    );
  }
);
```

A esto se le llama el **callback hell** y ocurre cuando procesos lentos dependen
del resultado de los anteriores por lo que terminamos anidando una dentro de
otra las funciones que esperan por los datos que traen tales procesos.

Para esto es que desde ES6 se crearon las `promesas` (_Promises_ en inglés), que
están diseñadas para representar a esos datos que están, estarán en el futuro o
simplemente nunca llegarán (en caso de que haya alguna falla). Veamos un ejemplo
de ellas:

```js
const readFiles = require('read-files-promise');

readFiles([
  'path/to/file0',
  'path/to/file1',
], { encoding: 'utf8' })
  .then((buffers) => {
    buffers;
  })
  .catch((error) => {
    console.log('Falló este proceso muy lento');
  });
```

Mucho mejor, aunque se vean más lineas hay grandes diferencias con el
acercamiento de _callbacks_, el primero es que hay un espacio para la función
que recibirá los datos y otro para la que ejecutará el código de emergencia en
caso de falla, pero la principal es que las promesas pueden anidarse como lo
veremos en el siguiente ejemplo :

```js
const readFiles = require('read-files-promise');

readFiles(['path/to/file0'], { encoding: 'utf8' })
  .then((buffers) => {
    buffers; // [ContenidoDeArchivo0]

    return readFiles(['path/to/file1'], { encoding: 'utf8' });
  })
  .then((buffers) => {
    buffers; // [ContenidoDeArchivo1]
  })
  .catch((error) => {
    console.log("Fallamos al leer archivos")
  });
```

Ahora si, mucho más ordenado, claro y manteniendo la funcionalidad, en donde el
otroProcesoLento depende de los datos del primer proceso lento. Notar que
mantenemos solo una función de emergencia en caso de error para ambos procesos
lo que ayuda en reducir el código basura y de estar pendientes de qué función en
la cadena falló, cosa que tendría que haberse replicado en cada uno de los
_callbacks_ del **callback hell**.

Ahora que sabemos el por qué de las promesas, veamos su creación y uso más
detallado.

## Creación de Promises

En esta sección nos ponemos del lado del programador de procesos lentos, por lo
que necesitamos una forma de ordenar nuestro trabajo para que los otros
programadores usen nuestro proceso lento. Veamos
una promesa cualquiera por dentro y analicemos las partes que la componen, para
así entender cómo crearlas nosotros mismos.

```js
let procesoLento = new Promise((resolve, reject) => {
  let datos = {};
  //...
  //muchas lineas de código
  //...
  if (error) {
    //uh oh, las cosas no salieron tan bien
    reject(new Error('Fallamos, lo siento'));
  }
  //...
  resolve(datos);
});
```

### new Promise

Lo primero es la creación de una promesa a través del código
`new Promise(...)`, como puedes ver es un objeto que representa a este dato
que puede estar inmediatamente, en el futuro o simplemente no estar. Este objeto
para ser creado recibe un _callback_, pero no como todos, sino que uno especial
que tiene dos parámetros que veremos a continuación.

#### Parámetro resolve

El primer parámetro del _callback_ la promesa es una función especial que
llamaremos cuando el trabajo lento que hacemos se termina. Con esto se da por
terminada la promesa y los datos que queramos retornar se ponen como parámetros
de `resolve`.

#### Parámetro reject

Nuestro trabajo lento puede fallar, es obvio que todo puede fallar (muchas
gracias Murphy), por esto tenemos que tener una forma de comunicar que nuestro
proceso lento tuvo un error. Las promesas vienen al rescate y nos proveen de
`reject`, una función que podemos llamar en caso de error y que recibe como
parámetro... si ya lo adivinaron, un error de javascript.

## Uso de promesas

El uso común es tal cuál como mostramos en el ejemplo anterior de código, pero
ahora que estamos viendo con más detalle, expliquemos cada uno de los
componentes del uso de la promesa que vimos con nuestro _procesoLento_ y
_otroProcesoLento_.

### then

`then` es una función que el usuario de la promesa provee para cuando el proceso
lento terminó de ejecutarse correctamente. El número de parámetros que recibe
son variables y dependen del creador (es muy importante la comunicación entre
ustedes programadoras), generalmente retornan un único parámetro con los datos
resultantes.
Si queremos anidar promesas, tal como vimos anteriormente, es importante al
final de esta función retornar otra promesa. Si en cambio queremos retornar un
valor para el siguiente paso, lo haremos de la siguiente forma:

```js
  //... mucho código antes ...
  return Promise.resolve(dato);
}.then(
  (dato) => {
    // Acá podemos usar el dato que retornamos en el then anterior
  }
);
```

### catch

`catch` en tanto, es una función que será ejecutada en caso de que **en
cualquier paso de la cadena de then haya una falla**. Esto es muy importante,
puesto que concentra todo el manejo de errores en solo una parte, aliviando a la
programadora de tener que manejar errores en cada uno de los _callbacks_.

## Estado de promesas

Una promesa puede encontrarse en estos estados:

* **pending**: Estado inicial, ni terminada exitosamente o rechazada.
* **fulfilled**: operación exitosa.
* **rejected**: operación fallida o rechazada.
* **settled**: la Promise ha sido exitosa o rechazada, pero no está pendiente.

## Lecturas complemenentarias

* [Promises - Jake Archibald - Google Developers](https://developers.google.com/web/fundamentals/primers/promises)
