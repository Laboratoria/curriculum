# JSX: Listas e `keys`

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Primeiro, recordemos como manipular listas no JavaScript.

Dado o código abaixo, usamos a função [`map()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) para tomar um array de números e dobrá-los. Atribuímos o novo array resultante do `map()` à variável `doubled` e o imprimimos:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
```

Isso imprime `[2, 4, 6, 8, 10]` no console.

En `React`, transformar arrays em lista de elementos é quase idêntico.

## Renderizando múltiplos componentes

O valor de um array é uma expressão válida de JavaScript. Portanto, podemos incluí-las em nosso `JSX` utilizando chaves `{}`.

No código abaixo, iteramos sobre o array `numbers` e retornamos um elemento `<li>` para cada item. Finalmente, atribuímos o array de elementos resultante ao `listItems`.

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => (<li>{number}</li>));
```

Então incluímos todo o array `listItems` dentro de um elemento `<ul>` e o renderizamos no `DOM`:

```js
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[Teste no CodePen](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

## Componente Lista Básico

É comum renderizar listas dentro de nosso componentes.

Vamos refatorar o exemplo anterior em um componente que aceite um array de número e retorne uma lista de quadrinhos.

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

Quando você executar esse código, verá que aparecerá uma advertência no console, dizendo que você deveria fornecer uma *key* quando cria uma lista de elementos. Na próxima seção, veremos por que é importante fazê-lo.

Então, atribuímos uma `key` aos itens de nossa lista dentro de `props.numbers.map()` e assim eliminamos a mensagem:

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

[Teste no CodePen](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

## Keys

As ***"keys"*** ajudam a identificar quais elementos de uma lista foram alterados, se foram adicionados ou excluídos. As *keys* devem ser indicadas dentro dos elementos de um array para atribuir-lhes uma identidade única:

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

A melhor maneira de escolher uma *key* é utilizando uma string que represente univocamente cada item do array. Em geral utilizaremos os ID's dos dados como *keys*:

```js
const todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Como último recurso, quando você não tem um ID único, você pode utilizar o índice do elemento dentro do array:

```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no unique IDs.
  <li key={index}>
    {todo.text}
  </li>
);
```

O uso de índices como *keys* **não** é recomendado, já que pode ser muito lento. Além disso, pode ser inconsistente em cenários nos quais a ordem dos elementos pode mudar. Se você quiser saber mais, veja [a explicação detalhada do porquê as *keys* são necessárias](https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children).

## Extraindo componentes com *keys*

As *keys* só têm sentido no contexto do array.

Por exemplo, se criarmos um componente `ListItem`, a chave deve ser indicada em cada `<ListItem />` do array em lugar do elemento `<li>` dentro de `ListItem`.

### Exemplo de uso incorreto

```js
function ListItem(props) {
  const value = props.value;
  return (
    // Errado! aqui não me faz falta alguma a *key*; o elemento <li> já tem uma identidade.
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Errado! Aqui é onde precisamos da *key*
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

### Exemplo de uso correto

```js
function ListItem(props) {
  // Correto! Não há necessidade de especificar uma *key*.
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correto! Aqui é onde precisamos da *key*.
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

[Teste no CodePen](https://codepen.io/rthor/pen/QKzJKG?editors=0010)

Como regra geral, considere que os elementos dentro de um `map()` sempre necessitam de *keys*.

> Mais adiante no curso veremos algumas características de ES6 que, somadas ao `JSX`, permitirão desenvolver aplicações de uma maneira mais "natural".
