# Burger Queen (API Client)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Implantação](#6-implantação)
* [7. Pistas, tips e leituras complementares](#7-pistas-tips-e-leituras-complementares)

***

## 1. Prefácio

[React](https://pt-br.react.dev/) e [Angular](https://angular.io/)
são alguns dos _frameworks_ e _bibliotecas_ de JavaScript mais usados
na área de desenvolvimento ao redor do mundo e existe uma razão para isso.
No contexto do navegador, [_manter a interface sincronizada com o estado é
difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Ao eleger um _framework_ ou _biblioteca_ para nossa interface, nos apoiamos em
uma série de convenções e implementações _testadas_ e _documentadas_ para
resolver um problema comum a toda interface web. Isto nos permite concentrar
melhor (dedicar mais tempo) nas características _específicas_ de nossa
aplicação.

Quando escolhemos uma destas tecnologias não só importamos um pedaço de código
para reusar (o qual já é um grande valor por si só), mas também adotamos uma
**arquitetura**, uma série de **princípios de design**, um paradigma, algumas
**abstrações**, um **vocabulário**, uma **comunidade**, etc.

Como desenvolvedora Front-End, estes kits de desenvolvimento podem resultar em
uma grande ajuda para implementar rapidamente características dos projetos em que
você for trabalhar.

## 2. Resumo do projeto

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso
cliente nos pediu para desenvolver uma interface que se integre com a API
que outra equipe de desenvolvedoras está trabalhando simultaneamente.

Desta vez temos um projeto 100% por demanda. Você sempre pode (e deve) fazer
sugestões de melhora e mudança, mas muitas vezes trabalhará em um projeto em que
primeiro deve se assegurar de cumprir os requisitos.

Estas são as informações que temos do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Sanduíche de presunto e queijo|   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Bebida gaseificada 500ml   |     7|
>|Bebida gaseificada 750ml   |    10|
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

Além disso a cliente nos deu um
[link](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
da documentação que especifica o comportamento esperado da API que
iremos expor por HTTP.
Lá podemos encontrar todos os detalhes dos _endpoints_, como por exemplo
que parâmetros esperam, o que devem responder, etc.

O objetivo principal é aprender a construir uma _interface web_ usando o
_framework_ escolhido (React ou Angular). Esses framework front-end ataca
o seguinte problema: **como manter a interface e estado sincronizados**.
Portanto, esta experiência espera familiarizá-la com o conceito de _estado da
tela_, e como cada mudança no estado vai refletir na interface (por exemplo,
toda vez que adicionamos um _produto_ para um _pedido_, a interface deve
atualizar a lista de pedidos e o total).

## 3. Objetivos de aprendizagem

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

## 4. Considerações gerais

Este projeto deve ser feito em pares e você pode escolher entre as seguintes opções
como você vai trabalhar com o backend.

1. Usando uma mock API. Você pode criar sua própria mock API com as ferramentas
[json-server](https://www.npmjs.com/package/json-server) e
[json-server-auth](https://www.npmjs.com/package/json-server-auth)
para ajudá-lo a fazer isso, ou você pode fazer um fork e
clone [este repositório de uma mock API.](https://github.com/Laboratoria/burger-queen-api-mock)

2. Consumindo uma API implantada. Você pode usar uma Api que suas companheiras vão 
desenvolver ou você pode usar [esta API que desenvolvemos.](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)

Você pode começar a usar uma mock API e mudar a uma API implantada em qualquer momento.
(Essa situação ocorre no trabalho quando você precisa seguir em frente com 
desenvolvimento de front-end enquanto back-end ou API ainda estão se desenvolvendo.)

O intervalo de tempo estimado para concluir o projeto é de 3 a 5 Sprints.

Trabalhe integralmente uma história de usuário antes de passar para a próxima.
Cumpra todas as histórias possíveis dentro do tempo especificado.

A lógica do projeto deve ser totalmente implementada em JavaScript (ES6 +), HTML
e CSS e empacotada de forma automatizada.

Neste projeto você deve usar [React](https://pt-br.react.dev/) ou
[Angular](https://angular.io/)).

O aplicativo deve ser um _Single Page App_. Os pedidos serão enviados por meio
de um _tablet_, mas **não queremos um aplicativo nativo**, mas sim um aplicativo
Web que seja **mobile-first**.

Precisamos pensar bem sobre o UX para aqueles que vão receber os pedidos, o
tamanho e a aparência dos botões, a visibilidade do estado atual do pedido, etc.

A aplicação deve seguir 80% ou mais das pontuações de Performance, Progressive
Web App, Accessibility e Best Practices do Lighthouse.

O aplicativo deve fazer uso de `npm-scripts` e ter scripts `start`, `test`,
`build` e `deploy`, que são responsáveis por inicializar, rodar os testes,
empacotar e fazer deploy do aplicativo, respectivamente.

Os testes unitários devem cobrir um mínimo de 90% de _statements_, _functions_,
_lines_ e _branches_.

Por outro lado, vocês devem definir a estrutura das pastas e arquivos que considerem
necessários. Você pode estruturá-los de acordo com as convenções do _framework_ escolhido.
Portanto, os _testes_ e os _setups_ necessários para executá-los
serão feitos por você.

## 5. Critérios mínimos de aceitação do projeto

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=7lhnYbmovb4) nos apresentou
este _backlog_ que é o resultado do seu trabalho com o cliente até hoje.

***

#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais

Eu, como garçom/garçonete quero entrar no sistema de pedidos.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Acessar uma tela de login.
* Inserir email e senha.
* Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
* Entrar no sistema de pedidos caso as credenciais forem corretas.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem em um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos ordenados à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marcar os pedidos que foram entregues.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido for
  finalizado. Tudo isso para poder ter estatísticas no futuro.

***

#### [Historia de usuário 5] Administrador(a) de loja deve administrar seus funcionários

Eu como administrador(a) de loja quero gerenciar os usuários da
plataforma para manter atualizado as informações de meus funcionários.

##### Critérios de aceitação

* Ver lista de funcionários.
* Adicionar funcionários.
* Excluir funcionários.
* Atualizar dados dos funcionários.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 6] Administrador(a) de loja deve administrar os produtos

Eu como administrador(a) de loja quero gerenciar os produtos
para manter atualizado o menu.

##### Critérios de aceitação

* Ver lista de produtos.
* Adicionar produtos.
* Excluir produtos.
* Atualizar dados de produtos.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

## 6. Implantação

Você pode escolher o provedor (ou provedores) que preferir junto
com o mecanismo de implantação e a estratégia de hospedagem.
Lembre-se de que, se você mock da API, você também tem que implantá-la.
Te recomendamos explorar as seguintes opcões:

* [Vercel](https://vercel.com/) é uma plataforma que nos permite implantar
nossa aplicação web estática (HTML, CSS e JavaScript) e também nos permite
implantar aplicações web rodando no servidor (Node.js).
* [Netlify](https://www.netlify.com/) como Vercel, é uma plataforma
que nos permite implantar nossa aplicação web estática (HTML, CSS e
JavaScript) e também nos permite implantar aplicações web rodando
no servidor (Node.js).

## 7. Pistas, tips e leituras complementares

Participe do canal do Slack
[#project-bq-api-client](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar e pedir ajuda no projeto.

### Frameworks / bibliotecas

* [React](https://react.dev/)
* [Angular](https://angular.io/)

### Ferramentas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [json-server](https://www.npmjs.com/package/json-server)

### PWA

* [Seu primeiro Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [Usando Service Workers - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers)
