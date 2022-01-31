# Recursividad en JavaScript

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `45min`

***

La recursividad es uno de los conceptos de programación más simples pero a su
vez uno de los más difíciles de dominar. La definición teórica para recursividad
es: "la capacidad de una función de invocarse a sí misma". Ten en cuenta que la
recursión no es un concepto exclusivo de JavaScript, lo podemos encontrar en
casi todos los lenguajes de programación.

A lo largo de esta lección veremos que la recursión es importante para la
programación funcional por las siguientes razones:

* Las soluciones recursivas involucran el uso de abstracciones simples aplicadas
  a subconjuntos de un problema común.
* La recursión puede ocultar la mutación del estado. Recuerda que hablamos sobre
  la mutación de estado en las lecciones de Funciones puras e Inmutabilidad.
* La recursión es una manera de implementar *lazyness* y estructuras muy largas
  o infinitas.

## Factorial

Este es el ejemplo clásico para entender la recursividad: **factoriales.**

El factorial de un número entero `n` es igual al producto de todos los números
enteros positivos desde `1` hasta `n`. Así que el factorial de 5 es igual a
`5 * 4 * 3 * 2 * 1`, lo que nos da como resultado 120.

```text
5! = 5 * 4 * 3 * 2 * 1 = 120
```

En la programación, los factoriales son un ejemplo perfecto de un caso en el que
se debe utilizar una función recursiva. ¿Por qué? Porque estamos haciendo lo
mismo (multiplicación) una y otra vez a un valor particular (un entero positivo)
hasta que obtenemos el resultado deseado.

En principo desarrollemos, como ya hemos viniendo haciendo, el caso de prueba:

**factorial.test.js.**

```js
const factorial = require('./factorial')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})
```

Una primera implementación que cumple caso de pruebas especificado es la
siguiente:

**factorial.js.**

```js
const factorial = n => {
  if (n === 0) {
    return 1
  }

  // ¡Aquí está la recursión!
  return n * factorial(n - 1)
}

module.exports = factorial
```

Demostremos que nuestra implementación cumple con el caso de prueba:

```sh
$ yarn run jest -- factorial.test.js

PASS  ./factorial.test.js

  ✓ Should calculate the factorial of the given number (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.638s, estimated 1s
Ran all test suites matching "factorial.test.js".
Done in 1.12s.
```

## Caso base, caso recursivo

Hay características claves de la recursión que deben incluirse en tu código para
que funcione correctamente.

El primer caso a estudiar es el **caso base**: es sólo una línea de código o
sentencia, normalmente dentro de una cláusula condicional como `if` que detiene
la recursión. Si no se tiene un caso base, la recursión continuará infinitamente
y tu programa se bloqueará (lo cual no es bueno).

El segundo es el **caso recursivo**: ésta es el lugar donde realmente sucede la
recursión: es donde la función recursiva se llama a sí misma.

Vamos a explorar ambos casos con más detalle. Mira bien el código del ejemplo a
continuación:

**factorial.js.**

```js
const factorial = n => {
  // Este es nuestro caso base - cuando n es igual a 0, se detiene la recursión
  // Devolvemos 1 pues es el elemento neutro de la multiplicación
  if (n === 0) {
    return 1
  }

  // Este es nuestro caso recursivo
  // Correrá para todas las condiciones de n excepto cuando n es igual a 0
  return n * factorial(n - 1)
}

module.exports = factorial
```

## Condición de terminación

Otra característica útil (y a menudo necesaria) de una función recursiva es la
**condición de terminación**.

Esta es una declaración específica que detendrá explícitamente la recursión. El
caso base es una forma de condición de terminación, aunque para nuestros fines
usaremos la condición de terminación para describir una sentencia que cancelará
la recursión en el caso de una entrada incorrecta u otro error potencial.

Para poner esto en práctica, mira la función factorial. ¿Qué pasaría si la
llamáramos usando un entero negativo? Dado que la recursión sólo se detendrá
cuando n es igual a 0, y eso nunca sucedería con un entero negativo, nuestro
programa se bloquearía.

Agreguemos un caso de prueba para demostrar lo indicado en el párrafo anterior:

**factorial.test.js.**

```js
const factorial = require('./factorial.verbose')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})

test('Should not accept negative values', () => {
  expect(() => {
    factorial(-1)
  }).toThrow('Cannot compute the factorial of a negative integer')
})
```

