# Children (componentes hijos)

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Intro

Si hacemos una analogía entre `React` y `HTML`, podemos decir que las `props`
de `React` es el mecanísmo análogo que usamos en `HTML` para definir los
atributos de los tags. Pero ahora bien, ¿qué sucede con las etiquetas anidadas
dentro de otras etiquetas que teníamos en `HTML`? Para ello existe la propiedad
especial `children`.

`React` tiene un modelo de composición muy poderoso, que nos permite anidar
`componentes`, como si anidáramos tags `HTML`. La composición es el método
indicado para reusar al máximo nuestros componentes.

A diferencia de los `children` del `DOM` y como estamos trabajando en el mundo
`JavaScript`, podemos manipular los *"hijos"* (`children`) de nuestro
componentes: enviarles nuevas `props` o modificarlas, decidir cuál de ellos
queremos renderizar y cuáles no y, en general, clonarlos y modificarlos como nos
de la gana.

## Composición sobre Herencia

Si hablamos de reutilización de código a través de composición, un caso muy
común son por ejemplo un *Sidebar* o un *Diálogo* que representan *cajas*
genéricas donde el usuario decide qué contenido colocar.

A la hora de definir nosotros un componente *contenedor* no sabemos a ciencia
cierta, qué tipo de *hijos* nos van a enviar el usuario a la hora de usarlo.

Es en este tipo de casos en el que es recomendado el uso de la propiedad
especial `children`, donde sabemos que esperamos componentes *hijos*, pero no
sabemos exactamente cuáles o cómo son.

Veamos un ejemplo.

Tenemos el siguiente componente `ConBorde`

```js
// Componente que agrega un borde del color deseado alrededor de los `children`
const ConBorde = ({ color, children }) => (
  <div style={{ border: `solid 3px ${color}`}}>
    {children}
  </div>
);
```

Entonces el siguiente elemento `jsx`

```js
  <ConBorde color="blue">
    <h1>Bienvenido</h1>
    <p>Gracias por la visita</p>
  </ConBorde>
```

produce el siguiente `DOM`

```html
<div style="border: solid 3px blue">
  <h1>Bienvenido</h1>
  <p>Gracias por la visita</p>
</div>
```

### ¿Qué está sucediendo?

Cualquier cosa dentro del tag `jsx` `<ConBorde>` se pasa como parámetro al
componente a través de la propiedad `children`. En este caso `ConBorde` lo único
que hace es renderizar los `children` dentro de un `<div>` con un style
configurado en parte a través de una `prop` `color`.

En casos donde necesitas diferentes *"huecos"* en un componente, es mejor
utilizar tu propia convención en lugar de los `children`. Por ejemplo

```js
const SplitPane = ({ left, right }) => (
  <div className="SplitPane">
    <div style={{ float: 'left '}}>{left}</div>
    <div style={{ float: 'right '}}>{right}</div>
  </div>
);

const App = () => (
  <SplitPane
    left={<Contacts />}
    right={<Chat />}
    />
);
```

Elementos `React` como `<Contacts />` y `<Chat />` son solo objetos, por lo
tanto puedes pasarlos como una propiedad, al igual que cualquier otro tipo de
datos.

## Cualquier cosa puede ser un *hijo*

Podemos pasar **cualquier** expresión válida como `children`, esto incluye por
supuesto a las funciones.

Aquí un ejemplo de un componente que ejecuta un función pasada como parámetro:

```js
const Evaluador = ({ children }) => {
  // `children` es una función, simplemente la llamamos
  //             ↓
  return children();
};

/// y asi lo usaríamos
<Evaluador>
  {() => <h1>Hello World!</h1>}
</Evaluador>
```

Veamos un ejemplo más interesante con el mismo patrón. Imagínate un componente
que tiene que extraer información de un servicio externo. Una forma muy elegante
de hacerlo, sería la siguiente:

```js
<Fetch url="api.example.com">
  {result => <p>{result}</p>}
</Fetch>
```

No esperamos que a esta altura tu puedas ser capaz de implementar algo así, lo
importante es que entiendas que **cualquier cosa** puede ir dentro de
`children`.

## Manipulando `children`

Esta afirmación de que "**cualquier cosa** puede ir dentro de `children`",
hace que `children` sea una estructura de datos *"opaca"*. Como puede recibir
cualquier cosa, uno nunca puede asumir nada en relación a la forma que tendrá.

