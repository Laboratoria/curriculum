# Bootcamp @Laboratória

[![All
Contributors](https://img.shields.io/badge/all_contributors-55-orange.svg?style=flat-square)](#contributors)
[![Build
Status](https://travis-ci.org/Laboratória/bootcamp.svg?branch=master)](https://travis-ci.org/Laboratória/bootcamp)

## Introdução

O _bootcamp_ da Laboratória é um **programa imersivo de aprendizagem de 6
meses** focado nos perfis de **Front-end Developer** e **UX Designer**. Nosso
modelo de aprendizagem se baseia em emular um ambiente de trabalho que prepare
nossas estudantes, desenvolvendo as habilidades técnicas e sócio-emocionais
necessárias para que comecem a trabalhar.

A **aprendizagem baseada em projetos** é o eixo central sobre o qual se articula
a experiência de aprendizagem. Ao completarem uma série de _projetos_, de
complexidade gradualmente crescente, permite-se que as estudantes desenvolvam as
habilidades necessárias. De todas estas habilidades, consideramos que a
**autoaprendizagem** seja a mais importante; acreditamos firmemente que, não
somente é uma habilidade indispensável para o mundo do trabalho que as espera,
como também é uma ferramenta poderosa para que se tornem mulheres
autossuficientes, seguras de seu talento e habilidades e, finalmente, agentes de
mudança a longo prazo.

## Mapa de aprendizagem

O _mapa de aprendizagem_ (ou _mapa de projetos_ se divide em 4 _etapas_:
**Pré-admissão**, **Common Core**, **Track** (Front-end Development e UX Design)
e **Eletivos**.

```markdown
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

A etapa de _admissão_ começa _antes_ da candidata ser aceita no Bootcamp. Ao
final de cada _processo de admissão_ convidamos as candidatas pré-selecionadas
para completarem um _projeto_ presencialmente em uma de nossas sedes.

### Projeto: Trívia (precisa de refatoração)

* Duração estimada: 3 dias.
* Equipes: 1 estudante
* Tópicos: [JavaScript Basics](topics/javascript/01-basics), [HTML
  Intro](topics/html/01-intro), [CSS](topics/css/01-css).

***

## Etapa 1: Common Core

Com todas as estudantes admitidas, tem início o _common core_. Durante esta
etapa serão completados os seguintes _projetos_:

1. Primeiro, escolhendo entre [Cifra de César](projects/01-cipher) y [Validador
   de cartão de crédito](projects/01-card-validation). Ambos compartilham dos
   mesmos objetivos de aprendizagem.
2. Uma vez completo o projeto escolhido no ponto anterior, terão que completar o
   projeto [Data Lovers](projects/02-data-lovers).

Ao final do _common core_ as estudantes participam de um ou mais _hackathons_,
trabalhando em projetos menores propostos pela Laboratória e/ou pelas
empresas/colaboradores externos.

### Projeto: [Cifra de César](projects/01-cipher)

Este _projeto_ requer a implementação de uma aplicação web baseada em um
_boilerplate_ que permita cifrar e decifrar textos usando a técnica da _cifra de
César_.

O principal objetivo de aprendizagem deste projeto é passar pela primeira
experiência de construção de uma aplicação web, utilizando os conhecimentos
adquiridos a respeito de **User Experience Design** e **JavaScript**. Isto
inclui desenvolver um produto pensando nos usuários, desenvolver uma interface,
ouvir eventos básicos no DOM, escrever a lógica para cifrar e decifrar, _testes_
de unidade básicos para testar (e documentar) essa lógica e manipulação de DOM
para exibir os resultados.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante.
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell), [Intro a UX
  Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux).

### Projeto: [Cartão de crédito válido](projects/01-card-validation)

Este _projeto_ requer a implementação de uma aplicação web baseada em um
_boilerplate_ que permita a um usuário validar o número de um cartão de crédito
e também ocultar todos os dígitos do cartão, exceto os últimos quatro.

O principal objetivo de aprendizagem deste projeto é ter uma primeira
experiência no desenvolvimento de uma aplicação web, utilizando os conhecimentos
adquiridos sobre **User Experience Design** e **JavaScript**. Isso inclui
desenvolver um produto pensado nos usuários, desenvolver uma interface, escutar
eventos básicos no DOM, escrever a lógica responsável pela validação do cartão,
_testes_ de unidade básicos para validar (e documentar) essa lógica, e
manipulação de DOM para exibir os resultados na tela.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante.
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell), [Intro a UX
  Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux).

### Projeto: [Data Lovers](projects/02-data-lovers)

Neste projeto as alunas terão uma primeira aproximação com a processo de
transformar _dados_ em informação. O objetivo principal deste projeto é
aprender, desenvolver e construir uma _interface web_ onde se possa visualizar e
manipular _dados_.

Espera-se que possam pensar no usuário, entender qual é a melhor maneira de
visualizar os dados segundo suas necessidades e compor tudo isso em seu _web
design_.

Este projeto deve ser desenvolvido em duplas, pois um objetivo importante é
ganhar experiência em trabalhos colaborativos com toda a complexidade que isso
implica.

* Duração estimada: 3 semanas.
* Equipes: 2 estudantes.
* Tópicos: [Arrays](topics/javascript/04-arrays),
  [Objects](topics/javascript/05-objects), [DOM](topics/browser/02-dom),
  [XHR/fetch](topics/browser/04-xhr), [Visual
  Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/02-diseno-visual).

***

## Etapa 2: Trilhas

Depois do _common core_ cada grupo se divide em _trilhas especializadas_ e
paralelas: _Desenvolvimento Front-End_ e _UX Design_.

### Trilha Front-End Dev

Tópicos comuns (independetes de projeto): [Paradigmas](topics/paradigms) e
[JavaScript Funcional](topics/functional).

#### Projeto: [Rede Social](projects/03-social-network)

Neste _projeto_ partimos do pressuposto de que uma empreendedora solicitou um
protótipo de _rede social_ com um tema específico, que deverá ser escolhido
pelas estudantes.

O objetivo principal de aprendizagem deste projeto é desenvolver um site
[_responsivo_](https://github.com/Laboratória/bootcamp/tree/master/topics/css/02-responsive)
com mais de uma _view_ (página) onde seja possível ler e escrever dados,
entendendo as necessidades dos usuários a quem se destina o produto.

* Duração estimada: 3 semanas.
* Equipes: 3 estudantes.
* Tópicos: **Mobile first**, [Responsive](topics/css/02-responsive), URL, HTTP,
  [Async](topics/javascript/08-async), múltiplas telas, Routing, escrita de
  dados, `localStorage`, [Firebase](https://firebase.google.com/).

#### Projeto: [Markdown Links](projects/04-md-links)

Dentro de uma comunidade de código aberto, é proposta a criação de uma
ferramenta usando [Node.js](https://nodejs.org/) que leia e analise arquivos no
formato `Markdown`, verifique se o arquivo contém links e faça algumas
checagens.

O objetivo prático deste projeto é aprender a criar uma **biblioteca**
(_library_) em JavaScript.

Desenvolver uma bilioteca é uma experiência fundamental para qualquer
desenvolvedora, porque obriga a pensar na interface (API) de seus _módulos_ e
como será usada por outras desenvolvedoras. É preciso algumas considerações
especiais para as particularidades da linguagem, convenções e boas práticas.

* Duração estimada: 3 semanas.
* Equipes: 1 estudante.
* Tópicos: Node.js, NPM, File System, Server, Parsing, Markdown, CLI, HTTP,
  Módulos, [Erros](topics/javascript/09-errors).

#### Projeto: [Burger Queen Serverless](projects/04-burger-queen)

Este _projeto_ requer a implementação de um sistema para que atendentes de uma
lanchonete (_Burger Queen_) possam anotar pedidos utilizando um _tablet_.

O objetivo principal de aprendizagem deste projeto é desenvolver uma _interface
web_ utilizando um _framework_ (React, Vue ou Angular).

Como objetivo secundário, a implementação deve seguir as recomendações para PWAs
(_Progressive Web Apps_), que inclui conceitos como **offline**.

* Duração estimada: 3 semanas.
* Equipes: 1-2 estudantes.
* Tópicos: Frameworks, [React](topics/react), Vue, Angular, PWA, Offline First,
  Service Workers, Serverless.

#### Projeto: [Burger Queen HTTP/JSON API](projects/04-burger-queen-api)

O objetivo principal de aprendizagem é adquirir experiência com **NodeJS** como
ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série
de ferramentas comumente usadas nesse tipo de contexto (Express como
_framework_, MongoDB como base de dados e etc).

Neste projeto deverá ser desenvolvido um servidor web que deve _servir_ `JSON`
sobre `HTTP`.

Neste projeto partimos de um _boilerplate_ que já contém uma série de
_endpoints_ (pontos de conexão ou URLs) e devemos completar a aplicação. Isto
significa que teremos que começar lendo a implementação existente e nos
familiarizando com o _stack_ utilizado: [Node.js](https://nodejs.org/),
[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/),
[mongoose](https://mongoosejs.com/) e etc.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante
* Tópicos: Node.js, Express, _rotas_ (_routes_), URLs, HTTP (verbs, request,
  response, headers, body, status codes), JSON, MongoDB, _variáveis de
  ambiente_, JWT (_JSON Web Tokens_)

#### Projeto: [Burger Queen API Client](projects/04-burger-queen-api-client)

Este _projeto_ requer a implementação de um sistema para que atendentes de um
restaurante (_Burger Queen_) possam anotar pedidos de clientes utilizando um
_tablet_.

O objetivo principal de aprendizagem deste projeto é o desenvolvimento de uma
_interface web_ que utilize um _framework_ (React, Vue ou Angular).

Como objetivo secundário, a implementação deverá seguir as recomendações para
PWAs (_Progressive Web Apps_), que inclui conceitos como **offline**.

* Duração estimada: 3 semanas.
* Equipes: 1-2 estudantes.
* Tópicos: Frameworks, [React](topics/react), Vue, Angular, PWA, Offline First,
  Service Workers, HTTP, JSON, `fetch`.

### Trilha UX Design

#### Projeto: [Empreendimentos](projects/03-small-businesses)

Para este desafio inicial da trilha, as estudantes trabalham com pequenos
empreendimentos, buscando oferecer uma experiência online nova e/ou melhor. Para
isso, têm que entender os objetivos do negócio e também as necessidades dos
usuários/clientes destes pequenos negócios. Durante este desafio, as estudantes
fazem trabalho de campo como entrevistas, observação e testes, e desenvolvem
soluções utilizando ferramentas de design como Figma e Marvel.

* Duração estimada: 3 semanas
* Equipes: 2 ou 3 estudantes
* Tópicos: UX research (entrevistas, benchmark), arquitetura da informação
  (fluxo de conteúdo, mapa do site), design visual e de interação (wireframes e
  protótipos) e testes com usuários.

#### Projeto: [Redesign e análise de dados](projects/04-redesign-and-data)

Este é um projeto de redesign. Baseando-se nos dados dos resultados obtidos por
uma aplicação de serviços financeiros, as estudantes buscam melhorar a
experiência da mesma. Em alguns casos o tema pode ser substituído por um desafio
dado por uma empresa, com os mesmos objetivos de aprendizagem.

* Duração estimada: 3 semanas
* Equipes: 2 ou 3 estudantes
* Tópicos: Análise de dados, UX Research, protótipos, idealização, visual design

#### Projeto: [Consultoria em UX](projects/05-ux-consultancy)

Neste desafio, as estudantes trabalham em diferentes casos reais, propostos por
empresas de diversas áreas e tamanhos. Desafios anteriores foram propostos por
empresas como Kmimos, Guvery, Globant, Sinenvolturas, Magical Startups,
Laboratória, entre outras.

* Duração estimada: 3 semanas
* Equipes: A depender dos projetos
* Tópicos: UX Research, protótipos, idealização, visual design

***

## Etapa 3: Capstone / Eletivos

O último mês do Bootcamp - ou por volta do último mês, dependendo do ritmo de
avanço de cada uma - espera-se que a estudante desenvolva seu projeto _final_ ou
_capstone_, que pode basear-se nos tópicos/tecnologias vistos até o momento, ou
cobrir alguns dos tópicos sugeridos (eletivos).

### Trilha Front-End Dev

#### Projeto: [Tic Tac Toe com React Native](projects/05-tic-tac-toe-rn)

O objetivo principal de aprendizagem é ter uma primeira experiência em
desenvolvimento de aplicações nativas com React Native.

Neste projeto a estudante terá que desenvolver uma aplicação utilizando React
Native e Expo, e publicá-la em sua conta Expo para que seja possível instalá-la
em qualquer dispositivo Android ou iOS.

Para completar o projeto, a estudante terá que se familiarizar com conceitos
como `View`, `Text` oo `TouchableOpacity`, além do fluxo próprio de
desenvolvimento de apps nativos.

* Duração estimada: 2 semanas.
* Equipes: 1 estudante
* Tópicos: React Native, Expo, componentes nativos, touch events, etc.

#### Projeto: [Batalha Naval](projects/05-battleship)

Batalha Naval é um jogo clássico, com múltiplas versões de tabuleiro e online
(se não conhece, pode ver nesse
[link](https://pt.wikipedia.org/wiki/Batalha_naval_(jogo))).

Neste projeto a estudante deverá criar uma nova versão, agregando alguma
funcionalidade para tornar o jogo mais atrativo para as novas gerações. Também
não é necessário criar um jogo sobre navios, é possível desenvolver com qualquer
tema que prefira, mantendo apenas a mesma jogabilidade.

* Duração estimada: 2 semanas.
* Equipes: 3 estudantes
* Tópicos: _react_, _angular_, _redux_, _firebase_, _mongodb stitch_.

### Track UX Design

#### Projeto: [Visual Design](projects/06-visual-design)

Neste desafio buscamos melhorar as habilidades de desenho visual de interfaces.
Para isso, as estudantes trabalham para melhorar e padronizar a experiência de
uma plataforma de venda de ingressos (tradicional) para ajudá-los a competir com
novos atores desse segmento, como Stubhub, Eventbrite, Joinnus, entre outros;
isso inclui a criação de soluções consistentes para mobile, desktop e
smartwatches. Em alguns casos, o tema pode ser substituído por um desafio
proposto por uma empresa, porém com os mesmos objetivos de aprendizagem.

* Duração estimada: 3 semanas
* Equipes: A depender dos projetos
* Tópicos: Design Systems, Grid systems, atomic design, componentes,
  consistência, hierarquia, design responsivo.

#### Projeto: [Service Design](projects/06-service-design)

Com a ajuda de consultorias especializadas, como Amable ou Touchpoint, as
estudantes devem mergulhar no mundo do _service design_, entendendo problemas de
negócio a partir de uma visão mais holística e utilizando ferramentas como
Service BluePrint.

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
* [Intro a UX
  Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/00-intro-ux)
* [Visual
  Design](https://github.com/Laboratória/curricula-ux/tree/master/00-topics/02-diseno-visual)

***

## Contribuições

Toda contribuição é **agradecidamente bem-vinda**.

Mas **POR FAVOR** não esqueça de ler detalhadamente o [guia para
contribuições](CONTRIBUTING.md) antes de enviar um PR.

Este projeto segue a especificação de
[all-contributors](https://github.com/kentcdodds/all-contributors). Todo tipo de
contribuição é bem-vinda.

## Licença & Copyright

Todos os materiais deste repo são (c) 2017-2019
[Laboratória](http;//Laboratoria.la/).

[![Creative Commons
License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

Este trabalho está publicado sob a licença [Creative commons
Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