Si ejecutamos nuestras pruebas obtendremos lo siguiente:

```sh
$ yarn run jest -- factorial.test.js

FAIL  ./factorial.test.js

  ● Should not accept negative values

    RangeError: Maximum call stack size exceeded

      at factorial (factorial.js:1:108)
      at factorial (factorial.js:9:14)
      ...
      at factorial (factorial.js:9:14)


  ✓ Should calculate the factorial of the given number (3ms)
  ✕ Should not accept negative values (3ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.685s, estimated 1s
Ran all test suites matching "factorial.test.js".
```

**¡Ouch!**, nuestro programa está fallando.

Para evitar que esto suceda, utilizaremos una condición de terminación para
asegurarnos de que el valor pasado a la función sea válido y no bloquee nuestro
programa. Como programadora, debes estar constantemente pensando en cómo estar
preparada para cualquier tipo de situación y asegurarte de que tu código puede
manejarla correctamente.

**factorial.js.**

```js
const factorial = n => {
  if (n < 0) {
    // Condición de terminación para prevenir recursividad infinita
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  // Caso base
  if (n === 0) {
    return 1
  }

  // Caso recursivo
  return n * factorial(n - 1)
}

module.exports = factorial
```

Ejecutemos ahora nuestras pruebas:

```sh
$ yarn run jest -- factorial.test.js

 PASS  ./factorial.test.js

  ✓ Should calculate the factorial of the given number (3ms)
  ✓ Should not accept negative values

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.674s, estimated 1s
Ran all test suites matching "factorial.test.js".
Done in 1.29s.
```

Todo parece indicar que la condición de terminación nos ha servido para
solventar el error antes presentado.

## Argumentos en la recursión

Cuando empieces a construir tu caso recursivo (el código que se repetirá), una
de las reglas es asegurarse de que los argumentos que usamos para la recursión
nos lleven a un caso base.

Si el valor que le pasamos a la llamada de la función recursiva es el mismo que
el valor inicial, es probable que nuestro código entre en un bucle infinito, e
inevitablemente se bloqueará.

Por lo tanto, la pregunta que debes hacerte es: ¿el caso recursivo modifica los
argumentos de tal manera que cada recursión lo acerca más al caso base?

**factorial.js.**

```js
const factorial = n => {
  // Condición de terminación para prevenir la recursión infinita
  if (n < 0) {
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  // Caso base
  if (n === 0) {
    return 1
  }

  return n * factorial(n)
}

factorial(6)
```

¿Qué está mal? ¿Por qué no funciona la recursión?

## Ahora es tu turno

A la hora de plantear una función recursiva, hay cinco preguntas que puedes
utilizar como guía:

* ¿Cuáles son los casos básicos?
* ¿Cuál es el caso recursivo?, ¿hay más de un caso recursivo?
* ¿He incluido alguna otra condición de terminación necesaria?
* ¿Las declaraciones de la función conducen al caso base?
* ¿Se construye la recursión en el caso base hasta que el resultado deseado es
  devuelto por la función?

## Pila de llamadas (Call Stack)

Imagina por un momento que una compañera mientras hacia revisión de la función
`factorial()` encontró un comportamiento extraño, su caso de prueba fue el
siguiente:

```sh
> factorial(32768)
RangeError: Maximum call stack size exceeded
```

Por si no lo recuerdas, este error ya lo habíamos visto antes, cuando intentamos
calcular el `factorial(-1)` y no teníamos la **condición de terminación**
apropiada.

Ahora bien, para poder resolver este problema, primero debemos dejar claro un
concepto que no habíamos explicado anteriormente, definamos entonces qué es la
pila de llamadas o *Call Stack*.

Sería útil examinar más de cerca la forma en que se maneja el control a través
de las funciones. Aquí está un programa simple que hace algunas llamadas a
funciones:

**greet.**

```js
function greet(who) {
  console.log("Hello " + who)
}
greet("Harry")
console.log("Bye")
```

* La llamada a `greet` hace que el control salte al inicio de esa función (línea
  2).
* Se hace una llamada a `console.log` (una función predeterminada del
  navegador), esta función toma el control, hace su trabajo, devuelve el control
  a la línea 2.
* Entonces llega al final de la función `greet`, así que el control se vuelve al
  lugar de la llamada, en la línea 4.
* La línea siguiente llama a `console.log` de nuevo (línea 5).

