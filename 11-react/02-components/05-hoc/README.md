# Higher-order Components

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Já temos uma aplicação estática modelada com componentes de `React`, modernos e sustentáveis, mas falta algo fundamental que qualquer aplicação moderna precisa: interação e memória.

Mais adiante neste curso veremos uma maneira de injetar essa capacidade em nossos componentes com `Redux`, permitindo manter esses componentes independentes e reutilizáveis. 

Para chegar ao `Redux`, começaremos com o que são os **HOC** (_Higher-order Components_), e veremos alguns casos de uso para entender as infinitas possibilidades que fornecem. Em seguida, na próxima unidade, teremos uma introdução ao `Redux` e aos seus princípios básicos e veremos como usar o conceito de _HOCs_ para ouvir eventos dos componentes, informar os dados de que necessitam e orquestrar o estado global de nossa aplicação. Por fim, realizaremos um processo completo de projeto e implementação de um componente mais complexo, utilizando `React` e `Redux`.

## Higher-order Components


Os **Higher-order Components** (_HOCs_), são uma técnica avançada em `React` para reutilizar a lógica de nossa UI. Os _HOCs_ não são parte da API de `React`, mas sim um padrão de projeto surgido dentro da comunidade, inspirado na natureza composicional do `React`.

De forma bem resumida, os _HOCs_ são para os _componentes_ o que as _Higher-order Functions_ são para as _funções_: **um higher-order component é uma função que toma um componente como parâmetro e retorna um novo componente como resultado.**


```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Enquanto que um componente transforma `props` em UI (`Virtual DOM`), um _HOC_ transforma componentes em componentes.

Nesta leitura veremos porque os _HOCs_ são tão úteis e que formas podem assumir.

### Usando HOCs para funcionalidades transversais (*Cross-Cutting Concerns*)

> Nas primeiras versões de `React`, era recomendado o uso de Mixins e talvez você encontre informação sobre eles. Hoje o uso de Mixins está **desincentivado**. [Mais informações](/react/blog/2016/07/13/mixins-considered-harmful.html).

Os componentes são a unidade básica de reutilização de código no `React`. Contudo, você verá que existem situações nas quais a natureza expressiva de `React` não resolve muito bem o problema.

Por exemplo, suponhamos que temos um componente `CommentList` que referencia uma fonte externa de dados e renderiza uma lista de comentários para um usuário específico:

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

E em seguida, temos um componente que referencia um blog, que também utiliza o usuário para buscar os posts correspondentes:

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

`CommentList` e `BlogPostList` não são idênticos: eles chamam métodos diferentes de `DataSource` e renderizam diferentes saídas, mas a implementação é a mesma:

* coletar um `user`;
* chamar o método que corresponda o `DataSource` com `user`;
* renderizar uma lista como resposta.

Você poderá imaginar que em uma grande aplicação, este padrão se repete várias vezes. Então o que queremos é uma abstração que nos permita definir esta lógica em um só lugar e compartilhado entre vários componentes. Aqui é onde os HOC's mostram seu maior valor.

Já sabemos que `CommentList` e `BlogPostlist` são diferenciados por:

* `DataSource.getComments` vs `DataSource.getPosts`
* `<TextBlock text={post} />` vs `<Comment comment={comment} />`

Então reescrevemos nossos componentes para que somente se ocupem da lógica de renderização, e escrevamos uma nova função `withData` que nos permite fazer o seguinte:

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

O primeiro parâmetro de `withData` é o componente interno e o segundo é a função a ser executada para conseguir os dados.

Então, agora quando `CommentListWithData` e `BlogPostListWithData` são renderizados, `CommentList` e `BlogPostList` receberão uma propriedade `data` com os dados atualizados.

Como implementamos `withData`?

```js
// Temos um estado global que armazena o usuário atual:
const state = {
  user: 'USER_ID',
};

