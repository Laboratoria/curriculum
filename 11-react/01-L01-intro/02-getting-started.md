# Getting Started

Veamos como podemos comenzar a usar react inmediatamente en nuestro html existente

Este es nuestro html base:

```
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

Como vimos anteriormente `React` tiene su propia **"copia inteligente"** del `DOM`, el `Virtual DOM`. Para poder mostrar al usuario el resultado de cada cambio en el `Virtual DOM`, necesitamos definir un elemento contenedor (`container`). Generalmente utilizamos un elemento `div` con un `id` que nos permita identificarlo unívocamente.

```
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

Como con cualquier otra libreria (por ejemplo `jquery`), antes de poder utilizar `React`, necesitamos importarlo en nuestra pagina. Para ello puedes bajarte localmente una [copia de `React`](https://facebook.github.io/react/downloads/https://github.com/facebook/react/releases/tag/v15.6.1) y referenciar localmente los scripts, o como haremos nosotros, puedes linkear directamente a los archivos publicados en [unpkg](https://unpkg.com).

```
<head>
  ...
  <link rel="stylesheet" href="../shared/css/base.css" />
  <script src="https://unpkg.com/react@15/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
</head>
```

Ahora a crear nuestro primer componente.

Asi como el `DOM` tiene *tags*, `React` tiene ***componentes***. Los componentes son las *"piezas"* para contruir nuestras interfaces y los declaramos a través de ***funciones***.

```
<body>
  ...
  <div id="react-container">
  
  </div>
  <script>
    var div = React.DOM.div
    var h2 = React.DOM.h2
    
    function Cabecera() {
      var titulo = 'Hola Mundo';

      var elemento = div(null,
        h2(null, titulo),
      )
      
      return elemento
    }
    
    ReactDOM.render(
      Titulo(),
      document.getElementById('react-container')
    );
  <script>
</body>
```

Veamos qué está sucediendo aquí:

Cada tag del DOM tiene un componente que lo representa en el mundo React

```
var div = React.DOM.div
var h2 = React.DOM.h2
```

Los componentes son funciones. Nuestro primer componente será la "Cabecera" de la pagina

```
function Cabecera() {
  var titulo = 'Hola Mundo';

  // Creamos un elemento `div` "the React way"
  var elemento = div(null,
    h2(null, titulo),
  )
  
  // y ese es el resultado de nuestra funcion / componente
  return elemento
}
```

Esto es analogo al siguiente codigo html:
```
<div>
  <h2>Hola Mundo</h2>
</div>
```

Y por ultimo para que el usuario pueda verlo, insertamos el resultado en el DOM

```
ReactDOM.render(
  Titulo(),
  document.getElementById('react-container')
);
```

Veras que nuestro componente es una funcion sin parametros. Uno de los mayores beneficios que otorga el enfoque de componentes como funciones, es que a traves de los parametros que nosotros le pasemos a nuestra funcion, podemos modificar dinamicamente el comportamiento del componente, permitiendonos reutilizarlo.

En el mundo `React` a los parametros de los componentes los denominamos ***propiedades*** (`props`)

```
<body>
  ...
  <!-- ahora tendremos 2 contenedores -->
  <div id="cabecera-1">
  
  </div>
  <div id="cabecera-2">
  
  </div>

  <script>
    var div = React.DOM.div
    var h2 = React.DOM.h2
    
    function Cabecera(props) {
      var titulo = 'Hola ' + props.saludo;

      var elemento = div(null,
        h2(null, titulo),
      )
      
      return elemento
    }
    
    ReactDOM.render(
      Titulo({ saludo: 'Mundo' }),
      document.getElementById('cabecera-1')
    );
    
    ReactDOM.render(
      Titulo({ saludo: 'Amigx' }),
      document.getElementById('cabecera-2')
    );
  <script>
</body>
```

Ahora nuestra funcion recibe un parametro `props` que es un Objecto JSON. Cada llave de `props`, es una propiedad de nuestro componente.

```
function Cabecera(props) {
  // usamos la propiedad "saludo"
  var titulo = 'Hola ' + props.saludo;

  var elemento = div(null,
    h2(null, titulo),
  )
  
  return elemento
}
```

Una vez que nuestro componente esta parametrizado, podemos reutilizarlo modificando el valor de `saludo`

```
ReactDOM.render(
  Titulo({ saludo: 'Mundo' }),
  document.getElementById('cabecera-1')
);

ReactDOM.render(
  Titulo({ saludo: 'Amigx' }),
  document.getElementById('cabecera-2')
);
```

## Ejercicios

Y por último te dejamos 2 ejemplos mas entrenidos para que analices como funcionan. Al final de la leccion veremos cuanto has entendido de ellos.

Recuerda de utilizar los recursos recomendados:
- [Documentacion oficial](https://facebook.github.io/react/) (en ingles)
- [Recursos de `React` en español](https://github.com/jlobos/react-espanol)

### [L01.1] Elementos nativos anidados

```
<body>
  <div id="cabecera">
    <p>
      Si ves esto React <strong>no</strong> está funcionando.
    </p>
  </div>

  <script>
    var div = React.DOM.div
    var h2 = React.DOM.h2
    var p = React.DOM.p
    var a = React.DOM.a
    var b = React.DOM.b
    var br = React.DOM.br

    function Cabecera(props) {
      var titulo = 'Saludo';

      return div(null,
        h2(null, titulo),
        p(null,
          "Hola ", b(null, props.saludo), ".", br(null),
          "Un link? ", br(null),
          a( {href:"http://laboratoria.la"}, "Laboratoria"), "!"
        )
      )
    }
    
    ReactDOM.render(
      Titulo({ nombre: 'Mundo' }),
      document.getElementById('cabecera')
    );
  </script>
</body>
```

### [L01.2] Renderizado dinámico con atributos

```
<body>
  <div id="timer">
    <p>
      Si ves esto React <strong>no</strong> está funcionando.
    </p>
  </div>

  <script>
    var div = React.DOM.div
    var h2 = React.DOM.h2
    var p = React.DOM.p
    
    function Timer(props) {
      var transcurrido = Math.round(props.transcurrido  / 100);
      var segundos = transcurrido / 10 + (transcurrido % 10 ? '' : '.0' );
      var mensaje = 'React ha estado corriendo por ' + segundos + ' segundos.';

      var borderColor = transcurrido % 2 === 0 ? 'red' : 'blue'
      var containerStyle = {
        border: '3px solid ' + borderColor,
        padding: 10
      }

      return div({ style: containerStyle },
        h2(null, "Timer"),
        p(null, mensaje)
      )
    }

    var start = new Date().getTime();
    setInterval(function() {
      ReactDOM.render(
        Timer({ transcurrido: new Date().getTime() - start }),
        document.getElementById('timer')
      );
    }, 50);
  </script>
</body>
```