Veamos otra representación de lo mencionado previamente, mostraremos un esquema
de cómo fluye el control en la función:

```text
top
    greet
        console.log
    greet
top
    console.log
top
```

Como la función debe saltar de nuevo al lugar de la llamada original cuando
llega al final de la función, la computadora debe recordar el contexto o entorno
desde el cual se hizo la llamada a la función. Por ejemplo, en un caso,
`console.log` tiene que volver a saltar a la función `greet`. En otro caso, debe
saltar al final del programa.

El lugar donde la computadora almacena este contexto es la pila de llamadas o
*call stack*. Cada vez que se hace una llamada a una función, el contexto actual
se pone encima de esta pila de llamadas. Cuando la función se devuelve, elimina
el contexto superior de la pila y lo utiliza para continuar con la ejecución de
la función.

El almacenamiento de esta pila requiere espacio en la memoria de la computadora.
Cuando la pila crece demasiado, la computadora fallará y mostrará un mensaje
como "No hay espacio en la pila" o "Hay demasiada recursión". El código
siguiente ilustra esto haciendo una pregunta realmente difícil a la computadora,
esto causa llamadas infinitas hacia adelante y hacia atrás entre dos funciones.
Como la computadora no tiene una pila infinita, se queda sin espacio, y sucede
que "explotamos la pila".

```js
function chicken() {
  return egg()
}
function egg() {
  return chicken()
}
console.log(chicken() + " came first.")
// → ??
```

Esto es precisamente lo que está pasando con nuestra función `factorial`, a
partir de ciertos enteros positivos nuestra pila de llamadas crece demasido y
obtenemos el error: *Maximum call stack size exceeded*. Veamos entonces si
podemos solventar dicho error.

***

## Lecturas complementarias

### Tail-call Optimization

La optimización de llamadas de cola o *tail-call optimization* es una
característica del compilador que reemplaza las invocaciones de funciones
recursivas con una estructura de control o bucle. La eliminación de las
invocaciones de funciones elimina tanto el tamaño de la pila como el tiempo
necesario para configurar los marcos de la pila de funciones. Tanto el tiempo
como el espacio se guardan.

Una programadora debe escribir funciones de una manera que facilite la
*optimización de llamadas de cola*. Esto significa que la última función
invocada debe ser la función recursiva. Si revisamos con detenimiento nuestra
función `factorial` podremos apreciar que nuestra llamada recursiva es como
sigue:

```js
return n * factorial(n - 1)
```

Cabe preguntarnos si **la última función invocada debe ser la función
recursiva**, en nuestra implementación actual en realidad es la multiplicación
lo último que se invoca. Sin embargo, podemos mejorar la implementación tal
como sigue:

**factorial.js.**

```js
'use strict'
const factorial = (n, acc = 1) => {
  if (n < 0) {
    // Condición de terminación para prevenir recursividad infinita
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  // Caso base
  if (n === 0) {
    return acc
  }

  // Caso recursivo
  return factorial(n - 1, n * acc)
}

module.exports = factorial
```

Esta implementación del `factorial` ahora si hace *tail-call recursion* y por
ende está optimizada, nota que la última función llamada es `factorial` y no la
multiplicación (caso previo). De este modo, el compilador es capaz de invocar
`factorial` en un bucle hasta que se devuelva un resultado distinto a este en la
repetición.

Nota que hemos agregado un parámetro adicional a `factorial` este parametro es
`acc`. Este es el acumulador, `acc` es el valor acumulado hasta este punto.
Hagamos una simulación escrita del método recurrente para ver cómo se acumula el
resultado factorial:

```text
factorial(5)
factorial(5, 1)
factorial(4, 5)
factorial(3, 20)
factorial(2, 60)
factorial(1, 120)
factorial(0, 120)
120
```

Todas las funciones recursivas deben tener un caso base que termine la
recursión. Anteriormente el caso base para la función `factorial` era cuando
`n = 0`, en cuyo caso se devuelve `1`. Con esta nueva implementación, el caso
base de `factorial` sigue siendo cuando `n = 0`, pero en lugar de retornar `1`,
se devuelve el valor acumulado (`acc`).

#### Tarea

Nuestra nueva implementación de `factorial` igualmente tiene un problema, si
bien hacemos uso de una característica de ES2015, la cual es la definición de
paramétros por omisión de una función, un usuario podría invocar nuestra nueva
función `factorial` de la siguiente manera: `factorial(5, 2)`, ¿qué crees que
pasaría en dicho caso?, trata de hacer una simulación escrita antes de ejecutar
código, ¿el resultado es correcto?

