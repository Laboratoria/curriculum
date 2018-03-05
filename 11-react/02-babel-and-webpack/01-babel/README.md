# Babel y ES6

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## ¿Qué es `Babel` y para qué sirve?

`Babel` es un ***transpilador***. Un *transpilador* es un tipo de compilador que
toma como input código escrito en un lenguaje de programación y como resultado
nos da un código análogo al original, pero en otro lenguaje de programación.

`Babel` en particular es un transpilador que toma como input código `ES6`
(lenguajes soportados de manera parcial por los navegadores modernos y nodejs) y
nos da como resultado código `ES5` standard que podemos ejecutar en cualquier
entorno JavaScript. Esto nos permite comenzar a utilizar todos los beneficios y
extensiones que proponen las nuevas versiones de `ECMAScript`, **hoy**.

***

**NOTA:**

En este curso sólo exploraremos las características de `ES6`, que son
especialmente útiles para el desarrollo en `React`, pero `ECMAScript` es
muchísimo más que eso. Aquí te dejamos unos recursos por si quieres profundizar
en el tema:

* [es6-features.org](http://es6-features.org)
* [Exploring ES6](http://exploringjs.com/es6/index.html)

***

Veamos algunos ejemplos:

* Funciones "flecha" (arrow functions)

  input:

  ```js
  [1, 2, 3].map(n => n ** 2);
  ```

  output:

  ```js
  [1, 2, 3].map(function (n) {
    return Math.pow(n, 2)
  });
  ```

* Asignación "desestructurada" (destructuring):

  input:

  ```js
  var [a,,b] = [1,2,3];
  ```

  output:

  ```js
  var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[2];
  ```

* Operador de propagación (spread operator):

  input:

  ```js
  const x = [1, 2, 3];
  foo([...x]);
  ```

  output:

  ```js
  var x = [1, 2, 3];
  foo([].concat(x));
  ```

* Definiciones abreviadas de Objetos (shorthand properties):

  input:

  ```js
  var obj = {
    shorthand,
    method() {
      return '😀';
    }
  };
  ```

  output:

  ```js
  var obj = {
    shorthand: shorthand,
    method: function method() {
      return '😀';
    }
  };
  ```

* Interpolación de `Strings`:

  input:

  ```js
  var nombre = 'World';
  var lugar = 'Lima';

  `Hello ${nombre}, vamos pa' ${lugar}?`;
  ```

  output:

  ```js
  var nombre = 'World';
  var lugar = 'Lima';

  'Hello ' + nombre + ', vamos pa\' ' + lugar + '?';
  ```

* Declaración de variables con `let` y `const`:

  input:

  ```js
  let referenciaVariable = 'Este string se puede modificar';
  const referenciaFija = 'Este string no se puede modificar';
  ```

  output:

  ```js
  var referenciaVariable = 'Este string se puede modificar';
  var referenciaFija = 'Este string no se puede modificar';
  ```

### Presets

Para agrupar los diferentes features que queremos que `babel` entienda, usamos
los *presets*. Los presets nos permiten especificar qué versión de `ECMAScript`
queremos utilizar.

Aquí una pequeña lista de presets populares:

* [env](http://babeljs.io/docs/plugins/preset-env/) (la última versión aprobada)
* [es2015](http://babeljs.io/docs/plugins/preset-2015/) (este usaremos nosotros)
* [es2016](http://babeljs.io/docs/plugins/preset-2016/)
* [es2017](http://babeljs.io/docs/plugins/preset-2017/)
* [react](http://babeljs.io/docs/plugins/preset-env/) (este también usaremos nosotros)

Si quieres saber más de [babel](http://babeljs.io/), visita su
[documentación](https://babeljs.io/docs/setup/). Para conocer todos los
*features* soportados, chequea las [lista de plugins y presets](https://babeljs.io/docs/plugins/).

## Usando `Babel` en nuestro ejemplo

Ya tienes todos tus componentes declarados en `JSX`, ahora veremos algunas
características de `ES6` que nos serán bien útiles en `React`.

La primera herramienta que usaremos, son las funciones flecha (*arrow
functions*), esta mejora sintáctica nos permite escribir nuestras funciones de
una manera mas concisa.

Entonces, por ejemplo, la siguiente función:

```js
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </header>
  );
};
```

se convierte en

```js
const Header = props => (
  <header>
    <h1>{props.titulo}</h1>
    <p>{props.descripcion}</p>
  </header>
);
```

Las *funciones flecha* otorgan principalmente 3 beneficios:

1. Definen una **sintaxis concisa**
2. Tienen **retorno implícito** cuando el cuerpo de la función es solo una expresión
3. **No efectúan un `re-bind` de `this`**, cuando son usadas dentro de otra función

***

**NOTA:**

Para conocer más al detalle los beneficios y características de las *funciones
flecha*, te recomendamos los siguientes recursos:

* [*Funciones Flecha* en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)
* [*JavaScript Arrow Functions Introduction* por Wes Bos](http://wesbos.com/arrow-functions/)

***

Luego, para detallar en la cabecera de nuestros componentes, cuáles son las
`props` que espera, usaremos parámetros nombrados (*named parameters*).
Utilizando esta técnica, el código anterior se convierte en lo siguiente:

```js
const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </header>
);
```

Hemos reemplazando la definición del parámetro `props`, por una definición de su
forma, lo cual agrega legibilidad a la definición de nuestro componente,
estableciendo claramente cuales son las `props` que espera, en este caso
`titulo` y `descripcion`.

Y por último haremos uso del operador de propagación (*spread operator*), para
facilitar la inyección dinámica de propiedades a nuestros componentes.

Por ejemplo, dado el siguiente caso

```js
const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </header>
);

// Estas son las props que queremos inyectar
const headerProps = { titulo: 'Titulo', descripcion: 'Descripcion' };

// La manera directa de inyectarle las propiedades al componente seria la sgte:
<Header titulo={headerProps.titulo} descripcion={headerProps.descripcion} />

// Una manera más directa y menos verborrágica de hacerlo, es la sgte:
<Header {...headerProps} />

// Esta última opción es particularmente útil cuando no sabemos a priori
// qué estructura tiene `headerProps`
```

Ten en cuenta que **ambas expresiones** son **equivalentes**.

## Ejercicio

Continua con la conversión de todos tus componentes usando los características
de ES6 que acabamos de ver.

En la próxima lectura vamos a extraer nuestro código `React` fuera de nuestro
archivo `html`, y así comenzar a modularizar nuestra aplicación.
