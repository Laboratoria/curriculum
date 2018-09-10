# Single-Page Application

- Tipo: `leitura`
- Formato: `individual`
- Duração: `25min`

***

## Objetivos

- Entender o que é uma SPA e quais componentes a tornam única.

## O que é uma SPA?

> O termo "sigle-page application" (ou SPA) normalmente descreve aplicações que foram construídas para a web. Essas aplicações são acessadas por meio de um navegador como outros sítios web, mas oferece mais interações dinâmicas como se fosse uma aplicação de celular ou nativa de desktop.
> 
> A diferença mais notável entre um sítio web e uma SPA é a quantidade reduzida de atualizações da páginas. As SPAs têm um uso maior de AJAX - maneira de comunicar com servidores *back-end* sem fazer uma atualização completa da página - para trazer dados à nossa aplicação. Como resultado, o processo de renderização da página ocorre principalmente no lado do cliente (navegador).

Este é um trecho traduzido do espanhol do blog sobre [Single-page Applications de CodeSchool](https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications).

## Componentes de uma SPA

As SPAs contam com alguns componentes que fazem com que todo o desenvolvimento delas seja mais rápido e específico. São eles: *routing*, *templates* (modelos, em português), manipulação de eventos e padrão de arquitetura de software (comumente MVC ou derivados).

### *Routing*

A particularidade dos SPAs é que cada link que redireciona para um sítio é manipulado pelo navegador e não se necessita atualizar a página toda.

#### Exemplo

Se formos à documentação de uma biblioteca para manipulação de rotas em JavaScript como [Page.js](https://visionmedia.github.io/page.js/) podemos encontrar exemplos como o seguinte. Preste atenção especial à URL que o navegador exibe a cada interação com os links.

![Routing SPA](https://media.giphy.com/media/piK4xKsqCG7H8ESRyL/giphy.gif)

### *Templates*

Quando vamos criar um sítio completo, é comum encontrarmos coisas repetidas na estrutura de nosso sítio como o cabeçalho, rodapé, lista de posts em um blog ou outra seção. O que acontece nesse casos é que nosso HTML em particular começa a ser redundante e muito repetitivo. Os frameworks de SPA normalmente usam um sistema de modelos ou *templates*. Para você ter uma ideia do que são esses sistemas, você pode olhar o [Pug](https://pugjs.org/api/getting-started.html) ou o [Handlebars](http://handlebarsjs.com/). Mais adiante você verá que cada framework implementa seu próprio sistema de modelos.

#### Exemplo

Neste exemplo, cada item que é adicionado está em um model e se quisermos mudar sua estrutura, só precisamos fazer em um lugar:

<iframe height='760' scrolling='no' title='JSD - jQuery - Handlebars-  To Do List - Solution' src='//codepen.io/jkeohan/embed/LkoXGo/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jkeohan/pen/LkoXGo/'>JSD - jQuery - Handlebars-  To Do List - Solution</a> by Joe (<a href='https://codepen.io/jkeohan'>@jkeohan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Manipulação de Eventos

Uma das particularidades dos frameworks de JavaScript que permitem criar SPAs é não ter que se preocupar em fazer `.addEventListener` a cada instante ou como manipular o DOM. Geralmente, eles fornecem uma maneira mais direta e abstrata de fazê-lo.

#### Exemplo

O exemplo a seguir está usando um framework chamado [Vue.js](https://vuejs.org/). Se você observar o HTML, a maneira como ele adiciona o evento clique é por meio de um atributo personalizado `@click` e a maneira de mostrar todas as tarefas é por meio de `v-for`. Quais outros atributos e/ou particularidades você observa?

<iframe height='760' scrolling='no' title='Vue Todo List' src='//codepen.io/cojdev/embed/pdKBWE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/cojdev/pen/pdKBWE/'>Vue Todo List</a> by Charles Ojukwu (<a href='https://codepen.io/cojdev'>@cojdev</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### MVC

> O MVC ou Modelo-Visualização-Controlador é um padrão de arquitetura de software que utilizando 3 componentes (Visualizações, Modelos e Controladores), separando a lógica da aplicação da lógica da visualização de uma aplicação. É uma arquitetura importante porque é utilizada tanto em componentes gráficos básicos até sistemas empresariais; a maioria dos frameworks modernos utilizam MVC (ou alguma adaptação de MVC) na arquitetura. Entre eles, podemos mencionar Ruby on Rails, Django, AngularJS e muitos outros mais. Neste pequeno artigo tentamos introduzir os conceitos do MVC.

Este é um trecho de um blog sobre [MVC de Código Fácil](https://codigofacilito.com/articulos/mvc-model-view-controller-explicado).

Embora tenhamos abordado aqui o padrão MVC, no desenvolvimento web, devido à quantidade imensa de ferramentas que temos à disposição, existem muitos derivados desse padrão como MVM, MVT, MVP, entre outros. Por isso a sigla MV* ou MVW (Model-View-Whatever) tem sido utilizada para se referir a esses padrões.

#### Exemplo

Neste exemplo, podemos ver como nossos dados (vetor de objetos) está representado pelo modelo. As visualizações fazem referência ao HTML, enquanto que a resposta da interação do usuário é manipulada pelo controlador.

<iframe height='760' scrolling='no' title='Cat Clicker: MVC JS Pattern' src='//codepen.io/veer_cg/embed/VLoOrY/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/veer_cg/pen/VLoOrY/'>Cat Clicker: MVC JS Pattern</a> by Veer Chandra (<a href='https://codepen.io/veer_cg'>@veer_cg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Recursos

Aqui deixamos um vídeo que explica a grande diferença entre as SPAs e os sítios web comuns.

<iframe src="https://player.vimeo.com/video/76871491?color=00adef" width="760" height="570">
</iframe>  

Se você deseja um pouco mais de detalhe sobre os componentes de uma SPA, e em particular sobre os frameworks de JS que são usados nelas, aqui deixamos um vídeo (em inglês) de nossos amigos da Udacity.

[![Core Framework Components](https://img.youtube.com/vi/ZxnZj7UTw1c/0.jpg)](https://youtu.be/ZxnZj7UTw1c)

Por fim, se você quiser revisar quais frameworks existem ou começar a comparar alguns deles, existe um sítio chamado [TodoMVC](http://todomvc.com/) com uma aplicação (um *To Do List*) construída com diversas bibliotecas e frameworks para que você analise o código fonte e veja qual lhe chama mais a atenção.
