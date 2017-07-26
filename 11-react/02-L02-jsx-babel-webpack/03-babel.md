# `Babel` y `ES6`

## ¿Qué es `Babel` y para qué sirve?

`Babel` es un ***transpilador***. Un *transpilador* es un tipo de compilador que toma como input código escrito en un lenguaje de programación y como resultado nos da un código análogo al original, pero en otro lenguaje de programación.

`Babel` en particular es un transpilador que toma como input código `ES6` (lenguajes soportados de manera parcial por los navegadores modernos y nodejs) y nos da como resultado código `ES5` standard que podemos ejecutar en cualquier entorno JavaScript. Esto nos permite comenzar a utilizar todos los beneficios y extensiones que proponen las nuevas versiones de `ECMAScript`, **hoy**.

> En este curso sólo exploraremos las características de `ES6`, que son especialmente útiles para el desarrollo en `React`, pero `ECMAScript` es muchísimo mas que eso. Aquí te dejamos unos recursos por si quieres profundizar en el tema:
- [es6-features.org](http://es6-features.org)
- [Exploring ES6](http://exploringjs.com/es6/index.html)


Veamos algunos ejemplos:

- Funciones "flecha" (arrow functions)

  input:
  ```javascript
  [1, 2, 3].map(n => n ** 2);
  ```
  output:
  ```javascript
  [1, 2, 3].map(function(n) {
    Math.pow(n, 2)
  });
  ```
- Asignación "desestructurada" (destructuring):

  input:
  ```javascript
  var [a,,b] = [1,2,3];
  ```
  output:
  ```javascript
  var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[2];
  ```
  
- Operador de propagación (spread operator):

  input:
  ```javascript
  const x = [1, 2, 3];
  foo([...x]);
  ```
  output:
  ```javascript
  var x = [1, 2, 3];
  foo([].concat(x));
  ```
  
- Definiciones abreviadas de Objetos (shorthand properties):

  input:
  ```javascript
  var obj = {
    shorthand,
    method() {
      return "😀";
    }
  };
  ```
  output:
  ```javascript
  var obj = {
    shorthand: shorthand,
    method: function method() {
      return "😀";
    }
  };
  ```

- Interpolación de `Strings`:

  input:
  ```javascript
  var nombre = "World";
  var lugar = "Lima";

  `Hello ${nombre}, vamos pa' ${lugar}?`;
  ```
  output:
  ```javascript
  var nombre = "World";
  var lugar = "Lima";

  "Hello " + nombre + ", vamos pa' " + lugar + "?";
  ```

- Declaración de variables con `let` y `const`:

  input:
  ```javascript
  let referenciaVariable = "Este string se puede modificar";
  const referenciaFija = "Este string no se puede modificar";
  ```
  output:
  ```javascript
  var referenciaVariable = "Este string se puede modificar";
  var referenciaFija = "Este string no se puede modificar";
  ```

> Si quieres saber más de [babel](http://babeljs.io/), visita su [documentación](https://babeljs.io/docs/setup/). Para conocer todos los *features* soportados, chequea la siguiente [lista de plugins](https://babeljs.io/docs/plugins/).

## Usando `Babel` en nuestro ejemplo

Ya tienes todos tus componentes declarados en `JSX`, ahora veremos algunas características de ES6 que nos serán bien útiles en `React`.

La primera herramienta que usaremos, son las funciones flecha (*arrow functions*), esta sintaxis nos permite escribir nuestras funciones de una manera mas concisa.

Entonces, por ejemplo, la siguiente función:
```javascript
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </header>
  )
}
```

se convierte en

```javascript
const Header = (props) => (
  <header>
    <h1>{props.titulo}</h1>
    <p>{props.descripcion}</p>
  </header>
)
```

Las *funciones flecha* otorgan principalmente 3 beneficios:
1. Definen una **sintaxis concisa**
2. Tienen **resultados implícitos**
3. **No efectúan un `re-bind` de `this`**, cuando son usadas dentro de otra función

> Para conocer más al detalle los beneficios y características de las *funciones flecha*, te recomendamos los siguientes recursos:
- [*Funciones Flecha* en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)
- [*JavaScript Arrow Functions Introduction* por Wes Bos](http://wesbos.com/arrow-functions/)

Luego, para detallar en la cabecera de nuestros componentes, cuáles son las `props` que espera, usaremos parámetros nombrados (*named parameters*). Utilizando esta técnica, el código anterior se convierte en lo siguiente:

```javascript
const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </header>
)
```

Hemos reemplazando la definición del parámetro `props`, por una definición de su forma, lo cual agrega legibilidad a la definición de nuestro componente, estableciendo claramente cuales son las `props` que espera, en este caso `titulo` y `descripcion`.

Y por último haremos uso del operador de propagación (*spread operator*), para facilitar la inyección dinámica de propiedades a nuestros componentes.

Por ejemplo, dado el siguiente caso
```javascript
const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </header>
)

// Estas son las props que queremos inyectar
const headerProps = { titulo: 'Titulo', descripcion: 'Descripcion'}

// La manera directa de inyectarle las propiedades al componente seria la sgte:
<Header titulo={headerProps.titulo} descripcion={headerProps.descripcion} />

// Una manera más directa y menos verborrágica de hacerlo, es la sgte:
<Header {...headerProps} />

// Esta última opción es particularmente útil cuando no sabemos a priori
// que estructura tiene `headerProps`
```

Ten en cuenta que **ambas expresiones** son **equivalentes**.

## Ejercicio

Continua con la conversión de todos tus componentes usando los características de ES6 que acabamos de ver.

> En la próxima lectura vamos a extraer nuestro código `React` fuera de nuestro archivo `html`, y así comenzar a modularizar nuestra aplicación.