Un modo de corregir la nueva implementación es siguiendo la siguientes consejos:

#### Estrategia para la optimización de llamadas de cola

Utiliza esta estrategia para crear funciones recursivas optimizadas:

* Crear una función recursiva interna que tenga un parámetro acumulador
  adicional
* El caso base de la función recursiva interna será devolver el acumulador
* La invocación recursiva proporciona un valor actualizado para el acumulador
* La función externa delega a la función recursiva interna usando los valores
  iniciales apropiados

Sigue estas estrategias y tus funciones recursivas serán óptimas, proporcionando
mejoras significativas en el rendimiento.

> **Nota**
>
> Si tú código fuese a producción con esta implementación, se utilizarían otras
> técnicas como
> [IIFEs](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
> entre otras para encapsular y prevenir la creación de un nuevo *closure* cada
> vez que llamamos a `factorial`.

Si probamos la función `factorial` haciendo uso de *tail-call optimization* con
números enteros positivos pequeños observamos que todo funciona de igual manera,
pero, en esta ocasión debemos actualizar nuestro caso de pruebas para incluir el
ejemplo que nos dio nuestra amiga:

**factorial.test.js.**

```js
const factorial = require('./factorial.tail')

test('Should calculate the factorial of the given number', () => {
  expect(factorial(5)).toBe(120)
})

test('Should not accept negative values', () => {
  expect(() => {
    factorial(-1)
  }).toThrow('Cannot compute the factorial of a negative integer')
})

test('Should avoid too much recursion', () => {
  expect(() => {
    factorial(32768)
  }).not.toThrowError(/stack size exceeded/)
})
```

Si ejecutamos nuestras pruebas obtendremos un resultado similar al siguiente:

```sh
$ yarn run jest -- factorial.test.js

 FAIL  ./factorial.tail.test.js
  ● Should avoid too much recursion

    expect(function).not.toThrowError(regexp)

    Expected the function not to throw an error matching:
      /stack size exceeded/
    Instead, it threw:
      RangeError: Maximum call stack size exceeded

  ✓ Should calculate the factorial of the given number (5ms)
  ✓ Should not accept negative values (1ms)
  ✕ Should avoid too much recursion (10ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        0.656s, estimated 1s
Ran all test suites matching "factorial.test.js".
```

**(o\_O)** ¡Un momento!, ¿qué ha pasado?, ¿por qué sigue fallando?.

Pues resulta que es importante mencionar que esto funcionará si tu sistema
proporciona optimizaciones de llamadas de cola. Ya que JavaScript no lo hace en
la mayoría de sus implementaciones, tal como se indica
[acá](https://babeljs.io/learn-es2015/#ecmascript-2015-features-tail-calls)

> **Nota**
>
> Al momento de la publicación de esta lectura, la única implementación de
> JavaScript conocida por el autor que soporta tail-call optimization es
> [KinomaJS](https://github.com/Kinoma/kinomajs), la cual ofrece un *runtime*
> optimizado para el desarrollo de aplicaciones que funcionen en dispositivos IoT
> y ofrecen compatibilidad con ES6, de hecho,
> [acá](http://kinoma.com/develop/documentation/js6/) puedes ver los resultados
> de sus pruebas.
>
> Si bien no es necesario para los objetivos de este curso, puedes intentar
> descargar el código de KinomaJS pues es *Open Source*, construirla y correr la
> *suite* de pruebas que ofrecen y corroborar por tu cuenta.

Ahora que sabemos que la mayoría de las implementaciones de JavaScript no
implementan todavía la *tail-call optimization* es necesario ver si existen
otras alternativas con las cuales podamos solventar el error antes visto.

### Trampolining

¿Cómo podemos optimizar las funciones de JavaScript recursivas sin la
optimización de llamadas de cola? Una opción es volver a escribir tu función
recursiva en forma de bucle.

Función factorial escrita usando estructura de datos de control:

```js
const factorial = n => {
  let acc = 1
  for (let i = n; i > 0; i--) {
    acc *= i
  }
  return acc
}
```

Así se implementa la optimización de llamadas de cola manualmente. La desventaja
es la pérdida de elegancia y la expresividad de la implementación recursiva.

Otra opción es usar un trampolín.

Las trampolines son ubicaciones de memoria que mantienen direcciones apuntando a
rutinas de servicio de interrupción, como por ejemplo rutinas de E/S. Al correr
el código la ejecución salta al trampolín y luego salta inmediatamente hacia
afuera, o rebota, de ahí el término trampolín.

Un solo trampolín es suficiente para expresar todas las transferencias de
control de un programa; Un programa expresado de esta manera podemos decir que
está escrito al estilo trampolín. Las funciones de trampolín se pueden utilizar
para implementar llamadas de función recursivas de cola en lenguajes de
programación orientados al uso de pilas.

Pero es más fácil de lo que parece en la teoría, como veremos a continuación.

#### Un simple trampolín

Veamos una implementación simple de trampolín:

```js
const trampoline = f => {
  while (f && f instanceof Function) {
    f = f.apply(f.context, f.args)
  }
  return f
}
```

El trampolín toma una función y ejecuta repetidamente el valor de retorno hasta
que se devuelve un resultado distinto al de una función. Uno se siente tentado a
usar el trampolín de la siguiente manera:

```js
const factorial = (n) => {
  const recur = (n, acc) => n ? recur(n - 1, n * acc) : acc
  return trampoline(recur(n, 1));
}
```

Pero esto no produce la optimización deseada. ¿Por qué? Supongamos que se invoca
la función factorial con `n = 5`. ¿Qué valor se le pasa al trampolín?

```js
recur(5, 1)
```

Es una expresión de función que devuelve el valor 120. El trampolín se invoca
con el valor 120. Esto es esencialmente la misma aplicación de la llamada de
cola optimizada del factorial, excepto que la optimización de la llamada de la
cola no está disponible en el entorno de JavaScript. ¿Qué salió mal?

Teníamos la intención de invocar un trampolín con una función de referencia, no
con un resultado de la función. Mientras que lo siguiente funciona

```js
return trampoline(function() { recur(n, 1) })
```

Es difícil de manejar. Necesitamos un medio para obtener una referencia a la
invocación de la función, completa con todos los parámetros, por lo que podemos
invocar la función en un momento posterior. Aunque no estaba destinado para este
propósito, la función *Function.bind* se ajusta bien a nuestra intención, y por
lo tanto, mejora nuestra implementación de Factorial:

Mejor pero no del todo óptima

```js
const factorial = n => {
  const recur = (n, acc) => n ? recur(n - 1, n * acc) : acc

  return trampoline(recur.bind(null, n, 1))
}
```

Ahora invocamos el trampolín con la expresión:

```js
recur.bind(null, n, 1))
```

La función *bind* es una función que cuando se invoca devuelve el valor de la
función que está haciendo la llamada, en este caso *recur*, utilizando el
contexto de llamada especificado (el puntero *this*, que en este caso es nulo,
ya que no llamamos a nuestra función dentro de una instancia del objeto), Y la
lista de parámetros. El resultado de *recur (n, 1)* se devuelve cuando se invoca
la función *bind*. ¡Esto es exactamente lo que pretendíamos pasar al trampolín,
una función!

Sin embargo, esta implementación aún no está optimizada. Para ver esto
supongamos que invocamos *factorial* con el valor n = 5. Cuando el trampolín
invoca la función *bind* devolviendo la invocación de *recur(5, 1)* ¿qué
resultado se devuelve? No es una función, sino que es el resultado de la
recurrencia (4, 5), que es 120. Sólo tenemos un rebote.

Esto se arregla fácilmente:

Implementación optimizada de factorial:

```js
const factorial = n => {
  const recur = (n, acc) => n ? recur.bind(null, n - 1, n * acc) : acc

  return trampoline(recur.bind(null, n, 1));
}
```

Ahora el trampolín proporcionará el efecto deseado y continuará haciendo un
bucle hasta que vuelva a devolver el valor acumulado.

**factorial.js.**

```js
'use strict'

const isFunction = require('lodash.isfunction')

const trampoline = (fn, ...args) => {
  let result = fn.apply(fn, args)

  while (isFunction(result)) {
    result = result()
  }

  return result
}

const factorial = n => {
  if (n < 0) {
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  const fun = (n, acc = 1) => {
    return n ? () => fun(n - 1, n * acc) : acc
  }

  return trampoline(fun(n))
}

module.exports = factorial
```

Tras este ultimo cambio ejecutemos nuestras pruebas.

```sh
$ yarn run jest -- factorial.test.js

 PASS  ./factorial.safe.test.js
  ✓ Should calculate the factorial of the given number (3ms)
  ✓ Should not accept negative values (1ms)
  ✓ Should avoid too much recursion (7ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.648s, estimated 1s
Ran all test suites matching "factorial.test.js".
Done in 1.15s.
```

Con esto ya hemos evitado saturar el *stack*. Sin embargo, el resultado es el
siguiente:

```sh
> factorial(32768)
Infinity
```

> **(o\_O) Advertencia**
>
> Este error se debe a otra limitación en JavaScript, esta vez relacionada con el
> manejo de enteros largos. Si bien la reparación de este último *bug* está fuera
> del alcance de la lección actual, igual se mostrará su resolución para
> completar el recorrido.
>
> Esta limitación puede ser arreglada haciendo uso de
> [BigInteger.js](https://github.com/peterolson/BigInteger.js). Ejecutemos
> entonces
>
> ```sh
> yarn add --dev big-integer
> ```
>
> y ajustemos de nuevo nuestra implementación.

**factorial.js.**

```js
'use strict'

const isFunction = require('lodash.isfunction')
const bigInt = require('big-integer')

const trampoline = (fn, ...args) => {
  let result = fn.apply(fn, args)

  while (isFunction(result)) {
    result = result()
  }

  return result
}

const factorial = n => {
  if (n < 0) {
    throw new Error('Cannot compute the factorial of a negative integer')
  }

  const fun = (n, acc = bigInt.one) => {
    return n.greater(0) ? () => fun(n.minus(1), acc.multiply(n)) : acc
  }

  return trampoline(fun(bigInt(n)))
}

module.exports = factorial
```

Ahora podremos obtener una representación que nos funciona para números grandes:

```sh
> factorial(5)
{ [Number: 120] value: 120, sign: false, isSmall: true }
> factorial(5) == 120
true
> factorial(180)
{ [Number: Infinity]
  value:
    [ 0,
      0,
      0,
      0,
      0,
      0,
      9603200,
      3198603,
      3278187,
      2302693,
      9233864,
      7538181,
      4141796,
      3001782,
      1142564,
      4664891,
      6331964,
      5603584,
      809209,
      5744504,
      8568581,
      5064353,
      1980647,
      6535588,
      972945,
      3196673,
      6095985,
      1495273,
      3218633,
      6710321,
      7399609,
      9410103,
      7356315,
      2097309,
      8013811,
      9809411,
      953395,
      6004486,
      4353351,
      7777940,
      4079886,
      9175403,
      8466838,
      5133689,
      2996569,
      2499134,
      89606,
      2 ],
  sign: false,
  isSmall: false }
```

Y dichos números grandes (`isSmall: false`) los podemos transformar a cadenas de
caracteres de la siguiente manera:

```sh
> fact(180).toString()
'200896062499134299656951336898466838917540340798867777940435335160044860953395980941180138112097309735631594101037399609671032132186331495273609598531966730972945653558819806475064353856858157445040809209560358463319644664891114256430017824141796753818192338642302693327818731986039603200000000000000000000000000000000000000000000'
```

## Otros ejercicios que puedes hacer

* Implementa la función `myLength`, la cual toma un *array* como entrada y
  retorna la longitud de dicho *array* o número de elementos. Ejemplo:
  `myLength([1, 2, 3]) = 3`
* Crea una función `cycle` que toma un número entero positivo y un *array* como
  argumentos y crea un nuevo *array* que contendrá los elementos del *array* de
  entrada multiplicados tantas veces como indica el número entero positivo
  pasado como primer argumento. Ejemplo: `cycle(2, [1, 2, 3]) = [1, 2, 3, 1, 2,
  3]`

## Referencias

* [Recursion in JavaScript](https://www.codecademy.com/en/courses/javascript-lesson-205)
  por Code Academy
* [The Call Stack](http://eloquentjavascript.net/03_functions.html#h_D2Yui+mx6D)
  de Marijn Haverbeke
* [Functional Javascript](http://shop.oreilly.com/product/0636920028857.do) de
  Michael Fogus
* [Functional JavaScript – Tail Call Optimization and Trampolines](https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/)
* [Trampolines in JavaScript](http://raganwald.com/2013/03/28/trampolines-in-javascript.html)
