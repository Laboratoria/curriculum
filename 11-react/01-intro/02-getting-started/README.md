# Getting Started

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `12min`

***

Veamos como podemos comenzar a usar `React` inmediatamente dentro de nuestro
`html` existente.

En este ejemplo, éste será nuestro `html` base:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React: Getting Started</title>
    <!-- importamos unos estilos -->
    <!-- TODO: link base.css -->
    <link rel="stylesheet" href="../shared/css/base.css" />
  </head>
  <body>
    <h1>Getting Started</h1>
    <h2>Descripción</h2>
    <p>
      Cómo integrar react a páginas estáticas existentes
    </p>
  </body>
</html>
```

> NOTA:
>
> Para seguir esta lectura, abre tu editor de texto favorito (o algo tipo
> [JS Bin](https://jsbin.com/) o [CodePen](https://codepen.io)) y copia el html
> de arriba. Según vayamos avanzando modifica el código y ejecútalo para ver los
> resultados en tu navegador.

Como vimos anteriormente, `React` tiene su propia **"copia inteligente"** del
`DOM`, el `Virtual DOM`. Para poder mostrar al usuario el resultado de cada
cambio en el `Virtual DOM`, necesitamos definir un elemento contenedor
(`container`). Generalmente utilizamos un elemento `div` con un `id` que nos
permita identificarlo unívocamente.

```html
<body>
  <h1>Getting Started</h1>
  <h2>Descripción</h2>
  <p>
    Cómo integrar react a páginas estáticas existentes
  </p>
  <!-- NUESTRO CONTAINER -->
  <div id="react-container">

  </div>
</body>
```

Como con cualquier otra librería (por ejemplo `jQuery`), antes de poder utilizar
`React`, necesitamos importarlo en nuestra página. Para ello puedes descargarte
una [copia de `React`](https://facebook.github.io/react/downloads/https://github.com/facebook/react/releases/tag/v15.6.1)
y referenciar localmente los scripts; o, como haremos nosotros en este ejemplo,
puedes linkear directamente a los archivos publicados en un CDN, por ejemplo
[unpkg](https://unpkg.com).

```html
<head>
  ...
  <link rel="stylesheet" href="../shared/css/base.css" />
  <script src="https://unpkg.com/react@15/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
