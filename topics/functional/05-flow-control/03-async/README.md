# Asincronía en JavaScript

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: 30min

***

## ¿Cuál es la diferencia entre código síncrono y asíncrono?

## Código síncrono

En los programas síncronos, si tienes dos líneas de código (L1 seguida de L2),
entonces L2 no puede comenzar a ejecutarse hasta que L1 haya terminado de
ejecutarse.

Puedes imaginar que estuvieses en una fila de gente que espera para comprar
boletos de tren. No puedes comenzar a comprar un boleto de tren hasta que todas
las personas delante de tí hayan terminado de comprar sus boletos. Del mismo
modo, la gente detrás de tí no puede comenzar a comprar sus boletos hasta que
hayas comprado el tuyo.

## Código asíncrono

En los programas asíncronos, se pueden tener dos líneas de código (L1 seguido
por L2), donde L1 programa alguna tarea que se ejecutará en el futuro, pero L2
se ejecuta antes de que se complete esa tarea programada por L1.

Imagina que estás sentada comiendo en un restaurante. Otras personas ordenan su
comida. Tú También puedes pedir tu comida. No tienes que esperar a que las
otras personas reciban su comida y terminen de comer antes de que tomen tu
orden. Del mismo modo, otras personas no tienen que esperar para obtener su
comida y terminar de comer antes de que puedas ordenar tu comida. Todo el mundo
obtendrá su comida en cuanto esté lista.

La secuencia en la que las personas reciben su pedido a menudo se correlaciona
con la secuencia en la que hicieron su orden, pero estas secuencias no siempre
tienen que ser idénticas. Por ejemplo, si tu pides un bistec, y luego yo pido un
vaso de agua, probablemente recibiré mi pedido primero, ya que normalmente no
toma tanto tiempo servir un vaso de agua en comparación con preparar y servir un
filete.

Ten en cuenta que asíncrono no significa lo mismo que concurrente o multihilo.
JavaScript puede tener código asíncrono, pero generalmente es de subproceso
único. Esto es como si un restaurante con un solo trabajador hiciera todas las
tareas. Si este trabajador hace sus oficios lo suficientemente rápido y cambia
entre las tareas de forma eficiente, entonces el restaurante aparentemente
tendría múltiples trabajadores.

## Ejemplos

La función `setTimeout` es probablemente la manera más sencilla de programar de
forma asíncrona el código para que se ejecute en el futuro:

```js
// Diga "Hola."
console.log("Hola.")
// Diga "Adiós" en dos segundos contando desde este momento.
setTimeout(() => {
  console.log("¡Adiós!")
}, 2000)
 // Decir  "Hola de nuevo"
console.log("¡Hola de nuevo!")
```

Si sólo está familiarizado con el código síncrono, puede esperar que el código
anterior se comporte de la siguiente manera:

```text
Diga “Hola".
No haga nada durante dos segundos.
Diga ¡Adiós!"
Diga "¡Hola de nuevo!"
```

Pero `setTimeout` no interrumpe la ejecución del código. Sólo programa algo para
que suceda en el futuro, y luego sigue inmediatamente a la siguiente línea. Así
que el resultado del código anterior sería:

```js
'Hola'
'¡Hola de nuevo!'
'¡Adiós!' // 2 segundos después
```

## Obtener datos de solicitudes AJAX

La confusión entre el comportamiento del código síncrono y el código asíncrono
es un problema común para los personas que están aprendiendo a programar y que
están lidiando con el tema de las solicitudes AJAX en JavaScript. A menudo
escriben código jQuery que se parece a algo como esto:

```js
const getData = () => {
  let data
  $.get("/api/example", response => {
    data = response
  })

  return data
}
const data = getData()
console.log(`La data es: ${data}`)
```

Este código no se comporta como tú esperarías desde el punto de vista síncrono.
Al igual que `setTimeout` en el ejemplo anterior, `$.get` no pausa la ejecución
del código, sólo programa algún código para ejecutarse una vez que el servidor
retorna una respuesta. Eso significa que la linea `return data` se ejecutará
antes que `data = response`, por lo que el código anterior siempre imprimirá
`La data es: _undefined_`.

