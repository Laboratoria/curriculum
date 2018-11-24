# ¿Qué es Babel?

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Babel es un compilador de Javascript

Babel es una herramienta que se usa principalmente para convertir código
ECMAScript 2015+ en código compatible hacia atrás con versiones de JavaScript
actualmente soportadas por navegadores antiguos y otros entornos.
Estas son los principales tareas que puedes realizar con Babel:

* Transformar syntaxis
* Aplicar "Polyfills" de funcionalidades faltantes en ciertos entornos
  (a través de [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill))
* Transformar tu código fuente (codemods)
* Y más! (revisa estos [videos](https://babeljs.io/videos.html) para más inspiración)

```js
// Input: arrow function de ES2015
[1, 2, 3].map((n) => n + 1);

// Output: Su equivalente en ES5
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

> Para saber más de compiladores, chequea el increíble tutorial
> [the-super-tiny-compiler](https://github.com/thejameskyle/the-super-tiny-compiler),
> que también explica a grandes rasgos cómo funciona Babel.

## ES2015 y más allá

Babel brinda soporte para las últimvas versiones de JavaScript a través de
"syntax transformers".

Estos [plugins](https://babeljs.io/docs/en/plugins) te permiten
usar *ahora mismo* nuevas funcionalidades sintácticas, sin tener que esperar a
que los navegadores o entornos brinden soporte.

## JSX y React

Babel también puede transformar sintaxis JSX! Chequea el [preset para React](https://babeljs.io/docs/en/babel-preset-react)
para comenzar.

Puedes instalar el preset con el siguiente comando

```shell
npm install --save-dev @babel/preset-react
```

y agregas `@babel/preset-react` a tu configuración de Babel
(más sobre en la próxima unidad) y ya puedes comenzar a utilizar JSX

```jsx
const Greeting = ({ to }) => (
  <div>Hello {to}</div>
);
```

se convierte en

```js
var Greeting = function Greeting(_ref) {
  var to = _ref.to;
  return React.createElement(
    "div",
    null,
    "Hello ",
    to
  );
};
```

> Más de JSX en su [documentación oficial](https://facebook.github.io/jsx/)

## Anotaciones de Tipos (para Flow y TypeScript)

Babel también puede encargarse que extraer tus anotaciones!
Revisa los presets para [Flow](https://babeljs.io/docs/en/babel-preset-flow)
o [TypeScript](https://babeljs.io/docs/en/babel-preset-typescript).
Recuerda que tanto typescript como flow deben seguir siendo utilizados para realizar
el chequeo de tipos, ya que Babel no se encarga de esa tarea.

Instalas el preset flow

```shell
npm install --save-dev @babel/preset-flow
```

y puedes comenzar a usar [Flow](https://flow.org/) manteniendo
tu código compatilble

```js
// @flow
const square = (n: number): number => {
  return n * n;
}
```

cuando Babel quita las anotaciones queda:

```js
var square = function square(n) {
  return n * n;
};
```

Análogamente para [Typescript](https://www.typescriptlang.org/)

```shell
npm install --save-dev @babel/preset-typescript
```

```js
function Greeter(greeting: string) {
    this.greeting = greeting;
}
```

se convierte en

```js
function Greeter(greeting) {
    this.greeting = greeting;
}
```

> Puedes experimentar con las transformaciones de sintaxis
> en [Babel REPL](https://babeljs.io/repl)

## Extensibilidad

Babel está construído a través de plugins.
Compone tu propia secuencia de transformaciones usando plugins existentes
o creando los tuyos propios.
Usa fácilmente un conjuto de plugin usando o creando presets
[preset](https://babeljs.io/docs/en/presets).

Para saber más sobre plugins → [https://babeljs.io/docs/en/plugins](https://babeljs.io/docs/en/plugins)

Si quieres crear tu propio plugin, te recomendamos
comenzar usando el
[generator-babel-plugin](https://github.com/babel/generator-babel-plugin)
para generar una plantilla.

```javascript
// Un plugin no es más que una función
export default function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // invierte el nombre: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      }
    }
  };
}
```
