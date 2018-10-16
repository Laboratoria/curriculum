# *Children* (componentes filhos)

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Introdução

Se fizermos uma analogia entre `React` e `HTML`, podemos dizer que as `props` de `React` são o mecanismo análogo ao que usamos em `HTML` para definir os atributos das tags. Até agora tudo bem, mas o que acontece com as tags aninhadas dentro de outras tags que temos no `HTML`? Para isso existe a propriedade especial `children`.

`React` possui um modelo de composição muito poderoso que permite aninhar `componentes` como se aninhássemos tags `HTML`. A composição é o método indicado para reutilizar ao máximo nossos componentes.

Diferentemente dos `children` do `DOM` e como estamos trabalhando no mundo `JavaScript`, podemos manipular os *"filhos"* (`children`) de nosso componente: enviar-lhes novas `props` ou modificá-las, decidir qual deles queremos renderizar ou não e, no geral, cloná-los e modificá-los como quisermos.

## Composição contra Herança

Se falamos de reutilização de código por meio de composição, um caso muito comum, por exemplo, é um *Sidebar* ou um *Diálogo* que representam *caixas* genéricas na qual o usuário decide qual conteúdo colocar.

Na hora de definirmos nosso componente *contêiner* não sabemos com certeza que tipo de *filhos* o usuário enviará na hora de usá-lo.

É neste tipo de caso em que é recomendado o uso da propriedade especial `children`, no qual sabemos que esperamos componentes *filhos* mas não sabemos exatamente quais e como são.

Vejamos um exemplo:

Temos o seguinte componente `ComBorda`

```js
// Componente que adiciona uma borda da cor desejada ao redor dos `children`.
const ComBorda = ({ color, children }) => (
  <div style={{ border: `solid 3px ${color}`}}>
    {children}
  </div>
);
```

Então o seguinte elemento `JSX`,

```js
  <ComBorda color="blue">
    <h1>Bem-vinda</h1>
    <p>Obrigada pela visita</p>
  </ComBorda>
```

produz o seguinte `DOM`:

```html
<div style="border: solid 3px blue">
  <h1>Bem-vinda</h1>
  <p>Obrigada pela visita</p>
</div>
```

### O que está acontecendo?

Qualquer coisa dentro da tag `JSX` `<ComBorda>` é passado como parâmetros para o componente por meio da propriedade `children`. Nesta caso `ComBorda` só renderiza os `children` dentro de um `<div>` com um estilo configurado por meio de uma `prop` `color`.

No caso em que você necessite de diferentes *espaços* em um componente, é melhor utilizar sua própria convenção no lugar dos `children`. Por exemplo:

```js
const SplitPane = ({ left, right }) => (
  <div className="SplitPane">
    <div style={{ float: 'left'}}>{left}</div>
    <div style={{ float: 'right'}}>{right}</div>
  </div>
);

const App = () => (
  <SplitPane
    left={<Contacts />}
    right={<Chat />}
    />
);
```

Elementos `React` como `<Contacts />` e `<Chat />` são somente objetos e portanto podem ser passados como uma propriedade, como qualquer outro tipo de dado.

## Qualquer coisa pode ser um filho

Podemos passar **qualquer** expressão validar como `children`, o que inclui também as funções.

Aqui temos um exemplo de um componente que executa uma função passada como parâmetro:

```js
const Avaliador = ({ children }) => {
  // `children` é uma função e simplesmente a chamamos:
  //             ↓
  return children();
};

/// e a usaríamos assim:
<Avaliador>
  {() => <h1>Olá, Mundo!</h1>}
</Avaliador>
```

Vejamos um exemplo mais interessante com o mesmo padrão. Imagine um componente que precisa extrair informação de um serviço externo. Uma forma muito elegante de fazê-lo seria a seguinte:

```js
<Fetch url="api.example.com">
  {result => <p>{result}</p>}
</Fetch>
```

Não esperamos que a esta altura você seja capaz de implementar algo assim. O importante é que você entenda que **qualquer coisa** pode ir dentro de um `children`.

## Manipulando `children`

Esta afirmação de que "**qualquer coisa** pode ir dentro de um `children`" faz com que `children` seja uma estrutura de dados "opaca". Como pode receber qualquer coisa, não podemos assumir nunca nada em relação à forma que terá.