El código asíncrono necesita ser estructurado de una manera diferente que el
código síncrono, y la forma más básica de hacerlo es con las funciones de
devolución de llamada, más comunmente conocidas como _callbacks_ (en inglés).

## _Callbacks_

Supongamos que llamas a una amiga y le pides alguna información, por ejemplo,
la dirección postal de un amigo mutuo que has perdido. Tu amiga no tiene esta
información memorizada, por lo que tiene que buscarla en su libreta de
direcciones. Esto podría llevarle unos minutos. Existen diferentes estrategias
para proceder:

* _Síncrono:_ Tú permaneces en la línea telefónica con ella y esperas mientras
  ella mira su libreta.
* _Asíncrono:_ Le dices a tu amiga que te devuelva la llamada una vez que tenga
  la información. Mientras tanto, tu puedes concentrar toda tu atención en
  otras tareas que necesitas hacer, como por ejemplo diseñar un algoritmo.

En JavaScript, podemos crear funciones asíncronas que reciben otras funciones
como argumentos, que se llamarán una vez que la tarea se haya completado.
Siguiendo nuestro ejemplo, podemos pasarle una funcion _callback_ a `getData`:

```js
getData(data => {
  console.log(`The data is: ${data}`)
})
```

Por supuesto, ¿cómo sabe `getData` que estamos pasando una función? ¿Cómo se
llama y cómo se carga el parámetro `data`? En este momento, nada de esto está
sucediendo. Tenemos que cambiar la función `getData` para que acepte un callback
como argumento.

```js
const getData = callback => {
  $.get("/api/example", response => {
    callback(response)
  })
}
```

Notarás que ya estábamos pasando una función de respuesta de llamada o
_callback_ a `$.get`, tal vez sin darnos cuenta de lo que era. También pasamos
una respuesta de llamada a la función `setTimeout(callback, delay)` en el
primer ejemplo.

Dado que `$.get` ya acepta una respuesta de llamada, no necesitamos crear
manualmente otro en `getData`, podemos pasar directamente la respuesta de
llamada que nos dieron:

```js
const getData = callback => {
 $.get("/api/example", callback)
}
```

Las funciones de respuesta de llamada se usan con mucha frecuencia en
_JavaScript_ y, si has pasado algún tiempo escribiendo código en _JavaScript_,
es muy probable que las hayas utilizado. Toda aplicación web hará uso de
respuestas de llamada a través de eventos (por ejemplo, `window.onclick`,
`setTimeout` y `setInterval`, o solicitudes AJAX).

## Problemas comunes del código asíncrono

### Puede resultar confuso al principio

Algunas personas deciden que tratar con código asíncrono es demasiado
complicado para trabajar, por lo que intentan hacer que todo sea sincrónico.
Por ejemplo, en lugar de usar `setTimeout`, podría crear una función síncrona
para no hacer nada durante un período de tiempo determinado:

```js
const pause = duration => {
  const start = new Date().getTime()
  while (new Date().getTime() - start < duration) {}
}
```

Del mismo modo, al realizar una llamada _AJAX_, es posible establecer una opción
para que la llamada sea síncrona en lugar de asíncrona (aunque esta opción
pierde lentamente el soporte del navegador). También hay alternativas síncronas
a muchas funciones asíncronas en Node.js.

Tratar de evitar código asíncrono y reemplazarlo con código síncrono es casi
siempre una mala idea porque _JavaScript_ sólo tiene un solo hilo (excepto
cuando se utilizan _Web Workers_). Esto significa que la página web no responderá
mientras se ejecuta el _script_. Si utilizas la función sincrónica `pause` o una
llamada _AJAX_ síncrona, el usuario no podrá hacer nada mientras estén en
ejecución.

El problema es aún peor cuando se utiliza _JavaScript_ en el servidor: el
servidor no podrá responder a ninguna solicitud mientras espera que se
completen las funciones síncronas, lo que significa que cada usuario que haga
una solicitud al servidor tendrá que esperar para obtener una respuesta.