// E esta função recebe um componente:
const withData = (WrappedComponent, selectData) => {
  // ... e retorna outro:
  return props => {
    const data = selectData(state.user)
    return (
      <WrappedComponent data={data} {...props} />
    );
  };
};
```

Ou usando retornos implícitos (um pouco mais conciso):

```js
const withData = (WrappedComponent, selectData) => props => (
  <WrappedComponent data={selectData(state.user)} {...props} />
);
```

Note que um _HOC_ não modifica a interface do componente nem tampouco usa herança para copiar seu comportamento. No lugar disso um HOC *compõe* o componente original, *envolvendo-o (wrapping)* com um componente contêiner. Um _HOC_ é uma ***função pura sem efeitos colaterais***.

E pronto! O componente interno recebe tudo o que necessita por meio do contêiner e assim nem o contêiner se preocupa em como se usa os dados e nem o componente interno se preocupa em como se consegue este dado. Completa separação de interesses (_separation of concerns_).

Como `withData` é uma função comum e corrente, você pode atribuir-lhe a interface que mais lhe convenha. Por exemplo, ao invés de a `prop` seja chamada de `data` você pode fazer que o nome da propriedade seja configurável. Ou você poderia receber o usuário no lugar de obtê-lo de um estado global. Tudo isso e mais é possível, porque o HOC está no controle total da forma do contêiner e de como e com quais parâmetros renderizar o componente interno.

Como com os componentes regulares, o "contrato" entre `withData` e o componente interno se baseia inteiramente nas `props`. Isso torna fácil mudar um _HOC_ por outro, sempre quando forneça as mesmas `props` do componente interno. Isto pode ser muito útil, por exemplo, se mudarmos a forma na qual obtemos ou armazenamos nosso usuário, ou parâmetros futuros que sejam adicionados à API de nossa fonte de dados.

A seguir, veremos algumas boas práticas e pontos a levar em consideração para economizar horas de depuração.

### Convenção: Transferir todas as `props` recebidas para o componente interno

Os _HOCs_ agregam funcionalidades aos componentes e não deveriam alterar drasticamente seu comportamento. Espera-se que o componente retornado por um HOC tenha uma interface similar ao componente interno.

Os _HOCs_ deveriam transferir todas as `props` que não tenham diretamente a ver com sua funcionalidade. A maioria de HOC's normalmente retornam um componente da seguinte forma:

```js
const HOC = (props) => {
  // Filtramos uma prop extra que é específica deste HOC e não deveria ser transferida:
  const { extraProp, ...passThroughProps } = props;

  // Injetamos as props necessárias. Usualmente um valor do state global ou event listeners:
  const injectedProp = someStateOrInstanceMethod(extraProp);

  // Passamos as props ao componente interno.
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
};
```

Esta convenção ajuda a assegurar que os HOCs sejam tão flexíveis e reutilizáveis como seja possível.

### Convenção: Maximizando a capacidade de composição

Nem todos os HOCs são iguais. Às vezes recebem um único argumento, o componente interno:

```js
const NavbarWithRouter = withRouter(Navbar);
```

Outras vezes aceitam parâmetros adicionais, como por exemplo em `Relay` no qual é necessário um parâmetro de configuração:

```js
const CommentWithRelay = Relay.createContainer(Comment, config);
```

Mas a assinatura mais comum de um HOC normalmente é a seguinte:

```js
// React Redux's `connect`
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```

*O qué?!* Se você dividir por etapas é mais fácil de entender.

```js
// Connect é uma função que retorna outra função:
const enhance = connect(commentListSelector, commentListActions);
// A função retornada é um HOC que retorna o componente já conectado ao
// `store` de Redux por meio de um contêiner?
const ConnectedComment = enhance(CommentList);
```

Em outras palavras, `connect` é uma _higher-order function_ que retorna um _higher-order component_!

Esta forma pode parecer confusa ou desnecessária, mas possui uma capacidade muito útil. Os HOCs são somente um argumento, como os retornados por `connect`, têm a seguinte assinatura `Component => Component`. As funções nas quais o tipo de sua entrada é a mesma que sua saída são muito fáceis de compor.

```js
// No lugar de encadear as chamadas...
const EnhancedComponent = connect(commentSelector)(withRouter(WrappedComponent));

