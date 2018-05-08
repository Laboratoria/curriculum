# Ejercicios libres

* Tipo: `practice`
* Formato: `self-paced`
* Duración: `40min`

***

Te dejamos también con una serie de ejercicios abiertos para que sigas
explorando por tu cuenta ;-)

***

Dado el siguiente código:

```html
<body>
  <div id="react-container">
    <p>
      Si ves esto React <strong>no</strong> está funcionando.
    </p>
  </div>

  <script>
    const DOM = React.DOM

    function Saludo(props) {
      return DOM.h1(null, 'Hola '+props.nombre)
    }

    ReactDOM.render(
      Saludo({ nombre: 'Mundo' }),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Explica por qué no se ve el mensaje *"Si ves esto React **no** está funcionando"*

***

Dado el siguiente codigo en `React`

```html
<body>
  <div id="react-container">
  </div>

  <script>
    const DOM = React.DOM

    function Cabecera(props) {
      const saludo = props.saludo;

      return DOM.div(null,
        DOM.h2(null, 'Cabecera'),
        DOM.h3(null, saludo)
        DOM.p(null,
          saludo,
          DOM.hr(null)
        )
        DOM.div(null, 'Chau!')
      )
    }

    const saludo = 'Mundo'

    ReactDOM.render(
      Cabecera({ saludo: saludo }),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Desarrolla en `html` el `DOM` resultante

***

Si en el código anterior modificamos

```js
const saludo = 'Mundo'
```

por

```js
const saludo = 'Amigx'
```

indica que sub-árboles serán reemplazados en el proceso de "reconciliación".

***

Implementa un ejemplo de composición con `React`

***

Supongamos que administramos una página web simple, que tiene la siguiente
estructura.

```html
<div id="main">
  <p>
    <h3>Titulo 1</h3>
    Descripcion 1
  </p>
  <p>
    <h3>Titulo 2</h3>
    Descripcion 2
  </p>
  <p>
    <h3>Titulo 3</h3>
    Descripcion 3
  </p>
</div>
```

Luego de algunos meses, nuestro cliente dice que quiere actualizar su web, para
que sea más semantica y nos solicita que la convirtamos a esta otra estructura:

```html
<section id="main">
  <article>
    <h3>Titulo 1</h3>
    <p>Descripcion 1</p>
  </article>
  <article>
    <h3>Titulo 2</h3>
    <p>Descripcion 2</p>
  </article>
  <article>
    <h3>Titulo 3</h3>
    <p>Descripcion 3</p>
  </article>
</section>
```

¿Con qué problema nos encontramos? ¿Y si en lugar de 3 `articles` en una
`section` hubieran sido 100 `articles` en `40` `sections`?

Propón una solución a ese problema con `React`.

***

Agrega comentarios al código de los ejercicios de esta unidad, para clarificar
qué esta sucediendo.