### Problemas de alcance con _callbacks_ dentro de lazos

Cuando se crea una devolución de llamada o _callback_ dentro de un bucle `for`,
puedes encontrarte con algún comportamiento inesperado. Piensa en lo que
esperarías que el código escrito a continuación hiciera, y luego intenta
ejecutarlo en la consola _JavaScript_ de tu navegador.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i + " second(s) elapsed")
  }, i * 1000)
}
```

Es probable que el código anterior está diseñado con la intención de mostrar los
mensajes siguientes, con un segundo de retardo entre cada mensaje:

```console
1 second(s) elapsed.
2 second(s) elapsed.
3 second(s) elapsed.
```

Pero el resultado que realmente muestra es el siguiente:

```console
4 second(s) elapsed.
4 second(s) elapsed.
4 second(s) elapsed.
```

El problema es que `console.log (i + "second (s) elapsed")` está en la
devolución de llamada de una función asíncrona. En el momento en que se
ejecuta, el bucle `for` se habrá terminado y la variable `i` será igual a 4.

Hay varias soluciones a este problema, pero la más común es envolver la llamada
a `setTimeout` en un _closure_, lo que creará un nuevo ámbito con una `i`
diferente en cada iteración:

```js
for (var i = 1; i <= 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(`${i} second(s) elapsed`);
    }, i * 1000);
  })(i);
}
```

Pero como estamos utilizando ECMAScript 2015, entonces una solución
más elegante es usar `let` en lugar de `var`, ya que permite crear un nuevo
ámbito para `i` en cada iteración:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`${i} second(s) elapsed`);
  }, i * 1000);
}
```

### Infierno de _callback_

A veces se tiene una serie de tareas en las que cada paso depende de los
resultados del paso anterior. Esto es muy sencillo de tratar usando código
síncrono:

```js
const text = readFile(fileName)
const tokens = tokenize(text)
const parseTree = parse(tokens)
const optimizedTree = optimize(parseTree)
const output = evaluate(optimizedTree)

console.log(output);
```

Cuando intentas hacer eso usando código asíncrono, es fácil caer en el llamado
infierno de _callback_, que es un problema común en el que se termina con
funciones _callback_ profundamente anidadas unas dentro de otras. Son
particularmente susceptibles a este fenómeno el código Node.js y las
aplicaciones de _front-end_ con un montón de llamadas AJAX. Podrían terminar
viéndose así:

```js
readFile(fileName, text => {
  tokenize(text, tokens => {
    parse(tokens, parseTree => {
      optimize(parseTree, optimizedTree => {
        evaluate(optimizedTree, output => {
          console.log(output)
        })
      })
    })
  })
})
```

Este tipo de código es difícil de leer y puede ser un verdadero dolor de cabeza
cada vez que se necesite hacer cambios. Si tiene devoluciones de llamada
profundamente anidadas como esta, normalmente es una buena idea organizar el
código de forma diferente. Existen varias estrategias diferentes para
refactorizar devoluciones de llamada profundamente anidadas.

#### Divide el código en distintas funciones con nombres apropiados

Le puedes dar nombres a las funciones de devolución de llamada para que puedas
hacer referencia a ellas por nombre. Esto ayuda a que el código sea más
superficial, y también divide el código de manera natural en pequeñas secciones
lógicas.

```js
const readFinish = text => {
  tokenize(text, tokenizeFinish)
}
const tokenizeFinish = tokens => {
  parse(tokens, parseFinish)
}
const parseFinish = parseTree => {
  optimize(parseTree, optimizeFinish)
}
const optimizeFinish = optimizedTree => {
  evalutate(optimizedTree, evaluateFinish)
}
const evaluateFinish = output => {
  console.log(output)
}
readFile(fileName, readFinish)
```

#### Crear una función para ejecutar una serie de tareas

