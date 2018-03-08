# Ejercicio: Migrar a JSX

* Tipo: `práctica`
* Formato: `self-paced`
* Duración: `10min`

***

Vamos a continuar con el ejercicio anterior, donde construimos una interfaz
usando `React` y `ReactDOM` a partir de un HTML. En este ejemplo, la _data_ que
estamos representando en nuestra interfaz se podría organizar de la siguiente
manera:

```js
const data = {
  headerTitulo: 'Getting Started',
  headerDescripcion: 'Descripcion',
  mainSectionTitulo: 'Main Section',
  articles: [
    { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
    { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
    { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
  ],
  asideTitulo: 'Links',
  links: [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ],
};
```

El reto ahora es re-escribir la misma página que en el ejercicio anterior,
usando este objeto de datos como punto de partida, y esta vez haciendo uso
de JSX en vez de usar `React.DOM.div` y compañía.

Continuando el ejercicio anterior, ahora nos toca configurar la página, para que
comience a entender `JSX`. Hay varias formas de hacer esto, pero nosotros lo que
haremos es incluir una dependencia a un script de `babel`, que entre otras cosas
entiende `JSX`, y crearemos nuestro `script`, con una anotación especial, para
que `babel` entienda que es su responsabilidad procesarlo.

Entoces, necesitamos agregar la siguiente dependencia:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
```

Y anotar nuestro tag `script` donde vamos a implementar nuestro código, como
type `text/babel`:

```html
<script type="text/babel">
  // aqui el codigo de tus componentes
</script>
```

Si refrescas tu página, nada debería haber cambiado, ya que todo el código ES5
es compatible con ES6.

Terminada la configuración, ahora nuestra tarea será deshacernos de todas las
referencias a `React.DOM` y las llamadas directas a nuestros componentes,
reemplazando todas ellas por código `JSX`.

Entonces, por ejemplo, el siguiente código

```js
function Header(props) {
  return DOM.header(null,
    DOM.h1(null, props.titulo),
    DOM.p(null, props.descripcion)
  );
}
```

se convierte en

```js
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </header>
  )
}
```

y

```js
const articles = props.articles.map(function (it) {
  return Article(it);
})
```

se convierte en

```jsx
const children = props.articles.map(function (a) {
  return <Article titulo={a.titulo} descripcion={a.descripcion} />
})
```

## Boilerplate

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ejemplo básico con JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Ejemplo básico con JSX</h1>
    <div>
      <h4>Detalles</h4>
      <p>
        Esta aplicación esta escrita usando JSX y transformada a través de Babel
        en es5 directamente desde el navegador
      </p>
    </div>
    <hr />
    <div id="container">
      <p>
        Si ves esto React <strong>no</strong> está funcionando.
      </p>
    </div>
    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
    <script type="text/babel">
      const data = {
        headerTitulo: 'Getting Started',
        headerDescripcion: 'Descripcion',
        mainSectionTitulo: 'Main Section',
        articles: [
          { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
          { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
          { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
        ],
        asideTitulo: 'Links',
        links: [
          { href: '#', texto: 'Link 1'},
          { href: '#', texto: 'Link 2'},
          { href: '#', texto: 'Link 3'},
          { href: '#', texto: 'Link 4'},
          { href: '#', texto: 'Link 5'}
        ],
      };

      ReactDOM.render(
        <Page
          headerTitulo={data.headerTitulo}
          headerDescripcion={data.headerDescripcion}
          mainSectionTitulo={data.mainSectionTitulo}
          mainSectionArticles={data.articles}
          asideTitulo={data.asideTitulo}
          asideLinks={data.links}
        />,
        document.getElementById('container')
      );
    </script>
  </body>
</html>
```
