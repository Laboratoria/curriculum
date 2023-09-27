# Movie Challenge con Framework

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do Projeto](#2-resumo-do-projeto)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações Gerais](#4-considerações-gerais)
- [5. Considerações Técnicas](#5-considerações-técnicas)
- [6. Critérios mínimos de aceitação do projeto](#6-critérios-mínimos-de-aceitação-do-projeto)
- [7. Deploy](#7-deploy)
- [8. Considerações para solicitar seu feedback do projeto](#8-considerações-para-solicitar-seu-feedback-do-projeto)
- [9. Dicas, guias e leituras complementares](#9-dicas-guias-e-leituras-complementares)

---

## 1. Preâmbulo

A forma como assistimos à filmes mudou radicalmente nos últimos anos devido,
em parte, ao surgimento dos serviços de
[_streaming_](https://pt.wikipedia.org/wiki/Streaming)
que nos permitem fazê-lo de onde estivermos e a qualquer momento. O melhor
reflexo desse fenômeno é o sucesso da Netflix, HBO, Disney+ e outros.

Acreditamos que há uma grande oportunidade de propor produtos/experiências
inovadoras de todos os tipos usando dados de filmes
(diretores, atores, sagas, sequências, datas, etc.). Podemos pensar em jogos,
comunidades, catálogos, recomendações com base em preferências pessoais, etc.
(apenas para citar algumas ideias óbvias).

![Filmes](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

Neste projeto, você criará uma página da web destinada a visualizar, filtrar e
ordenar o catálogo de filmes da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página pode servir como um catálogo de filmes geral, mas também, se você
quiser, pode considerar a possibilidade de projetá-la para um público específico
com preferências como "filmes western" ou "filmes dos anos 80", por exemplo.

Para implementar este projeto, você deve escolher um framework entre
[React](https://pt-br.reactjs.org/) e [Angular](https://angular.io/).
Ao escolher um framework ou biblioteca para nossa interface, baseamo-nos em
uma série de convenções e implementações comprovadas e documentadas para
resolver um problema comum a todas as interfaces da web:
[manter a interface sincronizada com o estado](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Isso nos permite nos concentrar melhor (dedicar mais tempo) nas características
específicas de nossa aplicação.

Quando escolhemos uma dessas tecnologias, não estamos apenas importando um
pedaço de código para reutilizá-lo (o que por si só é um grande valor),
mas também adotando uma **arquitetura**, uma série de **princípios de design**,
um **paradigma**, **abstrações**, um **vocabulário**, uma **comunidade**, etc...

Como desenvolvedora Front-end, esses kits de desenvolvimento podem ser de
grande ajuda para implementar rapidamente características nos projetos em
que você trabalha.

## 3. Objetivos de Aprendizagem

> ℹ️ Esta seção será gerada automaticamente no idioma apropriado, a partir dos
objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao criar
o repositório do projeto para uma turma específica, usando
[`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui está uma
[lista de todos os objetivos de aprendizado](../../learning-objectives/data.yml)
contemplados em nosso currículo.

## 4. Considerações Gerais

Este projeto deve ser resolvido individualmente.

O prazo estimado para concluir o projeto é de 2 a 3 Sprints.

Os testes unitários devem cobrir no mínimo 90% de _statements_,
_functions_, _lines_ e _branches_.

Além disso, você deve definir a estrutura de pastas e arquivos que
considerar necessária. Você pode seguir as convenções do framework
escolhido. Portanto, os testes e a configuração necessária para executá-los
serão de sua responsabilidade.

## 5. Considerações Técnicas

A aplicação deve ser uma _Single Page App_.

A aplicação não precisa ser _responsiva_.

Para poder usar a API da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs),
você deve criar uma conta e, em seguida, uma chave de acesso (_key_)
e usá-la em cada solicitação que fizer ao servidor. Lembre-se de que
você tem um limite máximo de 1.000 solicitações diárias à API por cada
[IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP), portanto, aconselhamos
a fazer um uso responsável desse recurso gratuito.

Um dos principais objetivos deste projeto é aprender a usar uma biblioteca
ou framework popular para desenvolver um aplicativo da web. Você deve escolher
entre [React](https://pt-br.reactjs.org/) ou [Angular](https://angular.io/).

Lembre-se de que, se escolher o Angular, é obrigatório usar o
[TypeScript](https://www.typescriptlang.org/). O TypeScript é uma linguagem
de programação fortemente tipada baseada em JavaScript.

Se escolher o React, a decisão de usar o TypeScript é opcional
(mas recomendada!). Aqui você pode encontrar mais informações sobre
como iniciar seu projeto com
[TypeScript e React](https://itnext.io/create-react-v18-typescript-project-with-vite-d0d602e4a60e).

A aplicação deve usar `npm-scripts` e deve incluir scripts `start`, `test`,
`build` e `deploy` para iniciar, executar testes, empacotar e implantar a
aplicação, respectivamente.

## 6. Critérios mínimos de aceitação do projeto

### Protótipo de Baixa Fidelidade

O [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos fornece uma primeira iteração do protótipo de baixa fidelidade da
aplicação nesta [imagem](./docs/movie-list.png) e nesta
[outra](./docs/movie-detail.png).

### Definição do Produto

O
[_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos apresenta
este _backlog_ que é o resultado de seu trabalho com o cliente até
o momento.

---

#### [História do Usuário 1] Lista de Filmes

Eu, como usuária, quero visualizar um catálogo de filmes em uma tabela
(linhas e colunas).

##### Critérios de aceitação

- Deve ser utilizado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- A aplicação deve incluir paginação para explorar o catálogo por páginas.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 2] Filtro e Ordenação

Eu, como usuária, quero filtrar e ordenar o catálogo de filmes usando os
critérios suportados pela _TheMovie Database API V3_.

##### Critérios de Aceitação

- Para filtrar, deve ser usado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
e um ou mais de seus parâmetros, como, por exemplo, _with_genres_.
- Para ordenar, deve ser usado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
e um ou mais de seus parâmetros, como, por exemplo, _sort_by_.
- A paginação deve manter o filtro e a ordenação.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 3] Detalhes de um Filme

Eu, como usuária, quero consultar os detalhes de um filme.

##### Critérios de Aceitação

- Deve ser usado o _endpoint_
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para o filme, devem ser exibidos pelo menos: pôster, título original, ano
de lançamento, gêneros, média de votação e total de votos.
- A interface deve permitir retornar à lista de filmes, mantendo o filtro
e a ordenação.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

## 7. Deploy

Você pode escolher o provedor (ou provedores) que preferir, juntamente com
o mecanismo de deploy e estratégia de hospedagem. Recomendamos explorar
as seguintes opções:

- [Vercel](https://vercel.com/) é uma plataforma que permite
fazer deploy da nossa aplicação web estática (HTML, CSS e JavaScript) e também
permite fazer deploy de aplicativos da web que são executados no servidor (Node.js).
- [Netlify](https://www.netlify.com/) é semelhante ao Vercel, sendo uma
plataforma que permite fazer deploy da nossa aplicação web estática
(HTML, CSS e JavaScript) e também permite fazer deploy de aplicativos
da web que são executados no servidor (Node.js).

## 8. Considerações para solicitar seu feedback do projeto

Antes de agendar seu feedback do projeto com um coach, certifique-se de que seu projeto:

- [ ] Tenha protótipo de alta fidelidade no Figma
- [ ] Atende a todos os [critérios mínimos de aceitação](#6-criterios-minimos-de-aceitacao-do-projeto)
- [ ] Está hospedado no GitHub
- [ ] Está com o [deploy](#7-Deploy) realizado
- [ ] Possui um README com a definição do produto

Lembre-se de fazer uma autoavaliação dos objetivos de aprendizagem e habilidades
pessoais em seu painel de estudante.

Se você não concluiu todos os itens acima, não consideramos que você está pronto
para sua sessão de feedback do projeto.

## 9. Dicas, guias e leituras complementares

Junte-se ao canal do Slack
[#project-movie-challenge-fw](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar e pedir ajuda sobre o projeto.

### Protótipo de Alta Fidelidade

Com base no protótipo de baixa fidelidade fornecido, crie um protótipo de alta
fidelidade no Figma. Defina uma paleta de cores e um design gráfico. Tente concluir
isso em 1 ou 2 dias.

### Explore e consuma a API do The Movie Database

Explore a [documentação](https://developer.themoviedb.org/docs) da API do
The Movie Database. Comece lendo a seção
[Getting Started](https://developer.themoviedb.org/docs/getting-started),
depois
[AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
e, finalmente, as referências dos endpoints
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Em seguida, crie uma conta e gere uma chave (key) de acesso para consumir a API.

Finalmente, faça solicitações HTTP de teste à API usando ferramentas como
[Postman](https://www.postman.com/) ou
[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
Identifique os cabeçalhos, corpo, verbos, códigos de resposta
e codificações das solicitações.

### Explore a documentação do framework escolhido

A comunidade de desenvolvedores de cada framework se esforçou muito para
criar documentações amigáveis para aqueles que estão começando com cada
tecnologia. Portanto, dê a si mesma a oportunidade de explorar a documentação
e experimentar seus exemplos e tutoriais.

### Planeje a implementação da primeira história de usuário

Pegue a primeira história de usuário e divida-a em tarefas menores. Identifique
a ordem e a prioridade de cada tarefa. Documente seu planejamento no Trello ou
Github Project.

### Implemente seu primeiro componente

Pegue a primeira visualização do protótipo de alta fidelidade e a implemente.
Sugerimos seguir os seguintes passos, independentemente do framework que você
estiver usando:

- Passo 1: Separe a interface do usuário em uma hierarquia de componentes.
- Passo 2: Crie uma versão estática da interface do usuário sem adicionar
nenhuma interatividade ainda.
- Passo 3: Encontre a representação mínima, mas completa, do estado da interface
do usuário. Pense no estado como o conjunto mínimo de dados em constante mudança
que a aplicação precisa lembrar.
- Passo 4: Depois de identificar os dados mínimos de estado de sua aplicação,
identifique qual componente é responsável por alterar esse estado ou possui o estado.
- Passo 5: Identifique o fluxo de comunicação entre cada componente: de pai
para filho ou de filho para pai. Implemente a estratégia identificada conforme
sugerido pelo framework.

### Frameworks / bibliotecas

- [React](https://pt-br.reactjs.org/)
- [Angular](https://angular.io/)
- [ViteJs](https://vitejs.dev/)