Esta solución no es tan flexible como la anterior, pero si se tiene una
secuencia de tareas compuesta de funciones asíncronas, se puede crear una
función de utilidad que tome una matriz de tareas y las ejecute una tras otra.

```js
const performTasks = (input, tasks) => {
  if (tasks.length === 1) {
    return tasks[0](input)
  }

  tasks[0](input, output => {
    // Ejecuta las tareas en el arreglo 'tasks[]'
    performTasks(output, tasks.slice(1))
  })
}

performTasks(fileName,
  [readFile, token, parse, optimize, evaluate, output => {
  console.log(output)
}])
```

## Herramientas para el manejo de código asíncrono

### Librerías Async

Si estás utilizando un montón de funciones asíncronas, puede valer la pena
utilizar una librería o biblioteca de funciones asíncronas, en lugar de tener
que crear tus propias funciones de utilidad.
[Async.js](https://github.com/caolan/async) es una biblioteca popular
que tiene muchas herramientas útiles para tratar el código asíncrono.

### Promises

Las promesas o _promises_ son una forma popular de deshacerse del infierno de
_callback_. Originalmente se trataba de un tipo de constructo introducido por
librerías _JavaScript_ como `Q` y `when.js`, pero estos tipos de librerías
se volvieron lo suficientemente populares como para que _promises_ se
proporcionan de forma nativa en ECMAScript 2015.

La idea es que en lugar de usar funciones que acepten una entrada y un
_callback_, hacemos una función que devuelve un objeto _promise_, es decir, un
objeto que representa un valor que está destinado a existir en el futuro.

Por ejemplo, supongamos que comenzamos con una función `getData` que hace una
solicitud AJAX y usa un _callback_ de la manera habitual:

```js
const getData = (options, callback) => {
  $.get("/api/example", options, response => {
    callback(null, JSON.parse(response))
  }, () => {
    callback(new Error("AJAX request failed!"))
  })
}
// uso
getData({name: "John"}, (err, data) => {
  if (err) {
    console.log(`Error! ${err}`)
  } else {
    console.log(data)
  }
})
```

Podemos cambiar la función `getData` para que devuelva un _promise_. Podemos
crear un objeto _promise_ con la nueva funcion `Promise(callback)`, donde
callback es una función con dos argumentos: `resolve` y `reject`. Llamaremos a
`resolve` si conseguimos obtener los datos. Si algo sale mal, llamaremos a
`reject`.

Una vez que tenemos una función que devuelve un objeto _promise_, podemos usar
el método `.then` en este objeto para especificar lo que debe suceder una vez
que se llama a `resolve` o `reject`.

```js
const getData = options =>
  new Promise((resolve, reject) => { // crear un nuevo objeto promise
    $.get('/api/example', options, response => {
      resolve(JSON.parse(response)) // en caso que todo salga como planeamos
    }, () => {
      reject(new Error('AJAX request failed!')) // en caso que algo salga mal
    })
  })

// uso
getData({name: 'John'}).then(data => {
  console.log(data)
}, err => {
  console.log('Error! ' + err)
}
```

El manejo de errores parece mejor, pero es difícil ver cómo estamos haciendo
las cosas de manera mas conveniente dado el tamaño de la función. La ventaja es
más clara cuando reescribimos nuestro ejemplo de infierno _callback_ usando
_promises_:

```js
readFile('fileName')
  .then(text => tokenize(text))
  .then(tokens => parse(tokens))
  .then(parseTree => optimize(parseTree))
  .then(optimizedTree => evaluate(optimizedTree))
  .then(output => console.log(output))
  .catch(err => console.error(err))
```

## Conclusión

A este punto, ya deberías estar familiarizada con las estrategias para hacer
frente a algunas de las dificultades que surgen cuando se utiliza código
asíncrono.

## Referencias

* [Introduction to asynchronous JavaScript](https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript)
* [WindowOrWorkerGlobalScope.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
* [WindowOrWorkerGlobalScope.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
* [Async](http://caolan.github.io/async/)
* [Q](https://github.com/kriskowal/q)
* [when.js](https://github.com/cujojs/when)
