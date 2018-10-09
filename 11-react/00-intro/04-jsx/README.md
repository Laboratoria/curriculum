# JSX

* Tipo: `leitura`
* Formato: `individual`
* Duração: `4min`

***

## O que é e para que serve?

`JSX` é uma extensão da linguagem JavaScript que adiciona estruturas sintáticas que permitem trabalhar mais facilmente e de uma maneira mais natural com o código de `React`.

Graças à `JSX`, desenvolver interfaces com componentes se torna tão natural quanto escrever `HTML`.

## Migrando para JSX

Continuando com o exemplo com o que começamos nesta unidade, nossa primeira implementação do componente `Cabecalho` era mais ou menos assim:

```js
function Cabecalho(props) {
  const titulo = 'Saudação';

  return React.DOM.div({ style: { borderColor: 'red' } },
    React.DOM.h2(null, titulo),
    React.DOM.p(null,
      "Olá ", React.DOM.b(null, props.nome), ".", React.DOM.br(null),
      "Um link? ", React.DOM.br(null),
      React.DOM.a({ href:"http://laboratoria.la" }, "Laboratoria")
    )
  );
}

ReactDOM.render(
  Cabecalho({ nome: 'Mundo' }),
  document.getElementById('cabecalho')
);
```

Com `JSX` escreveríamos desta maneira:

```jsx
function Cabecalho(props) {
  const titulo = 'Saudação';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Olá, <b>{props.nome}</b>.<br />
        Um link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecalho nome="Mundo" />,
  document.getElementById('cabecera')
);
```

Muito mais elegante, não?

***

Certamente, se você tentar executar o script anterior, o navegador disparará um erro. Isso acontece porque o navegador ainda não entende `JSX`. Na próxima leitura veremos como fazer o navegador entender `JSX`.

***

## Expressões

Olhe como injetamos [expressões JavasScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) dentro de nossas tags, usando chaves (`{}`). Neste caso, `titulo`:

```jsx
const titulo = 'Saudação';

return (
  // ...
    <h2>{titulo}</h2>
  // ...
)
```

Uma expressão é basicamente qualquer unidade de código que referencia um valor. Todas as seguintes são expressões válidas: `2 + 2`, `user.email`, `formatDate(new Date())`.
