# Objetos preconstruidos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

* ¿Qué son los objetos globales, objetos preconstruidos o librerías estándar en
  JavaScript?
* ¿Por qué utilizarlos?

***

### JavaScript, indagando en el núcleo del lenguaje

Todos los lenguajes de programación tienen objetos preconstruidos (built-in)
que ofrecen funcionalidad común más allá de lo que es el lenguaje en sí. Los
objetos preconstruidos nos permiten ahorrar tiempo con funcionalidad disponible
como parte del entorno del lenguaje.

JavaScript tiene muchos [objetos preconstruidos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales).
El término "objetos globales" (u objetos preconstruidos estándar) no debe
confundirse con el objeto global en sí. Aquí, los objetos globales se refieren a
objetos en el [ámbito global](https://developer.mozilla.org/en-US/docs/Glossary/global_scope).
Estos objetos y funciones que vienen con JavaScript pero que no son parte del
lenguaje en sí, también se conocen como la _librería estándar_ (standard
library) ya que siempre podemos contar con ellos. Son librerías que no tenemos
que importar y siempre están disponibles, independientemente del entorno donde
se ejecute nuestro código (navegador, node, ...).

### ¿Por qué usar la librería estándar?

Hay muchas funciones disponibles para ayudarte a escribir un programa bueno
y eficiente. Como desarrolladores de software, nuestro trabajo es encontrar
la solución más simple a un problema. "Más simple" es un poco vago, así que
vamos a definirlo como "funciona, es eficiente (suficiente), es relativamente
fácil de entender y no tarda demasiado en implementarse".

¿Cuánto tardarías en escribir una función que corte una cadena o verifique si
un número es positivo? Muchas funciones que encontraras en una librería
estándar son probablemente triviales por naturaleza, pero tener un estándar
acordado para hacer las cosas acelerará la implementación del código (habrá
menos instancias de "¿hay una función para esto o debería codificarla yo
mismo?") Además otras personas que leen tu código pueden concentrarse en
aprender sobre las dependencias que realmente importan y no invertir su tiempo
en entender librerías que consumes para una sola línea de código.

### Ventajas más importantes de usar funciones de librería estándar

* Funcionan

    Una de las razones más importantes por las que debes usar las funciones de
    la librería estándar es simplemente porque funcionan, ya han pasado por
    múltiples pruebas rigurosas y son fáciles de usar.

* Están optimizadas para el rendimiento

    Un grupo dedicado de desarrollo las mejora constantemente. En el proceso,
    estos equipos pueden crear el código más eficiente y optimizado para
    obtener el máximo rendimiento.

* Ahorran un considerable tiempo de desarrollo

    Dado que las funciones generales como imprimir en una pantalla, calcular la
    raíz cuadrada y muchas más ya están escritas. No debes preocuparte por
    crearlas una vez más. Ahorrarás un tiempo valioso, además que tu código
    puede no ser siempre el más eficiente.

* Son soportadas en la mayoría de los navegadores

    Con las cambiantes necesidades del mundo real, se espera que tu aplicación
    funcione siempre, en cualquier lugar, en cualquier dispositivo.
    Estas funciones de la biblioteca te ayudan a que tu aplicación funcione
    igual en todos los dispositivos. Esto ahorra tiempo, esfuerzo y hace que tu
    programa sea compatible con otros navegadores.

### Ejemplo

Supongamos que quieres encontrar la raíz cuadrada de un número. Siempre puedes
escribir tu propia pieza de código para encontrar la raíz cuadrada, pero este
proceso lleva tiempo y puede no ser el más eficiente.

Sin embargo, en la programación javascript puedes encontrar la raíz cuadrada
simplemente usando la función `Math.sqrt()`.

### Algunos de los objetos preconstruidos más utilizados

* [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Object](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [Function](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function)
* [Boolean](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Boolean)
* [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number)
* [Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math)
* [Date](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date)
* [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
* [RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp)
* [JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON)
* [Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol)
* [Error](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error)
* [EvalError](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/EvalError)
* [InternalError](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/InternalError)
* [RangeError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
* [ReferenceError](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/ReferenceError)
* [SyntaxError](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/SyntaxError)
* [TypeError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
* [URIError](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/URIError)
* [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
* [Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy)
