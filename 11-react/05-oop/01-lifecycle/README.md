# Estado local e ciclo de vida

* Tipo: `leitura`
* Formato: `individual`
* Duração: `20min`

***

Existem situações nas quais o uso de um estado global e compartilhado não é a forma ideal de expressar o estado de nosso componente, seja porque é muito complicado ou porque não queremos contaminar o estado global com estados internos de muito baixo nível, além de outros motivos.

Vejamos o exemplo a seguir:

```js
const relogio = ({ data }) => (
  <div>
    <h1>Olá, Mundo!</h1>
    <h2>São {data.toLocaleTimeString()}.</h2>
  </div>
);

const tick = () => {
  ReactDOM.render(
    <relogio data={new Date()} />,
    document.getElementById('root'),
  );
};

setInterval(tick, 1000);
```

[Teste o código no CodePen](https://codepen.io/merunga/pen/QMVPyb?editors=0010)

NOTA: Observe que para manter a continuidade da atualização precisamos utilizar `ReactDOM.render()` para mudar o `output` toda vez.

Nesta seção veremos como fazer de `relogio` um componente reutilizável e encapsulado, mas ao invés de usar a abordagem funcional, utilizaremos a abordagem ***orientada a objetos*** que possibilita que `React`: `relogio` se encarregue de configurar seu próprio _timer_ e fazer a própria atualização sozinho a cada segundo.

***

Dica Profissional:

Uma das principais diferenças entre o paradigma funcional e o orientado a objetos é a manipulação do _estado_. Com isso estamos nos referindo ao _contexto_ de uma função (ou método). Na programação funcional, sempre fazemos com que o _estado_ seja explícito e externo (normalmente por meio da utilização de argumentos), enquanto que em OOP o _estado_ normalmente se mantém no contexto de um objeto gerado por meio de uma classe (utilizando a pseudo-variável `this`).

***

Nosso objetivo é escrever uma única vez o código a seguir ...

```js
ReactDOM.render(
  <relogio />,
  document.getElementById('root'),
);
```

... e que `relogio` fique ele próprio encarregado de tudo o que for necessário para continuar funcionando.

Para implementar isso, precisamos adicionar um **estado local** (`state`) no componente `relogio`. O `state` local é similar às `props`, com a diferença de que o estado local é privado e completamente controlado pelo componente.

Os componentes definidos como `class` possuem algumas `features` adicionais que não estão presentes nos componentes `stateless` (aqueles que declaramos como funções). O `state` local é uma delas.

## Convertendo uma função em classe

Para converter um componente `stateless` como `relogio` em uma classe, você deve seguir estes 4 passos:


1. Crie uma [classe de `ES6`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) (`class`) e faça com que herde de `React.Component`.

2. Crie um método em sua classe chamado `render()`.

3. Mova o corpo de sua antiga função para o corpo do método `render()`.

4. As suas `props` que antes você recebia como parâmetro agora estão acessíveis por meio de `this.props` dentro de `render()`.


```js
class relogio extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <h2>São {data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

[Teste o código no CodePen](https://codepen.io/merunga/pen/xLaeEY?editors=0010)

`relogio` agora está definido como `class` ao invés de como uma função. Isso nos permitirá utilizar funcionalidades adicionais como o estado local e os *hooks* para as diferentes fases do ciclo de vida do componente.

## Adicionando um estado local

Agora, moveremos a `data` de `props` para o `state` em 3 passos:

1. Substituímos a atribuição de `this.props` para `this.state`:
   ```js
   class relogio extends React.Component {
     render() {
       const { data } = this.state;
       return (
         <div>
           <h1>Olá, Mundo!</h1>
           <h2>São  {data.toLocaleTimeString()}.</h2>
         </div>
       );
     }
   }
   ```

2. Adicionamos um [construtor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) que atribui o valor inicial de `this.state`:

   ```js
   class relogio extends React.Component {
     constructor(props) {
       super(props);
       this.state = { data: new Date() };
     }

     render() {
       const { data } = this.state;
       return (
         <div>
           <h1>Olá, Mundo!</h1>
           <h2>São  {data.toLocaleTimeString()}.</h2>
         </div>
       );
     }
   }
   ```

   Observe como passamos as `props` para o construtor de `React.Component`:

   ```js
     constructor(props) {
       super(props);
       this.state = { data: new Date() };
     }
   ```

   NOTA: Os componentes `statefull` **sempre** deveriam invocar o construtor de sua superclasse com as `props` como parâmetro.
   

3. Remova a propriedade `data` do elemento `<relogio />`:

   ```js
   ReactDOM.render(
     <relogio />,
     document.getElementById('root'),
   );
   ```

O resultado tem a seguinte forma:

```js
class relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <h2>São {data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <relogio />,
  document.getElementById('root'),
);
```

[Teste o código no CodePen](https://codepen.io/merunga/pen/vJzMLQ?editors=0010)

Agora faremos com que `relogio` configure seu próprio _timer_ e se auto atualize a cada segundo.

## Adicionando métodos do ciclo de vida (_lifecycle_)

Nas aplicações com muitos componentes, é muito importante liberar os recursos bloqueados, uma vez que o componente precisa que eles sejam liberados.

Então, nós queremos [configurar um _timer_](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) no momento em que `relogio` é injetado no `DOM` na primeira vez. Isso se chama *montar* (`mount`) um componente no jargão do `React`.

E a de maneira análoga, queremos [limpar o  timer](https://developer.mozilla.org/es-ES/docs/Web/API/WindowTimers/clearInterval) quando o `DOM` produzido por `relogio` for removido. Isso se chama *desmontar* (`unmount`) um componente.

Definimos métodos especiais dentro de nossa classe para executar instruções cada vez que o componente é *montado* ou *desmontado*:

```js
class relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <h2>São  {data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Esses métodos se chamam "_lifecycle hooks_".

O _hook_ `componentDidMount()` é executado após o output do componente ter sido renderizado no `DOM`. Este é um bom lugar para inicializar nosso _timer_:

```js
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }
```

Observe que guardamos o ID do _timer_ criado diretamente como uma propriedade de `this`.

Enquanto que `this.props` é atribuído por `React`, `this.state` possui um significado especial (é a referência ao estado de nosso componente e vamos atualizá-lo utilizando métodos especiais para isso - `this.setState()`). Por outro lado, como em qualquer classe, você é livre para adicionar manualmente campos extras em sua classe se for necessário armazenar alguma informação, sempre e quando seu valor não estiver relacionado com o output de seu `render()`.

Como regra geral, se não está utilizando no `render()`, não deveria estar no `state`.

E agora limpamos o timer no `componentWillUnmount()`:

```js
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Finalmente, vamos implementar o método `tick()` que é executado a cada segundo.

Esse método utilizará `this.setState()` para disparar as modificações do estado local:

```js
class relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <h2>São {this.state.data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <relogio />,
  document.getElementById('root'),
);
```

[Teste o código no CodePen](https://codepen.io/merunga/pen/prOBNE?editors=0010)

## Recomendações para utilizar `state` corretamente

Existem 3 coisas que você deve saber sobre `setState()`.

### Nunca altere o `state` diretamente.

```js
// Errado
this.state.saudacao = 'Hello';
```

```js
// Correto
this.setState({ saudacao: 'Hello' });
```

O único lugar no qual você poderia atribuir `this.state` diretamente é no construtor.

### As modificações no `state` podem ser assíncronas.

Por questão de desempenho, `React` pode juntar múltiplas chamadas `setState()` em somente um _update_.

Como `this.props` e `this.state` poderiam ser modificados assincronamente, você não deveria depender de seus valores para calcular o novo estado.

Por exemplo, o código a seguir poderia falhar:

```js
// Errado
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

Nestas situações, utilize uma segunda forma de `setState()` que aceita uma função no lugar de um objeto. Esta função receberá o estado anterior como primeiro argumento e as `props` no momento de invocar a função como segundo argumento:

```js
// Correto
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));
```

### As atualizações do `state` se "mesclam"

Cada vez que você invoca `setState()`, o `React` toma como base o estado atual e passa as propriedades definidas em seu objeto.

Por exemplo, temos um estado com duas propriedades independentes:

```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }
```

Que podemos modificar granularmente:

```js
  componentDidMount() {
    fetchPosts({ err, response }) => {
      // handle err
      this.setState({
        posts: response.posts,
      });
    });

    fetchComments({ err, response }) => {
      // handle err
      this.setState({
        comments: response.comments,
      });
    });
  }
```

Quando `this.setState({ comments })` é executado, `this.state.posts` permanece inalterado, enquanto que `this.state.comments` é completamente substituído.

## Encapsulamento

Por fim, para demonstrar o quão verdadeiramente encapsulado é nosso `relogio`, propomos o seguinte experimento: crie um componente `App` que renderize 3 `<relogio>`:

```js
function App() {
  return (
    <div>
      <relogio />
      <relogio />
      <relogio />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
```

[Teste o código no CodePen](https://codepen.io/merunga/pen/brxJgN?editors=0010)

Como você pode ver, cada `relogio` inicia seu próprio timer e é atualizado de maneira independente.

No `React` se um componente é `statefull` ou `stateless` é considerado um detalhe da implementação do componente e esta condição pode variar com o tempo. Isso quer dizer que você pode utilizar componentes `stateless` dentro de components `statefull` e vice-versa.

O estado local de um componente só deve ser utilizado quando você **puder garantir** que não haverá necessidade de compartilhar informação com o "exterior".

Verifique todos os *hooks* disponíveis na [documentação de `React`](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)

> ![Component lifecycle](https://github.com/Laboratoria/curricula-js/raw/master/11-react/L07-oop/static/lifecycle.jpg)
