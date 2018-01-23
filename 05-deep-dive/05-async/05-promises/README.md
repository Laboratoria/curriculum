# Promesas

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***
En los diferentes lenguajes y estilos de programación siempre ha habido un
problema con el tiempo que toman las cosas en realizarse, quizá no en el sentido
humano, pero si para una computadora que puede ejecutar varios miles de
operaciones por segundo. En especial esto sucede con operaciones como ir a
buscar cosas al disco duro, buscar información en alguna API de internet, o 
incluso esperar a que el usuario haga algo. Un estilo que triunfó en el pasado
es el `síncrono` :

```javascript
var fs = require('fs');
var contents = fs.readFileSync('assets/ajson.json').toString();
console.log(contents);
```

En este estilo vemos que para imprimir el contenido del archivo, se debe esperar
a que termine de leer por parte de readFileSync, no muy bello desde el punto de
vista del usuario, pero si desde el punto de vista del programador, que solo
tiene que ocuparse de que esto funcione y que con 3 lineas consigue obtener los 
datos, y que cada linea se ejecuta después de la otra, por lo que es fácil 
seguir mentalmente el programa.

Con la llegada de Javascript, también se hizo popular un nuevo estilo de
programación, llamado `asíncrono` :

```javascript
var fs = require('fs');
fs.readFile('assets/ajson.json', function(err, buf) {
  console.log(buf.toString());
});
console.log("Espera mientras leemos el archivo...")
```
Con esta forma de programar no nos preocupamos de esperar los datos, podemos
hacer otras cosas mientras tales como informar al usuario de nuestro programa
que algo se está haciendo a través de un mensaje (o barra de progreso si es que 
estamos en una página web). Para esto creamos una función, a la que comúnmente 
se le llama *callback*, que será la que se ejecute una vez que lleguen los datos
 del proceso lento. Pero no todo es bello en este estilo y es fácil perder el 
hilo de lo que se está ejecutando en un momento determinado. Más aun si en la 
vida real comienzan a existir *callbacks* para todo :

```javascript
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

Para esto es que desde ES6 se crearon las `promesas` (*Promises* en inglés), que
están diseñadas para representar a esos datos que están, estarán en el futuro o simplemente nunca llegarán (en caso de que haya alguna falla). Veamos un ejemplo
de ellas : 

```javascript
const readFiles = require('read-files-promise');
 
readFiles([
  'path/to/file0',
  'path/to/file1',
], {encoding: 'utf8'})
.then(
    (buffers) => {
        buffers;
    }
).catch(
    (error) => {
        console.log("Falló este proceso muy lento")
    }
);
```
Mucho mejor, aunque se vean más lineas hay grandes diferencias con el
acercamiento de *callbacks*, el primero es que hay un espacio para la función 
que recibirá los datos y otro para la que ejecutará el código de emergencia en 
caso de falla, pero la principal es que las promesas pueden anidarse como lo 
veremos en el siguiente ejemplo :

```javascript
const readFiles = require('read-files-promise');
 
readFiles([
  'path/to/file0'
], {encoding: 'utf8'})
.then(
    (buffers) => {
        buffers; //[ContenidoDeArchivo0]

        return readFiles([
            'path/to/file1'
        ],{encoding: 'utf8'});
    }
).then(
    (buffers) => {
        buffers; //[ContenidoDeArchivo1]
    }
).catch(
    (error) => {
        console.log("Fallamos al leer archivos")
    }
);
```

Ahora si, mucho más ordenado, claro y manteniendo la funcionalidad, en donde el
otroProcesoLento depende de los datos del primer proceso lento. Notar que
mantenemos solo una función de emergencia en caso de error para ambos procesos
lo que ayuda en reducir el código basura y de estar pendientes de qué función en
la cadena falló, cosa que tendría que haberse replicado en cada uno de los
*callbacks* del **callback hell**.

Ahora que sabemos el por qué de las promesas, veamos su creación y uso más
detallado.

## Creación de Promises
En esta sección nos ponemos del lado del programador de procesos lentos, por lo 
que necesitamos una forma de ordenar nuestro trabajo para que los otros
programadores usen nuestro proceso lento. Veamos
una promesa cualquiera por dentro y analicemos las partes que la componen, para
así entender cómo crearlas nosotros mismos.

```javascript
let procesoLento = new Promise((resolve, reject) => {
    let datos = {};
    //...
    //muchas lineas de código
    //...
    if(error){
        //uh oh, las cosas no salieron tan bien
        reject(new Error("Fallamos, lo siento"));
    }
    //...
    resolve(datos);
});
```
### new Promise

Lo primero es la creación de una promesa a través del código 
```new Promise(...)```, como puedes ver es un objeto que representa a este dato 
que puede estar inmediatamente, en el futuro o simplemente no estar. Este objeto
para ser creado recibe un *callback*, pero no como todos, sino que uno especial 
que tiene dos parámetros que veremos a continuación.

#### Parámetro resolve

El primer parámetro del *callback* la promesa es una función especial que 
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
valor para el siguiente paso, lo haremos de la siguiente forma : 
```javascript
    //... mucho código antes ...
    return Promise.resolve(dato);
}.then(
    (dato) => {
        //Acá podemos usar el dato que retornamos en el then anterior
    }
); 
```

### catch
`catch` en tanto, es una función que será ejecutada en caso de que **en 
cualquier paso de la cadena de then haya una falla**. Esto es muy importante, 
puesto que concentra todo el manejo de errores en solo una parte, aliviando a la 
programadora de tener que manejar errores en cada uno de los _callbacks_.