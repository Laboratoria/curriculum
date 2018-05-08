# JSX: Listas y keys

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Primero recordemos cómo manipular listas en JavaScript.

Dado el código de abajo, usamos la función [`map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
para tomar un array de números y duplicarlos. Asignamos el nuevo array resultado
del `map()` a la variable `doubled` y lo imprimimos:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
```

Esto imprime `[2, 4, 6, 8, 10]` en la consola.

En `React`, transformar arrays en lista de elementos, es casi idéntico.

## Renderizando múltiples componentes

El valor de un array es una expresión válida de Javascript, por lo tanto podemos
incluirlas en nuestro JSX usando llaves `{}`.

En el código de abajo, iteramos sobre el array `numbers` y devolvemos un
elemento `<li>` para cada item. Finalmente, asignamos el array de elementos
resultante a `listItems`:

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => (<li>{number}</li>));
```

Luego incluimos todo el array `listItems` dentro de un elemento `<ul>` y lo
renderizamos en el DOM:

```js
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[Pruébalo en CodePen](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

## Componente Lista Básico

Es usual renderizar listas dentro de nuestros componentes.

Vamos a refactorizar el ejemplo anterior, en un componente que acepte un array
de números y devuelva una lista de viñetas.

```js
function NumberList(props) {
  const listItems = props.numbers.map(number => (<li>{number}</li>));
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
```

Cuando ejecutes este código, verás que aparecerá una advertencia en la consola,
diciendo que deberías proveer un *key* para los items de tu lista. Un "key" es
un atributo especial que necesitas incluir cuando creas una lista de elementos.
En la próxima sección, veremos por qué es importante hacerlo.

Entonces, asignemos un `key` a los items de nuestra lista dentro de
`props.numbers.map()` y asi deshacernos del mensaje.

```js
function NumberList(props) {
  const listItems = props.numbers.map(number => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
```

[Pruébalo en CodePen](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

## Keys

Las ***"keys"*** ayudan a React a identificar cuáles elementos de una lista han
cambiado, se han agregado o quitado. Las keys deben indicarse dentro de los
elementos de un array, para asignarles así una identidad estable:

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

La mejor manera de elegir un key, es usando un string que represente
unívocamente a cada ítem dentro del array. En general utilizaremos los IDs de la
misma data como keys:

```js
const todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Como último recurso, cuando no tienes un ID estable, puedes utilizar el índice
del elemento dentro del array:

```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

El uso de índices como keys es **no** recomendado, ya que puede ser muy lento,
además de ser inconsistente en escenarios donde el orden de los elementos puede
cambiar. Si quieres saber más, chequea
[la explicación al detalle de por qué los keys son necesarios](https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children).

## Extrayendo componentes con keys

Los keys sólo tienen sentido en el contexto del array.

Por ejemplo, si creamos un componente `ListItem`, el key debe ser indicado en
cada `<ListItem />` del array, en lugar de dentro del elemento `<li>` dentro de
`ListItem`.

### Ejemplo de uso incorrecto

```js
function ListItem(props) {
  const value = props.value;
  return (
    // Mal! aquí no me hace falta ningún key, el elemento <li> ya tiene una identidad
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Mal! Aquí es donde necesitamos el key
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
```

### Ejemplo de uso correcto

```js
function ListItem(props) {
  // Bien! No hay necesidad de especificar un key
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Bien! Aquí es donde lo necesitamos
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
```

[Pruébalo en CodePen](https://codepen.io/rthor/pen/QKzJKG?editors=0010)

Como regla general considera que los elementos dentro de un `map()` siempre
necesitan keys.

> Más adelante en el curso veremos algunas características de ES6 que, sumadas a
`JSX`, nos permitirán desarrollar nuestra aplicaciones, de una manera mucho mas
"natural".