Para poder trabajar con la propiedad `children`, `React` provee un grupo de
funciones de ayuda para poder hacerlo de una manera "estándar",
independientemente del tipo final de `children`. Todas ellas son accesibles a
través de `React.Children`.

### Iteración de `children`

Las funciones mas "obvias" son `React.Children.map` y `React.Children.forEach`.
Funcionan exactamente como sus análogas de `Array`, con la diferencia de que
funcionan con cualquier tipo de datos, no solamente arrays.

```js
const IgnorarPrimerHijo = ({ children }) => (
  <div>
    {React.Children.map(children, (child, i) => {
      // Ignoramos el primer hijo
      if (i < 1) {
        return;
      }
      return child;
    })}
  </div>
);

<IgnorarPrimerHijo>
  <h1>Primero</h1>
  <h1>Segundo</h1> // <- Solo esto se muestra
</IgnorarPrimerHijo>
```

Fijate que en este caso nosotros podríamos haber usado directamente
`children.map` ya que hemos recibido un array de nodos, pero si en lugar de eso
hubiéramos recibido una función, el componente hubiera lanzado un error.

```text
TypeError: children.map is not a function
```

### Contando hijos

Como `children` puede ser de cualquier tipo, chequear cuántos `children` tiene
nuestro componente, se puede convertir en un problema. Al igual que en el caso
anterior, con solo llamar a `children.length` no alcanza para garantizar que no
haya error o el resultado sea el indicado.

Por ejemplo si pasamos como `children` el string *"Hello World!"*,
`children.length` devuelve 12!

Por eso es que existe `React.Children.count`:

```js
const ContadorDeHijos = ({ children }) => (
  <p>{React.Children.count(children)}</p>
);

// Devuelve la candidad de `children` idenpendientemente el tipo

// Renderiza "1"
<ContadorDeHijos>
  Uno!
</ContadorDeHijos>

// Renderiza "2"
<ContadorDeHijos>
  <p>Primero</p>
  <ComponenteHijo />
</ContadorDeHijos>

// Renderiza "3"
<ContadorDeHijos>
  {() => <h1>Primero!</h1>}
  Segundo!
  <p>Tercero!</p>
</ContadorDeHijos>
```

### Convirtiendo `children` en un auténtico `array`

Como último recurso si nada de lo anterior te funciona, siempre existe la opción
de forzar la transformación de los `children` en un `array` con
`React.Children.toArray`. De ahí ya puedes utilizar cualquier función o
estrategia propia de arrays. Esto puede ser útil por ejemplo para ordenarlos:

```js
const Ordenados = ({ children }) => {
  const aOrdenar = React.Children.toArray(children);
  return <p>{aOrdenar.sort().join(' ')}</p>;
};

<Sort>
  // Aquí usamos expresiones para garantizarnos
  // de recibir 3 strings,
  // en lugar de uno solo con todo concatenado
  {'naranjas'}
  {'plátanos'}
  {'manzanas'}
</Sort>

// Renderiza
// manzanas naranjas plátanos
```

## Forzar un único `children`

Analicemos el componente `<Evaluador />` de antes, que espera un sólo `children`
de tipo función.

```js
const Evaluador = ({ children }) => children();
```

Nosotros podemos definir a través de nuestro `propTypes` que esperamos que
`children` cumpla esas condiciones:

```js
Evaluador.propTypes = {
  children: PropTypes.func.isRequired,
}
```

En el caso de que el desarrollador usando nuestro componente, no cumpla con esa
condición, el componente intentará de seguir funcionando y solamente aparecerá
un mensaje de error en la consola, algo que es muy fácil de ignorar. Si para
nuestro componente es crítico que tenga uno y sólo un `children`, entonces
usamos `React.Children.only`.

```js
const Evaluador = ({ children }) => React.Children.only(children)();
```

Esta función devuelve el único hijo presente en `children`. Si hay más de uno
lanza un **error** que **bloquea** el ciclo de **renderizado**, una
advetertencia imposible de ignorar.

## Resumen

Los `children` hacen que `React` se sienta como un auténtico lenguaje de markup
y no como un montón de entidades sueltas escritas en `jsx`. Usar las funciones
de `React.Children` nos permite tomar completo control sobre nuestro componente,
permitiéndonos crear APIs más declarativas y menos propensas a errores.
