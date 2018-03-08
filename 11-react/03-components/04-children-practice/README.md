# Ejercicios: children

* Tipo: `práctica`
* Formato: `self-paced`
* Duración: `30min`

***

Implementa composción, a través de `children`, en los componentes que consideres
necesario del ejemplo que venimos siguiendo. Por ejemplo, imáginemos que tenemos
un componente `Page` que renderiza un `<div>` con otros componentes dentro. Algo
así:

```js
const Page = ({
  headerTitulo,
  headerDescripcion,
  mainSectionTitulo,
  mainSectionArticles,
  asideTitulo,
  asideLinks
}) => (
  <div style={{ background: 'pink', padding: 20 }}>
    <Header titulo={headerTitulo} descripcion={headerDescripcion} />
    <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
    <Aside titulo={asideTitulo} links={asideLinks} />
  </div>
);
```

Ahora queremos que `Page` puede en realidad mostrar cualquier cosa, no solamente
la estructura que tenemos de `Header`, `MainSection` y `Aside`. Para ello
podemos refactorizar el componente en un contenedor que reciba el _contenido_
dinámicamente como `children`. De esta forma podemos anidar etiquetas JSX de
forma natural y definir el contenido de `Page` desde afuera (en este ejemplo
desde un componente llamado `Main`):

```js
const Main = ({
  headerTitulo,
  headerDescripcion,
  mainSectionTitulo,
  mainSectionArticles,
  asideTitulo,
  asideLinks
}) => (
  <Page>
    <Header titulo={headerTitulo} descripcion={headerDescripcion} />
    <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
    <Aside titulo={asideTitulo} links={asideLinks} />
  </Page>
);
```

La implementación del componente `Page` quedaría así:

```js
const Page = ({ children }) => (
  <div style={{ background: 'pink', padding: 20 }}>
    {children}
  </div>
);
```

***

## Distintos `hijos` con comportamiento similar

Desarrolla un componente `Lista` que dado el siguiente código `jsx`

```html
  <Lista>
    <span>Child 1</span>
    <strong>Child 2</strong>
    <a href="#">Child 3</a>
    <em>Child 4</em>
  </Lista>
```

retorne

```html
<ul>
  <li><span>Child 1</span></li>
  <li><strong>Child 2</strong></li>
  <li><a href="#">Child 3</a></li>
  <li><em>Child 4</em></li>
</ul>
```

***

## Plantilla

Desarrolla una plantilla que permita crear múltiples `Paginas` distintas que
compartan un `Header` y un `Footer`, solo definiendo el contenido que es
diferentes. Por ejemplo:

```html
<Pagina titulo="Seccion">
  <section>
    <h3>Titulo de una seccion</h3>
    <p>Lorem...</p>
  </section>
</Pagina>
```

retorna algo parecido a esto

```html
  <div class="pagina">
    <header>
      <h1 class="brand">Nombre fijo</h1>
      <h2 class="titulo">Seccion</h2>
    </header>
    <section>
      <h3>Titulo de una seccion</h3>
      <p>Lorem...</p>
    </section>
    <footer>
      <small>Algunos derechos reservados</small>
    </footer>
  </div>
```

Y lo siguiente

```html
<Pagina titulo="Lista de elementos">
  <ul>
    <li>elemento 1</li>
    <li>elemento 2</li>
    <li>elemento 3</li>
  </ul>
</Pagina>
```

retorna

```html
  <div class="pagina">
    <header>
      <h1 class="brand">Nombre fijo</h1>
      <h2 class="titulo">Seccion</h2>
    </header>
    <ul>
      <li>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
    </ul>
    <footer>
      <small>Algunos derechos reservados</small>
    </footer>
  </div>
```
