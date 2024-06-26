<!-- markdownlint-enable MD013 -->

# Como codificar um router

## Índice

- [O que é um aplicativo de página única (SPA?)](#what-is-a-single-page-application-spa)
- [O que é um router?](#o-que-é-um-router)
- [Sobre window.location](#about-window.location)
- [Apresentando a API History](#Introducing-the-history-api)
- [Recursos do router](#recursos-do-router)
- [API básica do router](#basic-router-api)
- [Codificação de um SPA e router](#Codificação-de-um-spa-e-router)

Antes de começarmos a codificar um router, precisamos abordar alguns conceitos,
como a razão pela qual existem routers: As Single Page Application
(aplicativo de página única ou SPA).

## O que é um aplicativo de página única (SPA)?

Um aplicativo de página única (SPA)
é uma aplicação web que carrega todo o seu conteúdo a partir de um único arquivo
HTML (comumente chamado de `index.html`) e atualiza dinamicamente o conteúdo
enquanto o usuário interage com a aplicação.

Em vez de carregar páginas HTML completas e separadas cada vez que
uma ação é executada, como clicar em um link, ele apenas carrega
o conteúdo necessário para atualizar a visualização atual. Uma SPA
dá a ilusão de que estamos navegando em páginas HTML separadas,
mas na verdade é a mesma página com conteúdo diferente renderizado
(desenhado) dinamicamente.

## O que é um router?

No contexto de SPAs, um router é um [`módulo`](https://es.javascript.info/modules-intro)
JavaScript que gerencia a navegação dentro do aplicativo sem precisar recarregar
a página inteira. Sua principal função é atribuir URLs às
diferentes visualizações ou componentes do aplicativo e atualizar a interface
com base no URL atual.

Por exemplo, se um usuário estiver na página inicial de um SPA `www.website.com`,
e em seguida, você clica no link "About" que leva você para `www.website.com/about`,
o router detecta alterações na URL, encontra e carrega dinamicamente o
conteúdo correspondente para "about". Não existe um arquivo `about.html`,
mas o router e a view criam a sensação de que estamos navegando para uma nova página.
Isso permite que o SPA simule a experiência de navegação de uma aplicação web de
várias páginas, mesmo que você tenha carregado apenas uma única página HTML a
princípio.

## Anatomia de uma URL

Considere o seguinte exemplo de URL:

``http://www.example.com:8080/page/example?key=value#section``

As partes deste URL são:

[protocolo](https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol):
indica o protocolo usado para acessar o recurso. No URL de exemplo é `http:`.

[host](https://developer.mozilla.org/en-US/docs/Web/API/URL/host):
indica a localização do servidor que hospeda o recurso. Pode ser
um endereço IP ou um nome de domínio. No exemplo é `www.example.com`.

[port](https://developer.mozilla.org/en-US/docs/Web/API/URL/port):
especifica a porta do servidor à qual se conectar. Se não for
especificado, se usa a porta padrão para o protocolo
(80 para HTTP, 443 para HTTPS). No exemplo, a porta é `8080`.

[pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname):
especifica o local do recurso no servidor. No
exemplo, `/página/exemplo`.

[search](https://developer.mozilla.org/en-US/docs/Web/API/URL/search):
contém parâmetros de pesquisa para a solicitação. Se inicia
com o ponto de interrogação e tem a forma
`chave=valor&chave2=valor2`.

[hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash):
identifica uma seção específica dentro do recurso. Se inicia
com o sinal de cerquilha (#) seguido por um identificador. No
URL de exemplo, hash é `section`

JavaScript fornece o
[`window.location`](https://developer.mozilla.org/es/docs/Web/API/Location)
para as diferentes partes da URL atual do nosso aplicativo.
Consulte a documentação para se familiarizar com essas propriedades.

### Então, o que são "routes" e "views"?

Na sua forma mais simples, as rotas (routes) são geralmente definidas como pares
`valor-chave`,
onde `key` é o nome do caminho da URL e `value` é
uma função associada que gera a visualização (visualização). Por exemplo,
No bloco de código a seguir, um objeto é definido, onde
As chaves são os nomes dos caminhos e os valores são funções.

```js
rotas const = {
"/": Home,
"/About": About
}
```

As rotas podem ser definidas de maneiras mais complexas, mas a ideia básica é
a mesma: uma determinada rota está relacionada a uma determinada função de
visualizar.

Neste exemplo, para o caminho "/" deve ser utilizada a função `Home` e
para a rota "/about" a função `About` deve ser usada.
`Home` e `About`, quando invocados,
construirá a visão correspondente e retornará um elemento
[DOM](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
que o router adicionará ao `index.html`.

Por exemplo, no bloco de código a seguir, definimos
uma função `Home`, que cria, define e retorna um `<h1>`.

```js
const Home = () => {
  const el = document.createElement("h1");
  el.innerHTML = "Eu sou a página inicial";
  return el;
}
```

Se carregarmos a página da web e o pathname for `/`,
o router descobrirá que deve invocar a função `Home` e pegar o `<h1>` que
esta função retorna para que possamos adicioná-la ao nosso arquivo HTML.
Por fim, “Eu sou a página inicial” será exibido no site.

## Apresentando a History API

À medida que você navega nas páginas da web e carrega página após página, ele adiciona
conteúdo para o histórico do seu navegador. Botões de seta para frente
e voltar em cada navegador permitem que você vá e volte no histórico.

Com a History API podemos acessar e manipular o histórico do navegador
sem acionar recargas de página inteira. Um router em um SPA funciona
junto com a History API para conseguir isso. Carregar a visualização
enquanto é adicionado ao histórico do navegador, preservando assim o
maneira como um usuário pode se mover para frente e para trás
usando os botões do seu navegador sem precisar carregar uma nova página

Se não fosse esse o caso, um SPA ainda poderia mostrar novas visualizações
no mesmo html, mas a URL provavelmente não será atualizada
e nunca será adicionada ao histórico, então ao pressionar "voltar"
o navegador sairia completamente do site.

Os principais participantes relacionados à History API que
um router utiliza são:

- [O método `pushState`](https://developer.mozilla.org/es/docs/Web/APIF/History/pushState)
nos permite adicionar um novo estado à fila de histórico da janela.
- [O evento `popstate`](https://developer.mozilla.org/es/docs/Web/API/Window/popstate_event)
É um evento que a window dispara quando o histórico muda.
Por exemplo, quando alguém pressiona novamente o navegador.

Outros métodos de interesse são `replaceState`, `go`, `forward`, `back`.
Consulte [a documentação completa da History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
e [Trabalhando com a History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API).

Outro evento de interesse é o `hashchange`, que não vamos usar em nosso router
mas vale a pena conhecer. Consulte a [documentação `hashchange`](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)
para mais informação.

## Funcionalidades do router

Um router básico deve:

- Armazenar rotas da aplicação.
- Para um determinado nome de caminho na URL, renderizar a visualização
apropriada (e passar os argumentos apropriados para a visualização se houver
parâmetros de pesquisa).
- Responder à navegação dentro da aplicação
(links, cliques em botões, etc.)
  + adicionando novo status ao histórico do navegador para atualizar o URL
  + então renderizar a visualização apropriada com base no caminho
    (e passar os argumentos apropriados se houver parâmetros)
- Responder à navegação com os botões avançar e voltar no
navegador
  + analisando o novo URL para rota e parâmetros
  + então renderizar a visualização apropriada com base no caminho
    (e passe os argumentos apropriados se houver parâmetros)
- Carregar uma página de erro quando a rota não está definida nas rotas.

Isso mesmo, mencionamos "renderizar visualização apropriada com base no caminho"
três vezes, o que significa que escreveremos uma função que faça isso
para poder usá-la várias vezes.

Agora iremos mais fundo explicando como obter essas funcionalidades com código
em `router.js`.

### 1. Armazenar rotas da aplicação

O router precisa conhecer as rotas da aplicação para determinar qual visualização
representar para uma rota.
As rotas devem ser definidas em um módulo fora do
router, mas que depois serão armazenadas no router. Ou seja,
O router deve ter sua própria variável “privada” para armazenar as rotas
e uma função que pode ser chamada de outro módulo para atribuir as rotas.

No código, isso significa que o router deve ter:

- `ROUTES` - objeto `{}`: Esta variável armazena informações sobre
os percursos do seu SPA.
- `setRoutes(routes)`: Esta função define o valor do parâmetro
`routes` para o objeto `ROUTES`.

### 2. Para uma determinada rota na URL, gere a visualização apropriada

O router deve ter uma função que, quando recebe um `pathname`,
mostrar a visualização. Então, o que significa “gerar a visualização”?

Se você pensar em pseudocódigo, devemos deletar o html da página atual,
chamar a nova função de visualização correta para renderizá-la,
e colocar o novo html na página.

```js
const renderView = (pathname, props) => {
  // clear the current html
  // find the correct view to render
  // call the view function (with the props) and get the new html element
  // put new html in the page
}
```

Para “excluir” o html, o router também precisa saber
o elemento em seu aplicativo que é a raiz ou pai de todos os elementos.
Chamaremos isso de elemento `raiz`.

O router deve ter sua própria variável para armazenar o elemento `root`
e uma função que pode ser chamada de outro módulo para atribuir o elemento.

Para obter esta funcionalidade no código, `router.js` deve ter:

- `rootEl` - Elemento DOM: Uma variável para armazenar o elemento raiz onde
o conteúdo mudará/aparecerá.
- `setRootEl(el)`: Uma função para definir o elemento raiz do router.
- `renderView(pathname, props)`: Uma função que renderiza uma visualização no
elemento `root` especificado. Possui dois parâmetros, `pathname` que é a
parte de `window.location` e `props` que é um objeto de dados que podemos
passar pra visualização. A função `renderView` exclui o conteúdo existente,
encontra a função de visualização para o `pathname` fornecido e
chama essa função de visualização passando `props` como argumento
( [mais sobre isso em um momento](####Passar-argumentos-para-visualizações) ).
Em seguida, adicione o elemento retornado pela função de visualização ao elemento
`root`.

### 3. Responder à navegação da aplicação

Quando um usuário clica em um link ou botão, etc. em seu aplicativo
para navegar para outra página da sua aplicação, o router deve intervir
para simular o carregamento de uma nova página.

Para isso, o router precisa de:

- adicionar novo status ao histórico do navegador para atualizar o URL
- renderizar a visualização apropriada com base no `pathname` (e passar os argumentos
apropriados para a função de visualização, se houver)

O router usa a API History para atualizar a URL e inserir um novo
estado na pilha de histórico do navegador. Isso é feito usando
`window.history.pushState`.

Lembre-se, é importante impulsionar um novo estado e não apenas renderizar a visualização,
já que queremos oferecer suporte ao movimento para frente e para trás no
navegador e que nossa SPA se comporte como qualquer outra página da web.

Então, para conseguir isso no código, `router.js` deve ter uma função
para navegar programaticamente para uma nova rota no SPA.

`navigateTo(pathname, props)`: uma função que recebe uma rota, envia um novo
status histórico e representa a nova visualização.

Um exemplo com algum pseudocódigo:

```js
export const navigateTo = (pathname, props) => {
  // push new history state with window.history.pushState
  // render view passing it props
}
```

Nota: já falamos sobre uma função `renderView`, podemos usá-la dentro de
`navigateTo` para manter o código DRY (Don't Repeat Yourself)

Esta função pode ser importada para qualquer visualização que possua links,
botões ou precisa carregar uma nova visualização e chamar um ouvinte de evento.

```js
linkEl.addEventListener('click', () => navigationTo("/about", { nome: "Xochitl" }))
```

#### Passar argumentos para visualizações

Vamos conversar sobre isso - "e passar os argumentos apropriados às visões,
se houver" - e por que pode ser útil.

Há momentos em que queremos passar dados para uma visualização, para que ela
possa ser renderizada com informações mais específicas dependendo dos
dados que vamos passar.

Por exemplo, você pode ter uma rota para exibir uma visualização de
informações do usuário.

```js
const routes = { "/profile": Profile }
```

Para qualquer usuário, queremos mostrar a mesma página em geral,
mas também com informações específicas, como o nome do usuário em
especial.

Em vez de ter uma rota separada definida para cada possível
usuário (tedioso e talvez impossível), temos uma rota `/profile` que chama
a função de visualização do `Profile`, mas a função possui parâmetros para exibir
algo diferente dependendo do valor.

Exemplo:

```js
export const Profile = ({ name }) => {
  const el = document.createElement("p");
  el.innerHTML = `Hello ${name}`;
  return el;
}
```

Observe que `Profile` recebe um objeto e estamos [usando desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#atribui%C3%A7%C3%A3o_para_vari%C3%A1veis_com_novos_nomes)
para retirar e nomear a propriedade que nos interessa como `name`.

Mas como podemos fazer com que os dados passem como argumentos para
a função de visualização?

Com `navigateTo` é mais simples já que podemos passar o argumento
em formato de objeto.

```js
linkEl.addEventListener('click', () => navigationTo("/about", { nome: "Xochitl" }))
```

Mas e se o usuário carregar o URL diretamente?
De onde virá o valor de `nome`?

Existem diversas maneiras de fazer isso com a definição de rotas - algumas são mais
sofisticados e exigem mais código do que outros.

O objeto `window.location` possui algumas propriedades básicas
que podemos usar para comunicar dados. É chamado de parte da `search` ou
`queryString` da URL, que vem depois do "?".

`http://www.website.com?name=Noemi&color=green`
`window.location.search`: `?name=Noemi&color=green`

Pense nisso como pares `chave/valor` separados por "&".

De `http://www.website.com?name=Noemi&color=green` podemos extrair:

```js
{ name: Noemi, color: green }
```

Se você olhar os URLs enquanto navega, verá parâmetros de `search` em todos os lugares.

Então, como passamos da URL para o objeto?
Podemos usar `window.location.search` para obter a parte do URL
que nos interessa (a string de consulta) e usar
uma interface chamada [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

```js
const params = new URLSearchParams("foo=1&bar=2");
```

Isso nos dará uma instância de objeto do tipo `URLSearchParams`
com os parâmetros fornecidos, e com isso podemos iterar para formar um objeto.
(Dica: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
ou [`fromEntries`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
podem ajudar)

Quando seu SPA carrega, antes de chamar `renderView`, o router
deve analisar a URL e extrair os parâmetros `pathname` e `search`
para passar na função de visualização. O mesmo deve acontecer quando houver
um evento `popstate`.

### 4. Responda à navegação `avançar` e `voltar` no navegador

Quando um usuário usa os botões avançar ou voltar no
navegador dentro do seu SPA o router precisa saber quando isso acontece,
analisar `window.location` para os parâmetros `pathname` e `search`
para em seguida, chamar a visualização apropriada para o nome da rota, passando
qualquer parâmetro como argumento.

Em `router.js`, adicionaríamos:

`onURLChange(location)`: Uma função para lidar com alterações de URL com `popstate`.
Quando a URL mudar, analise `pathname` e `search` do
`location` (`window.location`) e depois chame `renderView`.

Precisamos conectar esta função para que ela seja ativada quando o usuário avançar
ou voltar. Para conseguir isso, podemos ouvir o evento `popstate`
da `window`. Quando `popstate` é acionado, significa que o URL mudou
devido à navegação ou interação do usuário.

[Mais informações sobre `popstate`.](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)

### 5. Carregando uma página de erro

Quando o usuário carrega uma URL que não existe na aplicação, a aplicação
deve mostrar uma visualização que informe ao usuário que há algum
erro ou que não foi encontrado.

Para suportar esse comportamento, as rotas de uma aplicação devem ter
uma rota com uma visualização definida para `/error` ou `/not-found`.
No momento em que o router renderiza a visualização e procura
a visualização de uma rota, se não existir, você pode usar `/error`
como uma alternativa.

```js
const renderView = (pathname, props) => {
  // clear the current html
  find the correct view to render --or if there is none, use the error view--
  // call the view function (with the props) and get the new html element
  // put new html in the page
}
```

## API de router básico

Para atingir sua funcionalidade, o router possui duas variáveis globais e privadas
(não exportado).

- `routes` - objeto `{}`: Esta variável armazena informações sobre as rotas em
seu SPA. Cada rota está associada a uma rota e a uma visualização ou componente
correspondente. Se um usuário navegar para uma rota específica, o router
mostrará a visualização correspondente.

- `rootEl` - Elemento DOM: Esta variável armazena o elemento onde o
conteúdo da SPA mudará/aparecerá.

Essas variáveis podem ser lidas e alteradas através de métodos API.
Aqui está uma API completa de um router básico que possui a funcionalidade
que acabamos de abordar.

- `setRootEl(el)`: Esta função possui um parâmetro (elemento).
   Define o elemento raiz onde as visualizações serão renderizadas,
   permitindo que você especifique onde em seu documento HTML
  o conteúdo do SPA aparecerá.

- `setRoutes(routes)`: Esta função define o valor do argumento `routes`
para o objeto `ROUTES`. `routes` deve ser um objeto (considere verificar se
é um objeto e gere um erro se não for). Utilize esta função para
definir as rotas do seu SPA.

- `queryStringToObject(queryString)`: uma função utilitária para converter
uma string `search` ou `query string` (exemplo
`?name=Noemi&color=blue`) em um objeto para fácil acesso
aos parâmetros de consulta. Converte o valor de `queryString`
e retorna um objeto de pares `chave/valor` criados a partir de `queryString`
(por exemplo, `{ name: "Noemi", color: "azul" }`). Você pode fazer isso usando
`URLSearchParams` para converter a string em um tipo de dados iterável.
Você pode então usar `for...of` ou `Object.fromEntries` para criar o objeto a partir
do iterável.
  
- `renderView(pathname, props)`: esta função renderiza uma view no
elemento raiz especificado. Exclue o conteúdo existente, busca a função
de visualização para obter o nome do caminho e, em seguida, busca a visualização.
Funciona em `routes` e chame a função view passando o valor `props` como
argumento para a vista. Adiciona o elemento DOM retornado pela função de
visualização ao elemento `root`.

- `navigateTo(pathname, props)`: Esta função é usada para navegar conforme a
programação para uma nova rota dentro do SPA (por exemplo, clicando
botões ou links dentro do aplicativo). Atualize a URL usando
`window.history.pushState` e então chame `renderView` com o `pathname`
e os `props` fornecidos para exibir a visualização correspondente.

- `onURLChange(location)`: esta função destina-se a lidar com alterações de URL
com `popstate` e também quando o aplicativo carrega pela primeira vez.
Quando a URL mudar, analise `pathname` e `search`
do `location` (`window.location`) e então chame `renderView`.
Você deve usar `queryStringToObject` para obter os parâmetros do
String `search` no formato de objeto para passar para `renderView`.

## Codificando um SPA e router

Vamos montar o router com algumas visualizações simples para fazer um SPA!

### 1. Configure sua estrutura HTML

Crie um arquivo HTML com a estrutura básica do seu SPA.
Defina um elemento raiz (por exemplo, um `<div id="root">`)
onde suas visualizações serão inseridas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your CSS and other head elements here -->
</head>
<body>
    <div id="root"></div> <!-- This is your root element -->
    <script type="module" src="your-app-script.js"></script>
</body>
</html>
```

### 2. Crie as visualizações "views"

Defina views. Uma visualização/view é um componente de função que representa
uma página inteira.
É uma função que cria o conteúdo da view e deve retornar
um elemento DOM para o router usar.

Por exemplo:

```js
// src/views/Home.js

export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';
  return viewEl;
}

// src/views/About.js

export function About(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'This is the About page.';
  return viewEl;
}

// Definir funções/componentes similares para outras rotas
```

### 3. Codifique o router

Em seu próprio arquivo `router.js`, implemente as partes do router a seguir
[a API descrita acima](#api-de-router-básico).
A API que testamos define duas variáveis (`ROUTES` e `rootEl`)
e seis funções.

Considere escrever testes paralelos para cada função para entender
melhor sua intenção.

Exporte as funções que serão utilizadas por outros módulos:
`setRoutes`, `onURLChange`, `setRootEl`, `navigateTo`.

Aqui está um resumo de `router.js` apresentado com pseudocódigo:

```js

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
```

### 4. Configure o router

No seu código JavaScript (por exemplo, `index.js`), inicialize seu router
definindo suas rotas e configurando o elemento raiz:

```js
import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});
```

### 5. Lidar com o carregamento da primeira página

Certifique-se de lidar com o carregamento inicial da página chamando `onURLChange`
com `window.location`.

Em `index.js`

```js
// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
});
```

Teste para ver se, independentemente da URL ser válida,
a visualização correta é carregada.

### 6. Implementar navegação no SPA

Em suas visualizações, você pode usar links âncora `<a>` ou `<button>`
com `navigateTo` para navegar para diferentes rotas.
Lembre-se de que `navigateTo` deve levar argumentos para `pathname` e `props`.

```js
//import navegarTo

export const Home = (props) => {
//...
linkEl.addEventListener('click', () => navigationTo("/about", { nome: "Xochitl" }));
// return el
}
```

### 7. Tratamento dos botões de `forward` e `back` do navegador

Certifique-se de estar ouvindo `popstate` em `index.js` e chamar a função
`onURLChange` quando há um `popstate`.

Quando um usuário clica em um link ou navega usando botões
voltar/avançar do navegador, esta função será chamada para atualizar
a vista mostrada.

```js
// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
   onURLChange(/* location */);
});
```

Experimente usando os botões avançar e voltar.

### 8. Teste a funcionalidade dos parâmetros `search`

Em uma de suas visualizações, experimente ler os parâmetros `search` da
URL, as utilizando na visualização. As funções de visualização devem ter um
parâmetro, vamos chamar `props`, que é um objeto com o qual podemos passar informações
às visualizações/views.

```js
export const Home = (props) => {
  const el = document.createElement('div');
  el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
  console.log(props.id);
  return el;
}
```

Em seguida, na URL adicione os parâmetros de pesquisa
`http://localhost[PORTA]/?name=Xochitl&id=100`.

Lembre-se que você também pode passar `props` com `navigateTo`
com o segundo argumento.

```js
navegateTo("/", { name: "Xóchitl", id: "100"});
```

### 9. Tratamento de erros de roteamento

Um caso de uso comum é o seu router apresentar um
erro quando não é possível encontrar o recurso definido para URL.

Para conseguir isso, adicione uma rota para erro ou não encontrada
ao seu objeto de rotas (exemplo `{ "/error": ErrorView }`) e
em `renderView` usando-o como alternativa se
`routes[pathname]` não produz nada.

### 10. Pronto

Teste o comportamento da sua SPA manualmente clicando e inserindo as URLs.
Escreva testes para a funcionalidade `router.js`, caso ainda não o tenha feito.