Para poder trabalhar com a propriedade `children`, `React` fornece um grupo de funções de ajuda para poder fazê-lo de uma maneira "padrão", independentemente do tipo final de `children`. Todas elas são acessíveis por meio de `React.Children`.

### Iteração de `children`

As funções mais "óbvias" são `React.Children.map` e `React.Children.forEach`. Funcionam exatamente como suas análogas de `Array` com a diferença de que funcionam com qualquer tipo de dados, não somente arrays.

```js
const IgnorarPrimeiroFilho = ({ children }) => (
  <div>
    {React.Children.map(children, (child, i) => {
      // Ignoramos o primeiro filho.
      if (i < 1) {
        return;
      }
      return child;
    })}
  </div>
);

<IgnorarPrimeiroFilho>
  <h1>Primeiro</h1>
  <h1>Segundo</h1> // <- Somente este é exibido.
</IgnorarPrimeiroFilho>
```
Observe que, neste caso, poderíamos ter usado diretamente `children.map` já que recebemos um array de nós, mas se no lugar houvéssemos recebido uma função, o componente teria disparado o seguinte erro:

```text
TypeError: children.map is not a function
```

### Contando filhos

Como `children` pode ser de qualquer tipo, verificar quantos `children` tem nosso componente pode ser um problema. Como no caso anterior, usando somente a chamada `children.length` não se consegue garantir que não haja erro ou o resultado seja o esperado.

Por exemplo, se passamos como `children` a string "Olá, Mundo!", `children.length` retorna 12!

Por isso é que existe `React.Children.count`:

```js
const ContadorDeFilhos = ({ children }) => (
  <p>{React.Children.count(children)}</p>
);

// Retorna a quantidade de `children` independentemente do tipo.

// Renderiza "1"
<ContadorDeFilhos>
  Um!
</ContadorDeFilhos>

// Renderiza "2"
<ContadorDeFilhos>
  <p>Primeiro</p>
  <ComponenteFilho />
</ContadorDeFilhos>

// Renderiza "3"
<ContadorDeFilhos>
  {() => <h1>Primeiro!</h1>}
  Segundo!
  <p>Terceiro!</p>
</ContadorDeFilhos>
```

### Convertendo `children` em um autêntico `array`

Como último recurso, se nada do que mostramos funcionar, existe a opção de forçar a transformação dos `children` em um `array` com `React.Children.toArray`. Então você pode utilizar qualquer função ou estratégia própria de arrays. Isso pode ser útil para ordená-los:

```js
const Sort = ({ children }) => {
  const filhos = React.Children.toArray(children);
  return <p>{filhos.sort().join(' ')}</p>;
};

<Sort>
  // Aqui usamos expressões para garantir
  // receber 3 strings,
  // ao invés de somente uma concatenada.
  {'laranjas'}
  {'bananas'}
  {'maçãs'}
</Sort>

// Renderiza
// bananas laranjas maçãs 
```

## Forçar um único `children`

Analisemos o componente `<Avaliador />` anterior que espera somente `children` como tipo de função.

```js
const Avaliador = ({ children }) => children();
```

Nós podemos definir por meio de nossa `propTypes` que esperamos que `children` cumpra essas condições:

```js
Avaliador.propTypes = {
  children: PropTypes.func.isRequired,
}
```

No caso de um desenvolvedor utilizando nosso componente não cumprir essa condição, o componente tentará seguir funcionando e somente exibirá uma mensagem de erro no console, algo que é muito fácil de ignorar. Se para nosso componente é crítico que tenha somente um `children`, então usamos `React.Children.only`.

```js
const Avaliador = ({ children }) => React.Children.only(children)();
```

Esta função retorna o único filho presente no `children`. Se houver mais de um, dispara um **error** que **bloqueia** o ciclo de **renderização**, o que irá parar a sua aplicação.

## Resumo

Os `children` fazem que `React` se comporte como uma autêntica linguagem de markup e não como um montão de entidades soltas escritas em `JSX`. Usar as funções de `React.Children` permite ter controle total sobre nosso componente, permitindo criar API's mais declarativas e menos propensas a erros.
