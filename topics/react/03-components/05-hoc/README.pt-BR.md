# Higher-order Components

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Ya tenemos una aplicación estática modelada con componentes de `React`, muy
modernos y mantenibles, pero carecemos de algo fundamental que cualquier
aplicación moderna necesita: interacción y memoria.

Más adelante en este curso veremos una forma de inyectar esa capacidad a
nuestros componentes con `Redux`, permitiéndonos mantener estos componentes
independientes y reutilizables.

Para llegar hasta `Redux`, comenzaremos con qué son los **HOC** (Higher-order
Components), veremos algunos casos de uso para entender el abanico infinito de
posibilidades que brindan. Luego, en la siguiente unidad, tendremos una
introducción a `Redux` y sus principios básicos, y veremos cómo usa el concepto
de _HOCs_ para escuchar eventos de los componentes, distribuirles los datos que
necesitan y orquestar el estado global de nuestra aplicación. Por último
realizaremos un proceso completo de diseño e implementación de un componente más
complejo, utilizando `React` y `Redux`.

## Higher-order Components (HOCs)

Los **Higher-order Components**, o _Componentes de grado superior_, o _HOCs_,
son una técnica avanzada en `React` para reusar la lógica de nuestra UI. Los
_HOCs_ no son parte de la API de `React`, sino que son un patrón de diseño
surgido dentro de la comunidad, inspirado en la naturaleza composicional de
`React`.

En resumidas cuentas los _HOCs_ son a los _componentes_, los que las
_Higher-order Functions_ son a las _funciones_: **un higher-order component es
una función que toma un componente como parámetro y retorna un nuevo
componente como resultado.**

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Mientras que un componente transforma `props` en UI (Virtual DOM), un _HOC_
transforma componentes en componentes.

En esta lectura veremos por qué son tan útiles los _HOCs_ y qué formas pueden
tomar.

### Usando HOCs para funcionalidades transversales (Cross-Cutting Concerns)

> En las primeras versiones de React, se recomendaba el uso de Mixins y quizás
todavía encuentres información sobre ellos. Hoy por hoy el uso de Mixins está
**des-recomendado**. [Mas info](/react/blog/2016/07/13/mixins-considered-harmful.html)

Los componentes son la unidad básica de reutilización de código en `React`. Sin
embargo, verás que hay situaciones en las que la naturaleza expresiva de
`React`, no resuelve muy bien el problema.

Por ejemplo, supongamos que tenemos un componente `CommentList` que se
subscribre a una fuente externa de datos y renderiza una lista de comentarios
para un usuario específico:

```js
const CommentList = ({ user }) => {
  const comments = DataSource.getComments(user);

  return (
    <div>
      {comments.map(comment => (
        <Comment comment={comment.text} key={comment.id} />
      ))}
    </div>
  );
};
```

Y luego, tenemos un componente que se subscribe a un blog, que también utiliza
al usuario para buscar los posts correspondientes:

```js
const BlogPostList = ({ user }) => {
  const posts = DataSource.getPosts(user)

  return (
    <div>
      {posts.map(post => (
        <TextBlock text={post.text} key={post.id} />
      ))}
    </div>
  );
};
```

`CommentList` y `BlogPostList` no son idénticos: llaman a diferentes métodos de
`DataSource` y renderizan distintos outputs, pero la mayoría de su
implementación es la misma:

* recoger un `user`
* llamar al metodo que corresponda de `DataSource` con `user`
* renderizar una lista como corresponda

Te podrás imaginar que en una aplicación grande, este patrón ser repite una y
otra y otra vez. Entonces lo que queremos es una abtracción que nos permita
definir esta lógica en un sólo lugar, y compartila entre varios componentes.
Aquí es donde los HOCs muestran su real valor.

Ya sabemos que `CommentList` y `BlogPostlist` se diferencian por:

* `DataSource.getComments` vs `DataSource.getPosts`
* `<TextBlock text={post} />` vs `<Comment comment={comment} />`

Entonces reescribamos nuestros componentes para que sólo se ocupen de la lógica
de renderizado y escribamos una nueva función `withData` que nos permita hacer
lo siguiente:

```js
const CommentList = ({ data }) => (
  <div>
    {data.map(comment => (
      <Comment comment={comment.text} key={comment.id} />
    ))}
  </div>
);

const BlogPostList = ({ data }) => (
  <div>
    {data.map(post => (
      <TextBlock text={post.text} key={post.id} />
    ))}
  </div>
);

const CommentListWithData = withData(
  CommentList,
  DataSource.getComments,
);

const BlogPostListWithData = withData(
  BlogPostList,
  DataSource.getBlogPost,
);
```

El primer parámetro de `withData` es el componente interno y el segundo es la
función a ejecutar para conseguir los datos.

