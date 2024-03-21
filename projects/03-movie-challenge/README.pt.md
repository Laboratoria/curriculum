# Projeto de extensão: Movie Challenge

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Considerações técnicas](#6-considerações-tecnicas)
- [6. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-minimos-do-projeto)
- [7. Deploy](#7-deploy)
- [8. Considerações para solicitar seu feedback do projeto](#8-considerações-para-solicitar-seu-feedback-do-projeto)
- [9. Dicas, guias e leituras complementares](9#-dicas-guias-e-leituras-complementares)

---

## 1. Preâmbulo

A forma que vemos filmes mudou radicalmente durante os últimos anos
devido, em parte, a aparição dos serviços de  [_streaming_](https://pt.wikipedia.org/wiki/Streaming)
que nos permite assistir em qualquer lugar e momento. O melhor reflexo
deste fenômeno é o sucesso da Netflix, HBO e Disney+, etc.

Em tempos em que uma das principais ferramentas para combater [a pandemia
de Covid-19](https://pt.wikipedia.org/wiki/COVID-19) é [evitar](https://pt.wikipedia.org/wiki/Distanciamento_social)
compartilhar espaços com muitas pessoas (como no cinema), e assistir _streaming_
será uma das poucas formas (ou a única) de ver filmes.

Acreditamos que há uma grande oportunidade de propor produtos/experiências
inovadoras de tudo tipo utilizando dados de filmes (directorxs, atores/atrizes,
sagas, sequências, datas, etc.). Poderíamos pensar em jogos, comunidades,
catálogos, recomendações baseadas em gostos pessoais, etc. (apenas para
mencionar algumas ideias obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

Neste projeto, você criará uma página da web destinada a visualizar, filtrar e
ordenar o catálogo de filmes da [_The Movie Database API V3_](https://developer.themoviedb.org/docs)
Esta página pode servir como um catálogo de filmes geral, mas também, se você
quiser, pode considerar a possibilidade de projetá-la para um público específico
com preferências como "filmes western" ou "filmes dos anos 80", por exemplo.

Ainda que a decisão do que fazer é inteiramente sua, há algumas considerações
gerais que se apresentam a seguir. Pode atender esses requisitos em
projetos muitos distintos, depende de sua criatividade e do entendimento
dos seus potenciais usuários!

## 3. Objetivos de aprendizagem

## 4. Considerações gerais

- Este projeto deve ser resolvido individualmente.
- O prazo estimado para concluir o projeto é de 4 Sprints.
- Além disso, você deve definir a estrutura de pastas e arquivos que considerar
necessária. Portanto, os testes e a configuração necessária para executá-los
serão de sua responsabilidade, mas você pode se basear nos projetos anteriores.

## 5. Considerações técnicas

- A aplicação deve ser uma Single Page App.
- A aplicação não precisa ser responsiva.
- Os testes unitários devem cobrir no mínimo 90% de statements, functions, lines
e branches.
- Para usar a API de [_The Movie Database API V3_](https://developer.themoviedb.org/docs/getting-started)
você deve criar uma conta e, em seguida, uma chave de acesso (key) e usá-la em
cada solicitação que fizer ao servidor. Lembre-se de que você tem um limite
máximo de 1.000 solicitações diárias à API por cada IP, portanto, aconselhamos a
fazer um uso responsável desse recurso gratuito.

- O boilerplate contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
├── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── index.html
    ├── main.js
    └── style.css

```

### `src/index.html`

Como no projeto anterior, existe um arquivo `index.html`. Como já sabe, aqui
entra a página que vai ser exibida ao usuário. Também serve para indicar quais
scripts serão utilizados e juntar tudo o que foi feito.

### `src/main.js`

Recomendamos usar `src/main.js` como ponto de entrada da sua aplicação. O
_boilerplate_ inclui este arquivo para conectar ou montar o componente `App` no
DOM. Desta forma poderemos fazer testes unitários de nossos componentes sen
necessidade de que estejam conectados a um DOM global.

Aqui é onde recomendamos implementar a sua SPA.

Esta não é a única forma de dividir seu código. Pode usar mais arquivos e pastas
contanto que a estrutura esteja clara.

### `src/components/App.js`

Este arquivo contém um componente de exemplo que mostra como podemos representar
um componente como uma função que retorna um `HTMLElement`. Na hora de construir
interfaces, é útil pensar nos termos de _componentes_ ou vistas que podemos ir
aninhando umas dentro das outras. Te convidamos a pensar quais _componentes_ ou
caixinhas são necessárias para construir sua aplicação e que vá adicionando
_componentes_ no directorio `components` para implementar cada um deles. Embora,
novamente, no final, a forma de organizar seu arquivos depende de você e da sua
equipe. Há muitas formas de faze-lo, e o boilerplate é apenas uma sugestão 🙊.

### `scr/components/App.spec.js`

Este arquivo mostra como podemos criar arquivos com especificações (expressadas
como testes unitários) de nossos componentes.

## 6. Critérios de aceitação mínimos do projeto

### Protótipo de Baixa Fidelidade

O [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
fornece uma primeira iteração do protótipo de baixa fidelidade da aplicação
nesta [imagem](https://github.com/Laboratoria/SAP012-movie-challenge/blob/main/docs/movie-detail.png)
e [nesta](https://github.com/Laboratoria/SAP012-movie-challenge/blob/main/docs/movie-list.png)
outra.

### Definição do Produto

O [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
apresenta este backlog que é o resultado de seu trabalho com o cliente até o
momento.

---

#### [História do Usuário 1] Lista de Filmes

Eu, como usuária, quero visualizar um catálogo de filmes em uma tabela (linhas
e colunas).

##### Critérios de aceitação

- Deve ser utilizado [o endpoint /`discover/movie`](https://developer.themoviedb.org/reference/discover-movie).
- A aplicação deve incluir paginação para explorar o catálogo por páginas.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 2] Detalhes de um Filme

Eu, como usuária, quero consultar os detalhes de um filme.

##### Critérios de Aceitação

- Deve ser usado [o endpoint /movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para o filme, devem ser exibidos pelo menos: pôster, título original, ano de
lançamento, gêneros, média de votação e total de votos.
- A interface deve permitir retornar à lista de filmes, mantendo o filtro e a
ordenação.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 3 - Hacker Edition] Filtro e Ordenação

Eu, como usuária, quero filtrar e ordenar o catálogo de filmes usando os
critérios suportados pela TheMovie Database API V3.

##### Critérios de Aceitação

- Para filtrar, deve ser usado o endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e um ou mais de seus parâmetros, como, por exemplo, with_genres.
- Para ordenar, deve ser usado o endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e um ou mais de seus parâmetros, como, por exemplo, sort_by.
- A paginação deve manter o filtro e a ordenação.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

## 7. Deploy

Você pode escolher o provedor (ou provedores) que preferir, juntamente com o
mecanismo de deploy e estratégia de hospedagem. Recomendamos explorar as
seguintes opções:

- [Vercel](https://vercel.com/) é uma plataforma que permite fazer deploy da
nossa aplicação web estática (HTML, CSS e JavaScript) e também permite fazer
deploy de aplicativos da web que são executados no servidor (Node.js).
- [Netlify](https://www.netlify.com/) é semelhante ao Vercel, sendo uma
plataforma que permite fazer deploy da nossa aplicação web estática (HTML, CSS e
JavaScript) e também permite fazer deploy de aplicativos da web que são
executados no servidor (Node.js).

## 8. Considerações para solicitar seu feedback do projeto

Antes de agendar seu feedback do projeto com um coach, certifique-se de que seu
projeto:

- [ ] Tenha protótipo de alta fidelidade no Figma
- [ ] Atende a todos os [critérios mínimos de aceitação](#6-criterios-minimos-de-aceitacao-do-projeto)
- [ ] Está hospedado no GitHub
- [ ] Está com o [deploy](#7-deploy) realizado
- [ ] Possui um README com a definição do produto

Lembre-se de fazer uma autoavaliação dos _objetivos de aprendizagem_ e
_habilidades pessoais_ em seu painel de estudante.

Se você não concluiu todos os itens acima, não consideramos que você está
pronto para sua sessão de feedback do projeto.

## 9. Dicas, guias e leituras complementares

### Protótipo de Alta Fidelidade

Com base no protótipo de baixa fidelidade fornecido, crie um protótipo de alta
fidelidade no Figma. Defina uma paleta de cores e um design gráfico. Tente
concluir isso em 1 ou 2 dias.

### Explore e consuma a API do The Movie Database

Explore a documentação da API do The Movie Database. Comece lendo a seção
[Getting Started](https://developer.themoviedb.org/docs/getting-started)
depois [AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
e, finalmente, as referências dos endpoints [/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Em seguida, crie uma conta e gere uma chave (key) de acesso para consumir a API.

Finalmente, faça solicitações HTTP de teste à API usando ferramentas como [Postman](https://www.postman.com/)
ou [REST Client](ttps://marketplace.visualstudio.com/items?itemName=humao.rest-client)
Identifique os cabeçalhos, corpo, verbos, códigos de resposta e codificações das
solicitações.

### Planeje a implementação da primeira história de usuário

Pegue a primeira história de usuário e divida-a em tarefas menores. Identifique
a ordem e a prioridade de cada tarefa. Documente seu planejamento no Trello ou
Github Project.

### Compreensão dos Conceitos de SPA (Single Page Application) e Roteamento

Antes de começar a codificar, certifique-se de entender os conceitos de uma
Aplicação de Página Única (SPA) e o roteamento de páginas. Isso permitirá criar
uma experiência de usuário fluída e dinâmica. Pesquise as melhores práticas e
ferramentas disponíveis para implementar uma SPA no seu projeto.

Recomendamos fazer uma SPA mais simples usando `hashchange`. Esse [video](https://youtu.be/hf8x3A1e57Y)}
pode te ajudar a construir a sua SPA na `main.js`

Caso sobre tempo e você queira se aprofundar nas rotas e na construção de uma
SPA mais robusta, como `Hacker Edition`, você pode implementar esse roteador com
[Javascript puro](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md)

Se divirta e comece esta aventura 🎬!