</head>
```

¡Ahora a crear nuestro primer componente!

Así como el `DOM` tiene *tags*, `React` tiene ***componentes***. Los componentes
son las *"piezas"* para construir nuestras interfaces y los declaramos a través
de ***funciones*** (o clases como veremos más adelante).

```html
<body>
  ...
  <div id="react-container">

  </div>
  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;

    function Cabecera() {
      const titulo = 'Hola Mundo';

      const elemento = div(null,
        h2(null, titulo),
      );

      return elemento;
    }

    ReactDOM.render(
      Cabecera(),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Veamos qué está sucediendo aquí:

Cada tag del DOM tiene un componente que lo representa en el mundo React.

```js
const div = React.DOM.div;
const h2 = React.DOM.h2;
```

Los componentes normalmente los definimos como funciones puras. Nuestro primer
componente será la `Cabecera` de la página.

```js
function Cabecera() {
  const titulo = 'Hola Mundo';

  // Creamos un elemento `div` "the React way"
  const elemento = div(null,
    h2(null, titulo),
  );

  // y ese es el resultado de nuestra funcion / componente
  return elemento;
}
```

Esto es análogo al siguiente codigo html:

```html
<div>
  <h2>Hola Mundo</h2>
</div>
```

Y por último, para que el usuario pueda verlo, insertamos el resultado en el
DOM:

```js
ReactDOM.render(
  Cabecera(),
  document.getElementById('react-container')
);
```

Verás que nuestro componente es una función sin parámetros. Uno de los mayores
beneficios que otorga el enfoque de componentes como funciones, es que a través
de los parametros que nosotros le pasemos a nuestra función, podemos modificar
dinámicamente el comportamiento del componente, permitiéndonos reutilizarlo.

En el mundo `React` a los parámetros de los componentes los denominamos
***propiedades*** (`props`).

```html
<body>
  ...
  <!-- ahora tendremos 2 contenedores -->
  <div id="cabecera-1"></div>
  <div id="cabecera-2"></div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;

    function Cabecera(props) {
      const titulo = 'Hola ' + props.saludo;

      const elemento = div(null,
        h2(null, titulo),
      );

      return elemento;
    }

    ReactDOM.render(
      Cabecera({ saludo: 'Mundo' }),
      document.getElementById('cabecera-1')
    );

    ReactDOM.render(
      Cabecera({ saludo: 'Amigx' }),
      document.getElementById('cabecera-2')
    );
  </script>
</body>
```

Ahora nuestra función recibe un parametro `props`, que es un objecto. Cada llave
de `props`, es una propiedad de nuestro componente.

Así como en el `DOM` los tags tienen *atributos*, en `React` los componentes
tienen ***propiedades***:

```js
function Cabecera(props) {
  // usamos la propiedad "saludo"
  const titulo = 'Hola ' + props.saludo;

  const elemento = div(null,
    h2(null, titulo),
  );

  return elemento;
}
```

Una vez que nuestro componente está parametrizado, podemos reutilizarlo
modificando el valor de `saludo`:

```js
ReactDOM.render(
  Cabecera({ saludo: 'Mundo' }),
  document.getElementById('cabecera-1')
);

ReactDOM.render(
  Cabecera({ saludo: 'Amigx' }),
  document.getElementById('cabecera-2')
);
```

## Ejemplos

Y por último te dejamos 2 ejemplos más entrenidos para que analices cómo
funcionan. Copia o escribe el código de cada ejemplo en tu editor favorito,
ejecútalo, juega y añade `console.log`s para ver qué está ocurriendo. Toma nota
de tus preguntas para compartirlas con el resto de la clase más adelante en
el solucionario de esta unidad.

### Elementos nativos anidados

```html
<body>
  <div id="cabecera">
    <p>
      Si ves esto React <strong>no</strong> está funcionando.
    </p>
  </div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;
    const p = React.DOM.p;
    const a = React.DOM.a;
    const b = React.DOM.b;
    const br = React.DOM.br;

    function Cabecera(props) {
      const titulo = 'Saludo';

      return div(null,
        h2(null, titulo),
        p(null,
          "Hola ", b(null, props.saludo), ".", br(null),
          "Un link? ", br(null),
          a({href:"http://laboratoria.la"}, "Laboratoria"), "!"
        )
      );
    }

    ReactDOM.render(
      Cabecera({ nombre: 'Mundo' }),
      document.getElementById('cabecera')
    );
  </script>
</body>
```

### Renderizado dinámico con atributos

```html
<body>
  <div id="timer">
    <p>
      Si ves esto React <strong>no</strong> está funcionando.
    </p>
  </div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;
    const p = React.DOM.p;

    function Timer(props) {
      const transcurrido = Math.round(props.transcurrido  / 100);
      const segundos = transcurrido / 10 + (transcurrido % 10 ? '' : '.0' );
      const mensaje = 'React ha estado corriendo por ' + segundos + ' segundos.';

      const borderColor = transcurrido % 2 === 0 ? 'red' : 'blue';
      const containerStyle = {
        border: '3px solid ' + borderColor,
        padding: 10
      };

      return div({ style: containerStyle },
        h2(null, "Timer"),
        p(null, mensaje)
      );
    }

    const start = new Date().getTime();
    setInterval(function () {
      ReactDOM.render(
        Timer({ transcurrido: new Date().getTime() - start }),
        document.getElementById('timer')
      );
    }, 50);
  </script>
</body>
```

## Referencias

* [Documentacion oficial](https://facebook.github.io/react/) (en inglés)
* [Recursos de `React` en español](https://github.com/jlobos/react-espanol)