Entonces, ahora cuando `CommentListWithData` y `BlogPostListWithData` se
rendericen, `CommentList` y `BlogPostList` recibirán una prop `data` con los
datos actualizados.

¿Cómo implementamos `withData`?

```js
// tenemos un estado global que guarda el usuario actual
const state = {
  user: 'USER_ID',
};

// Y esta función que recibe un componente
const withData = (WrappedComponent, selectData) => {
  // ... y retorna otro
  return props => {
    const data = selectData(state.user)
    return (
      <WrappedComponent data={data} {...props} />
    );
  };
};
```

O usando retornos implícitos (un poco más conciso):

```js
const withData = (WrappedComponent, selectData) => props => (
  <WrappedComponent data={selectData(state.user)} {...props} />
);
```

Nota que un _HOC_ no moodifica la interfaz del componente, ni tampoco usa
herencia para copiar su comportamiento. En lugar de eso un HOC *compone* el
componente original, *envolviéndolo (wrapping)* con un componente contenedor. Un
_HOC_ es una ***función pura sin efectos colaterales***.

Y listo! El componente interno recibe todo lo que necesita a través del
contenedor, y así ni el contenedor se preocupa en cómo se usa la data, ni el
componente interno se preocupa de cómo se consigue esta data. Completa
separación de intereses (_separation of concerns_).

Como `withData` es una función común y corriente, puedes dotarla de la interfaz
que más te convenga. Por ejemplo, en lugar de que la prop siempre se llame data,
puedes hacer que el nombre de la prop sea configurable. O podrías recibir el
usuario en lugar de obtenerlo de un state global. Todo esto y más es posible,
porque el HOC está en completo control de de la forma del contenedor y de cómo y
con qué parámetros renderizar al componente interno.

Como con los componentes regulares, el *"contrato"* entre `withData` y el
componente interno se basa enteramente en las props. Esto hace fácil cambiar un
_HOC_ por otro, siempre y cuando provea las mismas props al componente interno.
Esto puede ser muy útil por ejemplo, si cambiamos la forma en la que obtenemos o
guardamos nuestro usuario, o parámetros futuros que se agreguen a la API de
nuestra fuente de datos.

A continuación veremos algunas buenas prácticas y puntos a tener en cuenta, te
ahorrarán horas de debugging.

### Convención: Traspasar todas las props recibidas al componente interno

Los _HOCs_ agregar funcionalidades a los componentes y no deberían alterar
drásticamente su comportamiento. Se espera que el componente devuelto por un HOC
tenga una interfaz similar a la del componente interno.

Los HOCs deberían traspasar todas las props que no tengan diréctamente que ver
con su funcionalidad. La mayoría de HOCs suelen retornar un componente de la
siguiente forma:

```js
const HOC = (props) => {
  // Filtramos una prop extra que es específica de este HOC y no debería
  // ser traspasada
  const { extraProp, ...passThroughProps } = props;

  // Injectamos las props necesarias. Usualmente una valor del state global
  // o event listeners
  const injectedProp = someStateOrInstanceMethod(extraProp);

  // Pasamos las props al componente interno
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
};
```

Esta convención ayuda a asegurar que los HOCs sean tan flexibles y reutilizables
como sea posible.

### Convención: Maximizando la capacidad de composición

No todos los HOCs son iguales, a veces reciben un único argumento, el componente
interno:

```js
const NavbarWithRouter = withRouter(Navbar);
```

Otras veces aceptan parámetros adicionles, como por ejemplo en `Relay` donde es
necesario un parámetros de configuración:

```js
const CommentWithRelay = Relay.createContainer(Comment, config);
```

Pero la signatura más común de un HOC suele ser la siguiente:

```js
// React Redux's `connect`
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```

*Qué?!* Si lo divides por etapas es más fácil de entender.

```js
// connect es una función que retorna otra función
const enhance = connect(commentListSelector, commentListActions);
// La función devuelta es un HOC que retorna el componente ya connectado al
// `store` de Redux a través de un contenedor
const ConnectedComment = enhance(CommentList);
```

En otras palabras, `connect` es una _higher-order function_ que devuelve un
_higher-order component_!

Esta forma puede parecer confusa o innecesaria, pero tiene una capacidad muy
útil. Los HOCs con un sólo argumento, como los devueltos por `connect`, tienen
la siguiente signatura `Component => Component`. Las funciones donde el tipo de
su entrada es el mismo que el de su salida son muy fáciles de componer.

```js
// En lugar de encadenar las llamadas...
const EnhancedComponent = connect(commentSelector)(withRouter(WrappedComponent));

// ... usamos una función utilitaria de composición donde
// compose(f, g, h) es lo mismo que (...args) => f(g(h(...args)))
const enhance = compose(
  // Ambos son HOCs con un único argumento
  connect(commentSelector),
  withRouter,
)
const EnhancedComponent = enhance(WrappedComponent);
```

