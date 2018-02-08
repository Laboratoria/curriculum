# Variables, Tipos de datos y Operadores

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

<iframe src="https://goo.gl/Wh12VV" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

Una de las características más particulares de JavaScript, es el comportamiento
de los tipos de datos, porque conociendo su comportamiento nos permite entender
como se comportan nuestros datos durante la ejecución.

## ¿Qué es un tipo?

Básicamente los tipos definen el comportamiento que van a tener los datos.

> Un tipo es un conjunto integrado de características intrínsecas que
identifican el comportamiento de un valor particular y lo distingue de otros
valores, tanto para el motor (intérprete del lenguaje) y el desarrollador.

### ¿Qué tipos existen?

La especificación del lenguaje define los tipos:

#### string

El tipo `string` de Javascript es usado para representar datos textuales o
cadenas de caracteres. Es un conjunto de "elementos", de valores enteros sin
signo de 16 bits. Cada elemento ocupa una posición en el `string`. El primer
elemento está en el índice 0, el próximo está en el índice 1, y así
sucesivamente. La longitud de un `string` es el número de elementos en ella.

#### number

De acuerdo al standard ECMAScript, sólo existe un tipo numérico: el valor de
_doble precisión_ de 64-bits IEEE 754 (un número entre -(253 -1) y 253 -1). No
existe un tipo específico para los números enteros. Adicionalmente al ser capaz
de representar números de coma flotante, el tipo número tiene tres valores
simbólicos: `+Infinity`, `-Infinity` y `NaN` (Not A Number o No Es Un Número).

Para comparar valores mayores o menores que `+/-Infinity`, puedes usar las
constantes `Number.MAX_VALUE` o `Number.MIN_VALUE` y comenzando con `ES6`
también es posible revisar si un número está en el rango de coma flotante de
doble precisión usando `Number.isSafeInteger()` así como
`Number.MAX_SAFE_INTEGER` y `Number.MIN_SAFE_INTEGER`. Fuera de este rango los
números en javascript ya no son seguros de manipular.

El tipo número sólo tiene un valor entero que cuenta con dos representaciones: 0
es representado como -0 y +0. ("0" es un alias +0). Esto casi no tiene ningún
impacto. Por ejemplo +0 === -0 es true. Sin embargo, es posible notar esto
cuando se divide por cero.

#### boolean

Boolean representa una entidad lógica y puede tener dos valores: `true`, y
`false`.

#### null

El tipo `null` tiene exactamente un valor: `null`.

#### undefined

Una variable a la cual no se le haya asignado valor tiene entonces el valor
`undefined`.

#### object

En JavaScript los objetos pueden ser vistos como una colección de propiedades.
Con la sintaxis literal de objetos, un limitado grupo de propiedades son
inicializadas; luego pueden ser agregadas o eliminadas otras propiedades. Los
valores de las propiedades pueden ser de cualquier tipo, incluyendo otros
objetos lo cual permite construir estructuras de datos complejas. Las
propiedades se identifican usando claves. Una clave es un valor `string` o
`symbol`.

#### symbol

El `symbol` es un nuevo tipo en JavaScript introducido en la versión de `ES6`.
Un `symbol` es un valor primitivo único e inmutable y puede ser usado como la
clave de una propiedad de un objeto. En algunos lenguajes de programación, los
symbols son llamados átomos. Se pueden comparar con enumeraciones de nombres
(`enum`) en C.

Antes de continuar, es preciso decir que en JavaScript, las variables no tienen
tipos, Los valores son quienes los tienen. Las variables pueden almacenar
cualquier tipo de valor.

### Primitive vs. Reference

#### Primitivos

`string`, `number`, `boolean`, `null`, `undefined`.

Entendamos el comportamiento de estos. Cuando definimos un valor primitivo:

```js
let variable = 'hola'; // string
```

El nombre de la variable se instancia en su scope, y este nombre hace referencia
a la ubicación en memoria, donde está almacenado el valor.

Ahora, si asignamos esta variable a otra, el valor se copia, a otra posición en
memoria, y cada variable apunta a una ubicación distinta.

Este comportamiento, hace que si nosotros declaramos un valor primitivo dentro
de una variable con const, será inmutable, ya que este no podrá ser reasignado.

#### Por referencia

##### object

Los objetos definen subtipos, los cuales son: `String`, `Number`, `Boolean`,
`Object`, `Function`, `Array`, `Date`, `RegExp`, `Error`.

Cuando definimos un objeto:

```js
let obj = { nombre: 'Sebastián' };
```

El nombre de la variable se instancia en su scope, y este hace referencia al
objeto en memoria, este contiene una lista de sus propiedades, que a su vez
hacen referencia a donde están almacenados los valores.

Ahora, si asignamos `obj` a otra variable, el objeto al que hace referencia no
se va a copiar, lo que va a suceder, es que la nueva variable, es otra
referencia al mismo objeto.

```js
let obj2 = obj;
```

Por eso, si cambiamos la propiedad nombre de `obj2`, ambas variables apuntar al
mismo objeto, se va a cambiar también en `obj`.

```js
obj2.nombre = 'Javier';
console.log(obj.nombre); // Javier
```

Como vimos no todo en JavaScript es un objeto, pero si todos los valores se
relacionan a través de referencias/punteros, tener un entendimiento sólido de
como funcionan los diferentes tipos nos va a permitir entender como trabajar
con nuestros valores, sin llegar a tener mutaciones inesperadas.

Uno de los procesos que todos realizamos mientras programamos cada día es
comparar valores, si estos son iguales, diferentes, mayores, menores, etc, para
poder realizar acciones con estos.

Muchas veces en JavaScript obtenemos resultados de estas comparaciones que no
esperábamos y esto puede conducir a bugs en nuestro código, por esto es
importante entender el algoritmo que establece el lenguaje para esto.

```js
21 == '21'          // true
21 === '21'         // false
undefined == null   // true
undefined === null  // false
{} === {}           // false
NaN === NaN         // false
[10] == 10          // true
21 < '22'           // true
[22] > [21]         // true
```

Vamos paso a paso y entendamos esto.

Existen dos tipos principales de comparaciones: igualdades y desigualdades, el
resultado de cualquiera de estas es un booleano (`true` o `false`) reflejando la
relación entre los valores evaluados.

Una de las cosas que hace complejo este mecanismo es la `coerción`, la cual
convierte los tipos de datos según su contexto de uso (si es posible la
conversión).

Si no se entiende este mecanismos se pueden producir algunos resultados
inesperados sin saber porque sucede de esta manera.

```js
let numero = '24';              // string
let explicita = Number(numero); // number
let implicita = num * 2;        // numero ahora se usa como number
```

Existen valores que son implícitamente convertidos a false, estos son:

```js
'' // string vacio
0, -0, NaN
null, undefined
```

Otro mecanismo que se utiliza en las comparaciones en la conversión de objetos a
primitivos, es cuando se les compara a estos con un valor primitivo.

El mecanismo que se sigue para realizar esta conversión es:

* Si `.valueOf()` se puede usar, es llamado y devuelve un valor primitivo.
* Si `.toString()` se puede usar, es llamado y devuelve un valor primitivo.
* En otros casos devuelve un error.

> Nota: El mecanismo que normalmente se utiliza es `.toString()`.