// ... usamos uma função utilitária de composição na qual
// compose(f, g, h) é o mesmo que (...args) => f(g(h(...args)))
const enhance = compose(
  // Ambos são HOCs com um único argumento:
  connect(commentSelector),
  withRouter,
)
const EnhancedComponent = enhance(WrappedComponent);
```

O utilitário `compose` é previsto por várias bibliotecas incluindo lodash ([`lodash.flowRight`](https://lodash.com/docs/#flowRight)), [Redux](http://Redux.js.org/docs/api/compose.html), e [Ramda](http://ramdajs.com/docs/#compose).

### Conveção: Extrair o "Display Name" para melhor depuração

Os componentes contêiners criados pelos HOCs são apresentados em [React Developer Tools](https://github.com/facebook/react-devtools) como qualquer outro componente. Escolha um `displayName` que informe qual é o resultado do HOC.

A técnica mais comum é usar o `displayName` do componente interno. Então se seu HOC se chama `withData` e o componente interno `CommentList` use algo parecido com `WithData(CommentList)`:

```js
const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withData = (WrappedComponent) => {
  const WithData = props => {/* ... */};
  WithData.displayName = `WithData(${getDisplayName(WrappedComponent)})`;
  return WithData;
};
```

### Para levar em conta

Os _HOCs_ vêm com alguns aspectos a serem considerados que não são óbvios se você é novata no `React`.

#### Não utilize HOCs dentro do corpo de um componente

O algoritmo de reconciliação do `React` usa a identidade dos componentes para determinar se deve atualizar sua árvore do DOM ou deve jogá-lo fora e montar uma nova. Se o resultado do componente é idêntico (`===`) ao componente do ciclo anterior a ser renderizado, `React` recursivamente atualiza a sub-árvore comparando nó a nó. Se não são iguais, a árvore é totalmente descartada.

Normalmente no `React` isso é algo em que você não deveria pensar, mas é importante quando você usa HOCs porque implica que não é possível aplicar um HOC a um componente dentro do corpo de outro componente:

```js
render() {
  // Uma nova versão de EnhancedComponent é criada A CADA renderização
  // EnhancedComponent1 !== EnhancedComponent2.
  const EnhancedComponent = enhance(MyComponent);
  // Isto faz que toda a sub-árvore
  // seja descartada e vote a ser criada toda vez!
  return <EnhancedComponent />;
}
```

Ao invés disso, aplique os _HOCs_ da definição dos componentes para que o componente contêiner seja criado somente uma vez. Em seguida sua identidade será consistente por todos os *renderers* o que normalmente é o que você deseja.

Em casos raros quando você necessitar aplicar um _HOC_ dinamicamente, é preciso fazê-lo utilizando componentes OOP (utilizando classes) que varemos mais a frente neste curso.

#### Os métodos estáticos devem ser copiados "manualmente"

Às vezes é útil definir métodos estáticos em um componente do `React`.

Quado você aplica um _HOC_ em um componente, o componente original é "envolvido" por um componente contêiner. Isso implica que o novo componente não tem nenhum dos métodos estáticos do componente original.

```js
// Definimos un método estático:
WrappedComponent.staticMethod = () => {/*...*/};
// Aplicamos o HOC:
const EnhancedComponent = enhance(WrappedComponent);

// O novo componente não possui `staticMethod`:
typeof EnhancedComponent.staticMethod === 'undefined'; // true
```

Nesta situações, você pode copiar o método no componente contêiner, antes de retorná-lo:

```js
const enhance = (WrappedComponent) => {
  class Enhance extends React.Component {/*...*/}
  // Devemos copiar o método explicitamente:
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
};
```

O principal inconveniente com esse enfoque é que você precisa saber exatamente qual ou quais são os métodos que precisam ser copiados. Você pode usar por exemplo [hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics) para copiar automaticamente os métodos mais comuns que não estejam relacionas com `React`:

```js
import hoistNonReactStatic from 'hoist-non-react-statics';
const enhance = (WrappedComponent) => {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
};
```

> Se você quiser saber exatamente o que faz `hoist-non-react-statics`, verifique [seu código fonte].   (https://github.com/mridgway/hoist-non-react-statics/blob/master/index.js)

Outra possibilidade é exportar o método a partir do componente.

```js
// No lugar de...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...exportamos independentemente...
export { someFunction };

// ...e em seguida o usamos a partir do HOC.
import MyComponent, { someFunction } from './MyComponent.js';
```

## Resumo

Nesta leitura pudemos apreciar a grande versatilidade que os _HOC's_ possuem: a possibilidade de compor diferentes funcionalidades por meio de "camadas", como as de uma cebola.

Na próxima leitura focaremos em um cenário particular que faz um uso intensivo dos _HOC's_: `Redux`.


***

Fontes:

* [Higher Order Components - Documentação oficial de React](https://facebook.github.io/react/docs/higher-order-components.html)
* [React Higher Order Components in depth - @franleplant en Medium](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)