El utilitario `compose` es provisto por varias librerías incluyendo lodash
([`lodash.flowRight`](https://lodash.com/docs/#flowRight)),
[Redux](http://Redux.js.org/docs/api/compose.html), y
[Ramda](http://ramdajs.com/docs/#compose).

### Convención: Extrae el "Display Name" para mejor debuggeo

Los componentes contenedores creados por los HOCs se muestran en
[React Developer Tools](https://github.com/facebook/react-devtools) como
cualquier otro componente. Elige un `displayName` que comunique cuál es el
resultado del HOC.

La técnica más común es usar el `displayName` del componente interno. Entonces
si tu HOC se llama `withData`, y el componente interno `CommentsList`, usa algo
parecido a `WithData(CommentList)`:

```js
const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withData = (WrappedComponent) => {
  const WithData = props => {/* ... */};
  WithData.displayName = `WithData(${getDisplayName(WrappedComponent)})`;
  return WithData;
};
```

### A tener en cuenta

Los _HOCs_ vienen con algunos temas a tener en cuenta que no son obvios si eres
nueva en `React`.

#### No uses HOCs dentro del cuerpo de un componente

El algoritmo de reconciliaci[on de `React`, usa la identidad de los componentes
para determinar si debe actualizar un sub árbol del DOM o debe botarlo y montar
uno nuevo. Si el resultado del componente es identico (`===`) al componente del
ciclo anterior de renderizado, `React` recursivamente actualiza el sub árbol
comparando nodo a nodo. Si no son iguales, el árbol se descarta completamente.

Normalmente en `React`, esto es algo en lo que no deberías pensar, pero si es
importante cuando usas HOCs porque implica que no puedes aplicar un HOC a un
componente dentro del cuerpo de otro componente:

```js
render() {
  // Una nueva versión de EnhancedComponent es creada EN CADA renderizado
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // Esto ocasiona que todo el sub árbol
  // se descarte y vuelva a crearse cada vez!
  return <EnhancedComponent />;
}
```

En cambio, aplica los _HOCs_ fuera de la definición de los componentes para que
el componente contenedor sea creado una sola vez. Luego su idnetidad será
consistente a través de todos los renders, que es lo que generalmente deseas.

En casos raros cuando necsitas aplicar un _HOC_ dinámicamente, necesitas hacerlo
utilizando componentes OOP (usando clases) que veremos más adelante en este
curso.

#### Los métodos estáticos se deben copiar "a mano"

A veces es útil definir métodos estáticos en un componente de React.

Cuando aplicas un _HOC_ a un componente, el componente original es "envuelto"
por un componente contenedor. Esto implica que el nuevo componente no tiene
ninguno de los métodos estáticos del componente original.

```js
// Definimos un método estático
WrappedComponent.staticMethod = () => {/*...*/};
// Aplicamos el el HOC
const EnhancedComponent = enhance(WrappedComponent);

// El nuevo componente no tienen `staticMethod`
typeof EnhancedComponent.staticMethod === 'undefined'; // true
```

En estas situaciones, puedes copiar el método en el componente contenedor, antes
de retornarlo:

```js
const enhance = (WrappedComponent) => {
  class Enhance extends React.Component {/*...*/}
  // Debemos copiar el método explícitamente
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
};
```

El principal inconveniente con este enfoque, es que necesitas saber exactamente
cuál o cuáles son los métodos que necesitan ser copiados. Puedes usar por
ejemplo [hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics)
para copiar automáticamente los métodos estáticos más comunes que no están
relacionados con React:

```js
import hoistNonReactStatic from 'hoist-non-react-statics';
const enhance = (WrappedComponent) => {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
};
```

> Si quieres saber exactamente qué hace `hoist-non-react-statics`, chequea
[su código fuente](https://github.com/mridgway/hoist-non-react-statics/blob/master/index.js)

Otra posibilidad es exportar el método desde el componente.

```js
// En lugar de...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...lo exportamos independientemente...
export { someFunction };

// ...y luego lo usamos desde el HOC
import MyComponent, { someFunction } from './MyComponent.js';
```

## Resumen

En esta lectura hemos podido apreciar la gran versatilidad que tienen los
_HOCs_: la posibilidad de componer diferentes funcionalidades a través de
"capas", como las de una cebolla.

En la próxima lectura nos enfocaremos en un escenario particular que hace un uso
intensivo de los HOCs: `Redux`.

***

Fuentes:

* [Higher Order Components - Documentación oficial de React](https://facebook.github.io/react/docs/higher-order-components.html)
* [React Higher Order Components in depth - @franleplant en Medium](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)
