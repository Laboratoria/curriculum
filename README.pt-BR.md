# Bootcamp @Laboratória

[![All Contributors](https://img.shields.io/badge/all_contributors-55-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/Laboratória/bootcamp.svg?branch=master)](https://travis-ci.org/Laboratória/bootcamp)

## Introdução

O _bootcamp_ da Laboratória é um **programa imersivo de aprendizagem de 6
meses** focado nos perfis de **Front-end Developer** e **UX Designer**.
Nosso modelo de aprendizagem se baseia em emular um ambiente de trabalho que prepare nossas estudantes, desenvolvendo as habilidades técnicas e sócio-emocionais necessárias para que comecem a trabalhar.

A **aprendizagem baseado em projetos** é o eixo central sobre o qual se articula a experiência de aprendizagem. Ao completarem uma série de _projetos_, de complexidade gradualmente crescente, permite-se que as estudantes desenvolvam as habilidades necessárias. De todas estas habilidades, consideramos que a **autoaprendizagem** seja a mais importante; acreditamos firmemente que, não somente é uma habilidade indispensável para o mundo do trabalho que as espera, como também é uma ferramenta poderosa para que se tornem mulheres autossuficientes, seguras de seu talento e habilidades e, finalmente, agentes de mudança a longo prazo.

## Mapa de aprendizagem

O _mapa de aprendizagem_ (ou _mapa de projetos_ se divide em 4 _etapas_:
**Pré-admissão**, **Common Core**, **Track** (Front-end Development e UX Design)
e **Eletivos**.

```
Pré    | Common Core          | Trilha                                                  | Eletivos       |
===    | ===========          | =====                                                   | =========      |
       |                      |                                                         |                |
       |                      |  Frontend                                               |                |
       |                      |  social-network > md-links     burger-queen             | battleship     |
       |                      |  /                         \  /                       \ |/               |
       | cipher               | /\                          > -burger-queen-api-client >|                |
       |      \               |/  \                        /  \                       / |\               |
trivia |        > data-lovers |   md-links > social-network    burger-queen-api         | tic-tac-toe-rn |
       |      /               |\                                                        |                |
       | luhn                 | \                                                       | service-design |
       |                      |  UX                                                     |/               |
       |                      |  small businesses > redesign-and-data > ux consultancy  |-design-sprint  |
       |                      |                                                         |\               |
       |                      |                                                         | visual-design  |
       |                      |                                                         |                |
```

***

## Etapa 0: Pré-admissão

A etapa de _admissão_ começa _antes_ da candidata ser aceita no Bootcamp. Ao final de cada _processo de admissão_ convidamos as candidatas pré-selecionadas para completarem um _projeto_ presencialmente em uma de nossas sedes.

### Projeto: Trívia (precisa de refatoração)

* Duração estimada: 3 dias.
* Equipes: 1 estudante
* Tópicos: [JavaScript Basics](topics/javascript/01-basics),
  [HTML Intro](topics/html/01-intro), [CSS](topics/css/01-css).

***

## Etapa 1: Common Core

Com todas as estudantes admitidas, tem início o _common core_. Durante esta etapa serão completados os seguintes _projetos_: 

1. Primeiro, escolhendo entre [Cifra de César](projects/01-cipher) y
   [Validador de cartão de crédito](projects/01-card-validation). Ambos compartilham dos mesmos objetivos de aprendizagem.
2. Uma vez completo o projeto escolhido no ponto anterior, terão que completar o projeto [Data Lovers](projects/02-data-lovers).

Ao final do _common core_ as estudantes participam de um ou mais _hackathons_, trabalhando em projetos menores propostos pela Laboratória e/ou pelas empresas/colaboradores externos.

### Projeto: [Cifra de César](projects/01-cipher)

Este _projeto_ requer a implementação de uma aplicação web baseada em um _boilerplate_ que permita cifrar e decifrar textos usando a técnica da _cifra de César_.

O principal objetivo de aprendizagem deste projeto é passar pela primeira experiência de construção de uma aplicação web, utilizando os conhecimentos adquiridos a respeito de **User Experience Design** e **JavaScript**. Isto inclui desenvolver um produto pensando nos usuários, desenvolver uma interface, ouvir eventos básicos no DOM, escrever a lógica para cifrar e decifrar, _testes_ de unidade básicos para testar (e documentar) essa lógica e manipulação de DOM para exibir os resultados.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante.
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell),
  [Intro a UX Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux).

### Projeto: [Cartão de crédito válido](projects/01-card-validation)

Este _projeto_ requer a implementação de uma aplicação web baseada em um _boilerplate_ que permita a um usuário validar o número de um cartão de crédito e também ocultar todos os dígitos do cartão, exceto os últimos quatro.

O principal objetivo de aprendizagem deste projeto é ter uma primeira experiência no desenvolvimento de uma aplicação web, utilizando os conhecimentos adquiridos sobre **User Experience Design** e **JavaScript**. Isso inclui desenvolver um produto pensado nos usuários, desenvolver uma interface, escutar eventos básicos no DOM, escrever a lógica responsável pela validação do cartão, _testes_ de unidade básicos para validar (e documentar) essa lógica, e manipulação de DOM para exibir os resultados na tela.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante.
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell),
  [Intro a UX Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux).

### Projeto: [Data Lovers](projects/02-data-lovers)

Neste projeto as alunas terão uma primeira aproximação com a processo de transformar _dados_ em informação. O objetivo principal deste projeto é aprender, desenvolver e construir uma _interface web_ onde se possa visualizar e manipular _dados_.

Espera-se que possam pensar no usuário, entender qual é a melhor maneira de visualizar os dados segundo suas necessidades e compor tudo isso em seu _web design_.

Este projeto deve ser desenvolvido em duplas, pois um objetivo importante é ganhar experiência em trabalhos colaborativos com toda a complexidade que isso implica.

* Duração estimada: 3 semanas.
* Equipes: 2 estudantes.
* Tópicos: [Arrays](topics/javascript/04-arrays),
  [Objects](topics/javascript/05-objects), [DOM](topics/browser/02-dom),
  [XHR/fetch](topics/browser/04-xhr), [Visual Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/02-diseno-visual).

***

## Etapa 2: Trilhas

Depois do _common core_ cada grupo se divide em _trilhas especializadas_ e paralelas: _Desenvolvimento Front-End_ e _UX Design_.

### Trilha Front-End Dev

Tópicos comuns (independetes de projeto): [Paradigmas](topics/paradigms) e [JavaScript Funcional](topics/functional).

#### Projeto: [Rede Social](projects/03-social-network)

Neste _projeto_ partimos do pressuposto de que uma empreendedora solicitou um protótipo de _rede social_ com um tema específico, que deverá ser escolhido pelas estudantes.

O objetivo principal de aprendizagem deste projeto é desenvolver um site [_responsivo_](https://github.com/Laboratória/bootcamp/tree/master/topics/css/02-responsive) com mais de uma _view_ (página) onde seja possível ler e escrever dados, entendendo as necessidades dos usuários a quem se destina o produto.

* Duração estimada: 3 semanas.
* Equipes: 3 estudantes.
* Tópicos: **Mobile first**, [Responsive](topics/css/02-responsive), URL, HTTP,
  [Async](topics/javascript/08-async), múltiplas telas, Routing, escrita de dados, `localStorage`, [Firebase](https://firebase.google.com/).

#### Projeto: [Markdown Links](projects/04-md-links)

Dentro de uma comunidade de código aberto, é proposta a criação de uma ferramenta usando [Node.js](https://nodejs.org/) que leia e analise arquivos no formato `Markdown`, verifique se o arquivo contém links e faça algumas checagens.

O objetivo prático deste projeto é aprender a criar uma **biblioteca** (_library_) em JavaScript.

Desenvolver uma bilioteca é uma experiência fundamental para qualquer desenvolvedora, porque obriga a pensar na interface (API) de seus _módulos_ e como será usada por outras desenvolvedoras. É preciso algumas considerações especiais para as particularidades da linguagem, convenções e boas práticas.

* Duração estimada: 3 semanas.
* Equipes: 1 estudante.
* Tópicos: Node.js, NPM, File System, Server, Parsing, Markdown, CLI, HTTP,
  Módulos, [Erros](topics/javascript/09-errors).

#### Projeto: [Burger Queen Serverless](projects/04-burger-queen)

Este _projeto_ requer a implementação de um sistema para que atendentes de uma lanchonete (_Burger Queen_) possam anotar pedidos utilizando um _tablet_.

O objetivo principal de aprendizagem deste projeto é desenvolver uma _interface web_ utilizando um _framework_ (React, Vue ou Angular).

Como objetivo secundário, a implementação deve seguir as recomendações para PWAs (_Progressive Web Apps_), que inclui conceitos como **offline**.

* Duração estimada: 3 semanas.
* Equipes: 1-2 estudantes.
* Tópicos: Frameworks, [React](topics/react), Vue, Angular, PWA, Offline First,
  Service Workers, Serverless.

#### Projeto: [Burger Queen HTTP/JSON API](projects/04-burger-queen-api)

O objetivo principal de aprendizagem é adquirir experiência com **NodeJS** como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série de ferramentas comumente usadas nesse tipo de contexto (Express como _framework_, MongoDB como base de dados e etc).

Neste projeto deverá ser desenvolvido um servidor web que deve _servir_ `JSON` sobre `HTTP`.

Neste projeto partimos de um _boilerplate_ que já contém uma série de _endpoints_ (pontos de conexão ou URLs) e devemos completar a aplicação. Isto significa que teremos que começar lendo a implementação existente e nos familiarizando com o _stack_ utilizado: [Node.js](https://nodejs.org/),
[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/),
[mongoose](https://mongoosejs.com/) e etc.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante
* Tópicos: Node.js, Express, _rotas_ (_routes_), URLs, HTTP (verbs, request,
  response, headers, body, status codes), JSON, MongoDB,
  _variáveis de ambiente_, JWT (_JSON Web Tokens_)

#### Projeto: [Burger Queen API Client](projects/04-burger-queen-api-client)

Este _projeto_ requer a implementação de um sistema para que atendentes de um restaurante (_Burger Queen_) possam anotar pedidos de clientes utilizando um _tablet_.

O objetivo principal de aprendizagem deste projeto é o desenvolvimento de uma _interface web_ que utilize um _framework_ (React, Vue ou Angular).

Como objetivo secundário, a implementação deverá seguir as recomendações para PWAs (_Progressive Web Apps_), que inclui conceitos como **offline**.

* Duração estimada: 3 semanas.
* Equipes: 1-2 estudantes.
* Tópicos: Frameworks, [React](topics/react), Vue, Angular, PWA, Offline First,
  Service Workers, HTTP, JSON, `fetch`.

### Trilha UX Design

#### Projeto: [Empreendimentos](projects/03-small-businesses)

Para este desafio inicial da trilha, as estudantes trabalham com pequenos empreendimentos, buscando oferecer uma experiência online nova e/ou melhor. Para isso, têm que entender os objetivos do negócio e também as necessidades dos usuários/clientes destes pequenos negócios. Durante este desafio, as estudantes fazem trabalho de campo como entrevistas, observação e testes, e desenvolvem soluções utilizando ferramentas de design como Figma e Marvel.

* Duração estimada: 3 semanas
* Equipes: 2 ou 3 estudantes
* Tópicos: UX research (entrevistas, benchmark), arquitetura da informação
  (fluxo de conteúdo, mapa do site), design visual e de interação
  (wireframes e protótipos) e testes com usuários.

#### Projeto: [Redesign e análise de dados](projects/04-redesign-and-data)

Este é um projeto de redesign. Baseando-se nos dados dos resultados obtidos por uma aplicação de serviços financeiros, as estudantes buscam melhorar a experiência da mesma. Em alguns casos o tema pode ser substituído por um desafio dado por uma empresa, com os mesmos objetivos de aprendizagem. 

* Duração estimada: 3 semanas
* Equipes: 2 ou 3 estudantes
* Tópicos: Análise de dados, UX Research, protótipos, idealização, visual design

#### Projeto: [Consultoria em UX](projects/05-ux-consultancy)

Neste desafio, as estudantes trabalham em diferentes casos reais, propostos por empresas de diversas áreas e tamanhos. Desafios anteriores foram propostos por empresas como Kmimos, Guvery, Globant, Sinenvolturas, Magical Startups, Laboratória, entre outras.

* Duração estimada: 3 semanas
* Equipes: A depender dos projetos
* Tópicos: UX Research, protótipos, idealização, visual design

***

## Etapa 3: Capstone / Eletivos

O último mês do Bootcamp - ou por volta do último mês, dependendo do ritmo de avanço de cada uma - espera-se que a estudante desenvolva seu projeto _final_ ou _capstone_, que pode basear-se nos tópicos/tecnologias vistos até o momento, ou cobrir alguns dos tópicos sugeridos (eletivos).

### Trilha Front-End Dev

#### Projeto: [Tic Tac Toe com React Native](projects/05-tic-tac-toe-rn)

O objetivo principal de aprendizagem é ter uma primeira experiência em desenvolvimento de aplicações nativas com React Native.

Neste projeto a estudante terá que desenvolver uma aplicação utilizando React Native e Expo, e publicá-la em sua conta Expo para que seja possível instalá-la em qualquer dispositivo Android ou iOS.

Para completar o projeto, a estudante terá que se familiarizar com conceitos como `View`,
`Text` oo `TouchableOpacity`, além do fluxo próprio de desenvolvimento de apps nativos.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante
* Tópicos: React Native, Expo, componentes nativos, touch events, etc.

#### Projeto: [Batalha Naval](projects/05-battleship)

Batalha Naval é um jogo clássico, com múltiplas versões de tabuleiro e online (se não conhece, pode ver nesse [link](https://pt.wikipedia.org/wiki/Batalha_naval_(jogo))).

Neste projeto a estudante deverá criar uma nova versão, agregando alguma funcionalidade para tornar o jogo mais atrativo para as novas gerações. Também não é necessário criar um jogo sobre navios, é possível desenvolver com qualquer tema que prefira, mantendo apenas a mesma jogabilidade.

* Duração estimada: 2 semanas.
* Equipes: 3 estudantes
* Tópicos: _react_, _angular_, _redux_, _firebase_, _mongodb stitch_.

### Track UX Design

#### Projeto: [Visual Design](projects/06-visual-design)

Neste desafio buscamos melhorar as habilidades de desenho visual de interfaces. Para isso, as estudantes trabalham para melhorar e padronizar a experiência de uma plataforma de venda de ingressos (tradicional) para ajudá-los a competir com novos atores desse segmento, como Stubhub, Eventbrite, Joinnus, entre outros; isso inclui a criação de soluções consistentes para mobile, desktop e smartwatches. Em alguns casos, o tema pode ser substituído por um desafio proposto por uma empresa, porém com os mesmos objetivos de aprendizagem.

* Duração estimada: 3 semanas
* Equipes: A depender dos projetos
* Tópicos: Design Systems, Grid systems, atomic design, componentes,
  consistência, hierarquia, design responsivo.

#### Projeto: [Service Design](projects/06-service-design)

Com a ajuda de consultorias especializadas, como Amable ou Touchpoint, as estudantes devem mergulhar no mundo do _service design_, entendendo problemas de negócio a partir de uma visão mais holística e utilizando ferramentas como Service BluePrint.

* Duração estimada: 3 semanas
* Equipes: A depender dos projetos
* Tópicos: Service design, disruptive design, insights, service prototyping,
  service blueprint

***

## Índice de tópicos

Em uso (`v2.x`):

* [JavaScript](topics/javascript)
* [HTML](topics/html)
* [CSS](topics/css)
* [Browser](topics/browser)
* [SCM: Git + GitHub](topics/scm)
* [UNIX Shell](topics/shell)
* [Paradigmas de programação](topics/paradigms)
* [JavaScript Funcional](topics/functional)
* [React](topics/react)
* [Redux](topics/redux)
* [Intro a UX Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux)
* [Visual Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/02-diseno-visual)

***

## Contribuições

Toda contribuição é **agradecidamente bem-vinda**.

Mas **POR FAVOR** não esqueça de ler detalhadamente o [guia para contribuições](CONTRIBUTING.md) antes de enviar um PR.

Muitos agradecimentos a toda esta gente maravilhosa ([legenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://www.youtube.com/user/lupomontero"><img src="https://avatars3.githubusercontent.com/u/110297?v=4" width="100px;" alt="Lupo Montero"/><br /><sub><b>Lupo Montero</b></sub></a><br /><a href="#question-lupomontero" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Alupomontero" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=lupomontero" title="Code">💻</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=lupomontero" title="Documentation">📖</a> <a href="#example-lupomontero" title="Examples">💡</a> <a href="#ideas-lupomontero" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-lupomontero" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#plugin-lupomontero" title="Plugin/utility libraries">🔌</a> <a href="#review-lupomontero" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=lupomontero" title="Tests">⚠️</a> <a href="#tool-lupomontero" title="Tools">🔧</a> <a href="#video-lupomontero" title="Videos">📹</a></td><td align="center"><a href="https://github.com/chamodev"><img src="https://avatars3.githubusercontent.com/u/25286921?v=4" width="100px;" alt="chamodev"/><br /><sub><b>chamodev</b></sub></a><br /><a href="#ideas-chamodev" title="Ideas, Planning, & Feedback">🤔</a> <a href="#translation-chamodev" title="Translation">🌍</a></td><td align="center"><a href="https://www.facebook.com/medinadiazivan"><img src="https://avatars3.githubusercontent.com/u/9284690?v=4" width="100px;" alt="Ivan Medina"/><br /><sub><b>Ivan Medina</b></sub></a><br /><a href="#question-ivandevp" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Aivandevp" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=ivandevp" title="Code">💻</a> <a href="#example-ivandevp" title="Examples">💡</a> <a href="#review-ivandevp" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/merunga"><img src="https://avatars2.githubusercontent.com/u/211721?v=4" width="100px;" alt="Mariano Crowe"/><br /><sub><b>Mariano Crowe</b></sub></a><br /><a href="#question-merunga" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Amerunga" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=merunga" title="Code">💻</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=merunga" title="Documentation">📖</a> <a href="#example-merunga" title="Examples">💡</a> <a href="#ideas-merunga" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-merunga" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/diegovelezg"><img src="https://avatars0.githubusercontent.com/u/28717078?v=4" width="100px;" alt="Diego"/><br /><sub><b>Diego</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Adiegovelezg" title="Bug reports">🐛</a> <a href="#ideas-diegovelezg" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://anasalazar.github.io/"><img src="https://avatars1.githubusercontent.com/u/25916511?v=4" width="100px;" alt="Ana Steph"/><br /><sub><b>Ana Steph</b></sub></a><br /><a href="#question-AnaSalazar" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AAnaSalazar" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=AnaSalazar" title="Code">💻</a></td><td align="center"><a href="https://github.com/lalogf"><img src="https://avatars1.githubusercontent.com/u/8517182?v=4" width="100px;" alt="Lalo Gonzalez"/><br /><sub><b>Lalo Gonzalez</b></sub></a><br /><a href="#question-lalogf" title="Answering Questions">💬</a> <a href="#design-lalogf" title="Design">🎨</a> <a href="#ideas-lalogf" title="Ideas, Planning, & Feedback">🤔</a></td></tr><tr><td align="center"><a href="http://milmazz.uno"><img src="https://avatars3.githubusercontent.com/u/34700?v=4" width="100px;" alt="Milton Mazzarri"/><br /><sub><b>Milton Mazzarri</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/commits?author=milmazz" title="Code">💻</a> <a href="#example-milmazz" title="Examples">💡</a></td><td align="center"><a href="https://github.com/RuthSalvador"><img src="https://avatars3.githubusercontent.com/u/25906896?v=4" width="100px;" alt="Ruth Abigail Salvador Zorrilla"/><br /><sub><b>Ruth Abigail Salvador Zorrilla</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3ARuthSalvador" title="Bug reports">🐛</a> <a href="#ideas-RuthSalvador" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://maiarojas.github.io/Portafolio_v1/"><img src="https://avatars3.githubusercontent.com/u/25912510?v=4" width="100px;" alt="Maricarmen Rojas Tinco"/><br /><sub><b>Maricarmen Rojas Tinco</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AMaiaRojas" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=MaiaRojas" title="Code">💻</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=MaiaRojas" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/MariPlaza"><img src="https://avatars0.githubusercontent.com/u/14231402?v=4" width="100px;" alt="María Inés Plaza Schwarck"/><br /><sub><b>María Inés Plaza Schwarck</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/commits?author=MariPlaza" title="Code">💻</a> <a href="#example-MariPlaza" title="Examples">💡</a></td><td align="center"><a href="https://github.com/brecabal"><img src="https://avatars1.githubusercontent.com/u/20929277?v=4" width="100px;" alt="Belén Recabal"/><br /><sub><b>Belén Recabal</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Abrecabal" title="Bug reports">🐛</a> <a href="#ideas-brecabal" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/developerVilchez"><img src="https://avatars2.githubusercontent.com/u/28201139?v=4" width="100px;" alt="Lourdes Vílchez"/><br /><sub><b>Lourdes Vílchez</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AdeveloperVilchez" title="Bug reports">🐛</a> <a href="#ideas-developerVilchez" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/FabianBravoA"><img src="https://avatars0.githubusercontent.com/u/7809496?v=4" width="100px;" alt="Fabian Alexis Bravo Abarca"/><br /><sub><b>Fabian Alexis Bravo Abarca</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AFabianBravoA" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=FabianBravoA" title="Code">💻</a> <a href="#example-FabianBravoA" title="Examples">💡</a> <a href="#ideas-FabianBravoA" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-FabianBravoA" title="Reviewed Pull Requests">👀</a></td></tr><tr><td align="center"><a href="https://github.com/AmaliaRiveraC"><img src="https://avatars3.githubusercontent.com/u/25911727?v=4" width="100px;" alt="Amalia Rivera Castillejos"/><br /><sub><b>Amalia Rivera Castillejos</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AAmaliaRiveraC" title="Bug reports">🐛</a> <a href="#ideas-AmaliaRiveraC" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/shirley-startary"><img src="https://avatars0.githubusercontent.com/u/25912292?v=4" width="100px;" alt="Shirley Silvana Suarez Startary"/><br /><sub><b>Shirley Silvana Suarez Startary</b></sub></a><br /><a href="#question-shirley-startary" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Ashirley-startary" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=shirley-startary" title="Code">💻</a> <a href="#example-shirley-startary" title="Examples">💡</a> <a href="#ideas-shirley-startary" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/nerdale"><img src="https://avatars3.githubusercontent.com/u/20868992?v=4" width="100px;" alt="Alexandra Neira"/><br /><sub><b>Alexandra Neira</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Anerdale" title="Bug reports">🐛</a> <a href="#ideas-nerdale" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://michellesegv.github.io/"><img src="https://avatars0.githubusercontent.com/u/10764912?v=4" width="100px;" alt="Michelle Seguil"/><br /><sub><b>Michelle Seguil</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Amichellesegv" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=michellesegv" title="Code">💻</a> <a href="#example-michellesegv" title="Examples">💡</a> <a href="#ideas-michellesegv" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/Carolaboratoria"><img src="https://avatars1.githubusercontent.com/u/28611099?v=4" width="100px;" alt="Carolina Covarrubias"/><br /><sub><b>Carolina Covarrubias</b></sub></a><br /><a href="#question-Carolaboratoria" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=Carolaboratoria" title="Documentation">📖</a> <a href="#ideas-Carolaboratoria" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/joalbertg"><img src="https://avatars1.githubusercontent.com/u/13588707?v=4" width="100px;" alt="Joalbert Andrés González"/><br /><sub><b>Joalbert Andrés González</b></sub></a><br /><a href="#ideas-joalbertg" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/lizzie136"><img src="https://avatars2.githubusercontent.com/u/3421560?v=4" width="100px;" alt="Elizabeth Portilla"/><br /><sub><b>Elizabeth Portilla</b></sub></a><br /><a href="#question-lizzie136" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Alizzie136" title="Bug reports">🐛</a> <a href="#ideas-lizzie136" title="Ideas, Planning, & Feedback">🤔</a></td></tr><tr><td align="center"><a href="https://www.linkedin.com/in/karlanavamuci%C3%B1o/"><img src="https://avatars2.githubusercontent.com/u/25912346?v=4" width="100px;" alt="Karla Nava "/><br /><sub><b>Karla Nava </b></sub></a><br /><a href="#ideas-karlanavam" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://medium.com/@BosqueInvierno"><img src="https://avatars0.githubusercontent.com/u/17767965?v=4" width="100px;" alt="Allison Guzmán"/><br /><sub><b>Allison Guzmán</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Abosqueinvierno" title="Bug reports">🐛</a> <a href="#ideas-bosqueinvierno" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/alejandrarv"><img src="https://avatars3.githubusercontent.com/u/30906042?v=4" width="100px;" alt="Alejandra Ramirez"/><br /><sub><b>Alejandra Ramirez</b></sub></a><br /><a href="#ideas-alejandrarv" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://www.linkedin.com/in/aocsa/"><img src="https://avatars3.githubusercontent.com/u/3615859?v=4" width="100px;" alt="Alexander Ocsa"/><br /><sub><b>Alexander Ocsa</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Aaocsa" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/rocioalberdi"><img src="https://avatars3.githubusercontent.com/u/29586691?v=4" width="100px;" alt="Rocío Alberdi"/><br /><sub><b>Rocío Alberdi</b></sub></a><br /><a href="#ideas-rocioalberdi" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://memecast.github.io/"><img src="https://avatars0.githubusercontent.com/u/25912393?v=4" width="100px;" alt="Ameli C. Gavante"/><br /><sub><b>Ameli C. Gavante</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Amemecast" title="Bug reports">🐛</a> <a href="#ideas-memecast" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/IntiDev"><img src="https://avatars0.githubusercontent.com/u/25912534?v=4" width="100px;" alt="IntiDev"/><br /><sub><b>IntiDev</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AIntiDev" title="Bug reports">🐛</a> <a href="#ideas-IntiDev" title="Ideas, Planning, & Feedback">🤔</a></td></tr><tr><td align="center"><a href="http://emmanuelorozco.com"><img src="https://avatars3.githubusercontent.com/u/5270810?v=4" width="100px;" alt="Emmanuel Orozco"/><br /><sub><b>Emmanuel Orozco</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Aindie-rok" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=indie-rok" title="Code">💻</a> <a href="#ideas-indie-rok" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="http://www.nicolethenerd.com"><img src="https://avatars0.githubusercontent.com/u/1126193?v=4" width="100px;" alt="Nicole Stein"/><br /><sub><b>Nicole Stein</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/commits?author=nicolethenerd" title="Code">💻</a> <a href="#example-nicolethenerd" title="Examples">💡</a> <a href="#ideas-nicolethenerd" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/giancorzo"><img src="https://avatars3.githubusercontent.com/u/501129?v=4" width="100px;" alt="Giancarlo Corzo"/><br /><sub><b>Giancarlo Corzo</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Agiancorzo" title="Bug reports">🐛</a> <a href="#ideas-giancorzo" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/arcuellar88"><img src="https://avatars3.githubusercontent.com/u/9292999?v=4" width="100px;" alt="Alejandro Rodriguez Cuellar"/><br /><sub><b>Alejandro Rodriguez Cuellar</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/commits?author=arcuellar88" title="Code">💻</a> <a href="#ideas-arcuellar88" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/gaposx"><img src="https://avatars2.githubusercontent.com/u/539819?v=4" width="100px;" alt="Gonzalo Parra"/><br /><sub><b>Gonzalo Parra</b></sub></a><br /><a href="#question-gaposx" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Agaposx" title="Bug reports">🐛</a> <a href="#example-gaposx" title="Examples">💡</a> <a href="#ideas-gaposx" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-gaposx" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://cristiancardenas.cl"><img src="https://avatars3.githubusercontent.com/u/25645113?v=4" width="100px;" alt="Cristian K. Cárdenas"/><br /><sub><b>Cristian K. Cárdenas</b></sub></a><br /><a href="#example-ccardensa" title="Examples">💡</a></td><td align="center"><a href="https://github.com/Jonhks"><img src="https://avatars1.githubusercontent.com/u/25328635?v=4" width="100px;" alt="Jonhks"/><br /><sub><b>Jonhks</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AJonhks" title="Bug reports">🐛</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=Jonhks" title="Code">💻</a> <a href="#ideas-Jonhks" title="Ideas, Planning, & Feedback">🤔</a></td></tr><tr><td align="center"><a href="https://github.com/Gabx04"><img src="https://avatars1.githubusercontent.com/u/16655830?v=4" width="100px;" alt="Gabriela Segura"/><br /><sub><b>Gabriela Segura</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AGabx04" title="Bug reports">🐛</a> <a href="#ideas-Gabx04" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://rodrwan.github.io"><img src="https://avatars3.githubusercontent.com/u/2304451?v=4" width="100px;" alt="Rod Fuenzalida"/><br /><sub><b>Rod Fuenzalida</b></sub></a><br /><a href="#ideas-rodrwan" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/rlazo"><img src="https://avatars1.githubusercontent.com/u/368578?v=4" width="100px;" alt="Rodrigo Lazo"/><br /><sub><b>Rodrigo Lazo</b></sub></a><br /><a href="#example-rlazo" title="Examples">💡</a> <a href="#ideas-rlazo" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/aldo-roman"><img src="https://avatars3.githubusercontent.com/u/497197?v=4" width="100px;" alt="Aldo Román Nureña"/><br /><sub><b>Aldo Román Nureña</b></sub></a><br /><a href="#example-aldo-roman" title="Examples">💡</a> <a href="#ideas-aldo-roman" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/nadiatapm"><img src="https://avatars1.githubusercontent.com/u/20929440?v=4" width="100px;" alt="Nadia Tapia"/><br /><sub><b>Nadia Tapia</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Anadiatapm" title="Bug reports">🐛</a> <a href="#ideas-nadiatapm" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/danielasarzosa"><img src="https://avatars3.githubusercontent.com/u/29587100?v=4" width="100px;" alt="Daniela Sarzosa"/><br /><sub><b>Daniela Sarzosa</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Adanielasarzosa" title="Bug reports">🐛</a> <a href="#ideas-danielasarzosa" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/kkatzen"><img src="https://avatars1.githubusercontent.com/u/6402808?v=4" width="100px;" alt="kkatzen"/><br /><sub><b>kkatzen</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Akkatzen" title="Bug reports">🐛</a> <a href="#example-kkatzen" title="Examples">💡</a></td></tr><tr><td align="center"><a href="https://github.com/LucileBaratier"><img src="https://avatars1.githubusercontent.com/u/31043587?v=4" width="100px;" alt="LucileBaratier"/><br /><sub><b>LucileBaratier</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3ALucileBaratier" title="Bug reports">🐛</a></td><td align="center"><a href="https://danielalab.github.io/Daniela-Gonzales/"><img src="https://avatars0.githubusercontent.com/u/32286663?v=4" width="100px;" alt="Daniela Gonzales"/><br /><sub><b>Daniela Gonzales</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3ADanielalab" title="Bug reports">🐛</a> <a href="#ideas-Danielalab" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/laboratoria/bootcamp/commits?author=Danielalab" title="Code">💻</a></td><td align="center"><a href="https://github.com/rafaelbcerri"><img src="https://avatars1.githubusercontent.com/u/11894994?v=4" width="100px;" alt="Rafael Cerri"/><br /><sub><b>Rafael Cerri</b></sub></a><br /><a href="#translation-rafaelbcerri" title="Translation">🌍</a></td><td align="center"><a href="https://github.com/josepaulolima"><img src="https://avatars1.githubusercontent.com/u/31016081?v=4" width="100px;" alt="José Paulo R. de Lima"/><br /><sub><b>José Paulo R. de Lima</b></sub></a><br /><a href="#translation-josepaulolima" title="Translation">🌍</a></td><td align="center"><a href="https://github.com/JulianaAmoasei"><img src="https://avatars3.githubusercontent.com/u/32266030?v=4" width="100px;" alt="Juliana Amoasei"/><br /><sub><b>Juliana Amoasei</b></sub></a><br /><a href="#translation-JulianaAmoasei" title="Translation">🌍</a></td><td align="center"><a href="http://www.agileandart.com"><img src="https://avatars2.githubusercontent.com/u/77552?v=4" width="100px;" alt="Daniel Cukier"/><br /><sub><b>Daniel Cukier</b></sub></a><br /><a href="#translation-danicuki" title="Translation">🌍</a></td><td align="center"><a href="https://github.com/cemsbr"><img src="https://avatars3.githubusercontent.com/u/49481?v=4" width="100px;" alt="Carlos Eduardo Moreira dos Santos"/><br /><sub><b>Carlos Eduardo Moreira dos Santos</b></sub></a><br /><a href="#translation-cemsbr" title="Translation">🌍</a></td></tr><tr><td align="center"><a href="https://github.com/vanessapinheiro"><img src="https://avatars0.githubusercontent.com/u/38503135?v=4" width="100px;" alt="Vanessa Pinheiro"/><br /><sub><b>Vanessa Pinheiro</b></sub></a><br /><a href="#translation-vanessapinheiro" title="Translation">🌍</a></td><td align="center"><a href="https://github.com/juanjordan"><img src="https://avatars1.githubusercontent.com/u/45951334?v=4" width="100px;" alt="Juan"/><br /><sub><b>Juan</b></sub></a><br /><a href="#question-juanjordan" title="Answering Questions">💬</a> <a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Ajuanjordan" title="Bug reports">🐛</a> <a href="#ideas-juanjordan" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://moises.dev"><img src="https://avatars0.githubusercontent.com/u/1197235?v=4" width="100px;" alt="Moisés Cachay Tello"/><br /><sub><b>Moisés Cachay Tello</b></sub></a><br /><a href="#ideas-Xpktro" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://www.linkedin.com/in/ilytrevino/"><img src="https://avatars0.githubusercontent.com/u/8810206?v=4" width="100px;" alt="Ily Treviño"/><br /><sub><b>Ily Treviño</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3Ailytrevino" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/YolandaRib-4"><img src="https://avatars3.githubusercontent.com/u/47006006?v=4" width="100px;" alt="YolandaRib-4"/><br /><sub><b>YolandaRib-4</b></sub></a><br /><a href="https://github.com/laboratoria/bootcamp/issues?q=author%3AYolandaRib-4" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/carlosroec"><img src="https://avatars0.githubusercontent.com/u/1981518?v=4" width="100px;" alt="Carlos G. Rodriguez"/><br /><sub><b>Carlos G. Rodriguez</b></sub></a><br /><a href="#maintenance-carlosroec" title="Maintenance">🚧</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

Este projeto segua a especificação de [all-contributors](https://github.com/kentcdodds/all-contributors). Todo tipo de contribuição é bem-vinda.

## Licença & Copyright

Todos os materiais deste repo são (c) 2017-2019 [Laboratória](http;//Laboratoria.la/).

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

Este trabalho está publicado sob a licença [Creative commons
Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
