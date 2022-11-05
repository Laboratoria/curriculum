## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [dois. Resumo do projeto](#2-resumo do projeto)
* [3. Objetivos de aprendizagem](#3-objetivos de aprendizagem)
* [4. Considerações gerais](#4-considerações gerais)
* [5. Critérios Mínimos de Aceitação do Projeto](#5-project-minimum-acceptance-criteria)
* [6. Pistas, dicas e leituras complementares](#5-dicas-dicas-e-leituras-complementares)
* [7. Edição de hackers](#6-hacker-edição)

## 1. Preâmbulo

Os videogames são um verdadeiro teste quando se trata de tecnologia. Um de
fatores de sucesso para a equipe android, por exemplo, foi que eles poderiam
ter um jogo rodando nos primeiros telefones. A ideia era que se um jogo
poderia rodar na plataforma, um programa mais simples com telas muito
mais fácil de trabalhar do que apenas botões e texto ainda deve funcionar
Melhor.

Então a ideia desse projeto é trazer frameworks de aplicações web
até o limite do que podem oferecer, procure explorar mais suas funcionalidades
avançado e alcançar um produto que brilha com seu talento e criatividade
dominar a estrutura de sua escolha.

![encouraçado](https://user-images.githubusercontent.com/7809496/66517403-78ea9680-eab9-11e9-8ab4-8d3c2cc21646.png)

## 2. Resumo do Projeto

Battleship é um jogo clássico, com múltiplas versões em jogos de tabuleiro e em
linha (se você não conhece, você pode vê-lo neste link:
[navio de batalha](https://es.wikipedia.org/wiki/Batalla_naval_(juego))).

O jogo é para duas pessoas. Consiste em cada jogador colocar em um tabuleiro
um conjunto de navios, escondendo sua posição do oponente. Então para
voltas, eles anunciam uma posição no tabuleiro e o inimigo informa se eles
dado a um de seus navios ou não. O jogo termina quando um jogador tiver alcançado
afundar todos os navios do outro.

Neste projeto, você criará uma nova versão, adicionando um toque especial a ela para
atualizá-lo e torná-lo mais atraente para as novas gerações. Também não
você é obrigado a fazer este jogo sobre navios, você pode fazê-lo com o tema que mais
você gosta, desde que a jogabilidade seja semelhante.

Além disso, o jogo deve ser para dois jogadores, para conseguir isso você deve pensar em como
você pode estruturar as informações, estado do aplicativo e como salvá-los em
algum banco de dados como __Firebase__ ou __MongoDB Stitch__.

### Os objetivos gerais deste projeto são os seguintes

1. Projete um esquema de dados e aplique-o a um banco de dados conhecido,
como _Firebase_ ou _MongoDB_.
Muitas vezes, como você modela a informação é mais importante do que como você a estrutura.
seu código, pois problemas que possam aparecer no futuro terão sua
origem aqui.

2. Não menos importante, você terá que projetar e manter o estado dentro do
aplicação, esta é a informação que você usa e salva temporariamente para cada
execução. Para isso, algumas ferramentas do _React_ que podem te ajudar são
__Redux__ ou também __Context API__ bem como os estados internos de
cada componente. No lado _Angular_ você terá os __observables__
e seu uso conjunto com os __services__ e claro as propriedades que você usa
em cada componente.

3. E, finalmente, você terá que projetar uma interface atraente, usando e abusando
tudo o que você sabe sobre CSS e animações para que você tenha um jogo atraente e que
as pessoas gostam. Você tem que convidar para jogar o seu jogo.

## 3. Objetivos de aprendizagem

> ℹ️ Esta seção será gerada automaticamente no idioma relevante, de
> dos objetivos de aprendizagem declarados em [`project.yml`](./project.yml),
> ao criar o repositório do projeto para uma coorte específica usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> que inclui nosso currículo.

## 4. Considerações gerais

Este projeto deve ser resolvido em equipes de 3 pessoas.

O planejamento é fundamental, então você deve coordenar com sua equipe e
identificar histórias de usuários, priorizá-las e trabalhar nelas sprint a sprint
cuidando para que haja testes para o código, testes foram feitos com usuários em
usabilidade e cumprindo as cerimônias SCRUM que você aprendeu ao longo
durante todo o bootcamp.

Também para este projeto, use qualquer framework (_React_, _Angular_, etc...)
cuidando para que fique bem na tela do celular ou computador, que o
os jogadores podem escolher livremente a plataforma sem prejuízo da
jogabilidade. Para isso, considere um tamanho de tela variável e que o
os elementos do jogo são redimensionados dependendo disso.

Para o banco de dados, tente modelar bem como você armazenará os dados e pense
bem como dar suporte a vários usuários ao mesmo tempo em diferentes salas de jogos.
Lembre-se que "navio de guerra" é jogado por dois. Use sua criatividade para atribuir
adversários para cada jogador.

### Definição de feito para cada história de usuário

* Você deve ter recebido _code review_ de pelo menos um colega.
* Você faz o _test_ da unidade e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você implantou seu aplicativo e marcou sua versão (tag git).

## 5. Critérios Mínimos de Aceitação do Projeto

### Definição do produto

O [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos apresenta este _backlog_
que é o resultado de seu trabalho colaborativo.

***

### Histórias de usuários

#### [História de usuário 1] Criar usuário e login

Como usuário, devo ser capaz de criar uma conta e
autenticar usando o login do Google para acessar o jogo.

#### [História de usuário 2] Crie ou participe de um jogo

Eu, como usuário, deveria ser capaz de criar um novo jogo ou
participar de um jogo criado por outro usuário.

#### [História de usuário 3] Implantar minha frota

Como usuário, quero posicionar meus navios em uma tabela (grade)
e me avise quando estiver pronto para começar a jogar.

#### [História de usuário 4] Ataque e saiba o resultado

Como usuário, devo saber quando é minha vez de escolher
uma coordenada para atacar. Eu também deveria ser capaz de saber se eu anchunte ou não
qualquer um dos navios do meu oponente e se eu afundei ou não algum de seus navios.

#### [História de usuário 5] Recebendo ataques

Eu como usuário deveria saber qual coordenada meu oponente atacou
e saber se ele alargou ou não algum dos meus navios e se afundou algum ou não.

#### [História de usuário 6] Conheça o estado do jogo

Eu como usuário deveria saber o estado do jogo, ver um histórico
dos movimentos realizados e quais acertaram o alvo e quais não acertaram, e se
Afundei ou não um navio adversário, além de ver meus navios afundados e
coordenadas atacadas.

#### [História de usuário 7] Fim de um jogo

Eu, como usuário, deveria saber quando o jogo acabou
e quem é o vencedor, além de poder sair de um jogo se
é necessário.

***

#### Critérios de aceitação

O que deve acontecer para que os objetivos do projeto sejam alcançados
e atender às necessidades dos usuários.

* Crie uma conta e/ou faça login com o Google.
* Crie ou participe de um jogo.
* Escolha as coordenadas das posições do navio antes de iniciar o jogo.
* Comece o jogo, escolha uma coordenada para atacar meus navios
oponente e saber o resultado desse ataque
(acerte o alvo, afunde um navio ou erre).
* Conheça o estado do jogo: de quem é a vez; história do movimento,
tiros no alvo ou na água e quem é o vencedor.
* Parece e funciona bem em um dispositivo móvel.

## 6. Dicas, dicas e leitura adicional

1. Modele os dados, é um passo muito importante, considere que o jogo é de
duas pessoas, mas mais de um casal pode estar jogando ao mesmo tempo (modelo de
sala de jogos).

2. Fork este repositório (no GitHub). Depois de seus colegas
projeto por sua vez _fork_ __your__ repositório. Lembre-se, como em
projetos anteriores, que um de vocês deve ser o integrador ou _professor_ do
repositório principal.

3. Para facilitar, pense em uma grade e que cada _navio_ ocupe apenas um dos
elas. Se você quiser dimensionar a dificuldade para este projeto, você pode tentar
barcos de diferentes formas e tamanhos.

4. Tenha o conceito de turno e mantenha quem é o turno toda vez na base do
dados. Ele também define a condição de término de forma que seu código
pode detectar, tais como: todos os navios afundaram.

5. Tomar o estado do jogo é primordial, define bem as ações,
redutores e dados que estarão em cada jogo, turno e movimento dos jogadores.
Você pode fazer um diagrama de estado para isso:
[state-diagram](https://www.lucidchart.com/pages/en/state-machine-diagram)

### Outros recursos

#### Bibliotecas e componentes

* [redux](https://es.redux.js.org/)
* [react-animations](https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)
* [animações angulares](https://blog.angularindepth.com/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
* [angular-services](https://angular.io/tutorial/toh-pt4)
* [react-context](https://es.reactjs.org/docs/context.html)
* [hooks-react](https://es.reactjs.org/docs/hooks-intro.html)
* [Mais animações para frameworks](https://popmotion.io/pose/)

#### Conceitos

* [observáveis](https://angular.io/guide/observables)
* [observables-viewer](https://rxviz.com/)
* [observables-viewer-2](https://rxmarbles.com/)

## 7.Edição de hackers

Até agora você usou javascript, html, css, react, angular e outros
ferramentas para fazer seus aplicativos, mas que tal você se aventurar com seus
grupo para fazer este projeto usando um framework voltado para videogames?. Chá
Convidamos você a aceitar o desafio e tentar fazer o jogo usando alguns
__game engine__ como os abaixo ou o que você encontra no
Internet:

* [GDevelop](https://gdevelop-app.com/)
* [Moddio](https://www.modd.io/)
* [Construct](https://www.scirra.com)
* [Babylon](https://www.babylonjs.com/)
* [Impact](https://github.com/phoboslab/impact)
* [Phaser](https://phaser.io)

#### [User Story 3] Implantar minha frota

Como usuário, quero posicionar meus navios em uma tabela (grade)
e me avise quando estiver pronto para começar a jogar.

#### [User Story 3] Ataque e saiba o resultado

Como usuário, devo saber quando é minha vez de escolher
uma coordenada para atacar. Eu também deveria ser capaz de saber se eu anchunte ou não
qualquer um dos navios do meu oponente e se eu afundei ou não algum de seus navios.

#### [User Story 4] Recebendo ataques

Eu como usuário deveria saber qual coordenada meu oponente atacou
e saber se ele alargou ou não algum dos meus navios e se afundou algum ou não.

#### [User Story 5] Conheça o estado do jogo

Eu como usuário deveria saber o estado do jogo, ver um histórico
dos movimentos realizados e quais acertaram o alvo e quais não acertaram, e se
Afundei ou não um navio adversário, além de ver meus navios afundados e
coordenadas atacadas.

#### [User Story 6] Fim de um jogo

Eu, como usuário, deveria saber quando o jogo acabou
e quem é o vencedor, além de poder sair de um jogo se
é necessário.

***

#### Critérios de aceitação

O que deve acontecer para que os objetivos do projeto sejam alcançados
e atender às necessidades dos usuários.

* Crie uma conta e/ou faça login com o Google.
* Crie ou participe de um jogo.
* Escolha as coordenadas das posições do navio antes de iniciar o jogo.
* Comece o jogo, escolha uma coordenada para atacar meus navios
oponente e saber o resultado desse ataque
(acerte o alvo, afunde um navio ou erre).
* Conheça o estado do jogo: de quem é a vez; história do movimento,
tiros no alvo ou na água e quem é o vencedor.
* Parece e funciona bem em um dispositivo móvel.

## 6. Dicas, dicas e leitura adicional

1. Modele os dados, é um passo muito importante, considere que o jogo é de
duas pessoas, mas mais de um casal pode estar jogando ao mesmo tempo (modelo de
sala de jogos).

2. Fork este repositório (no GitHub). Depois de seus colegas
projeto por sua vez _fork_ __your__ repositório. Lembre-se, como em
projetos anteriores, que um de vocês deve ser o integrador ou _professor_ do
repositório principal.

3. Para facilitar, pense em uma grade e que cada _navio_ ocupe apenas um dos
elas. Se você quiser dimensionar a dificuldade para este projeto, você pode tentar
barcos de diferentes formas e tamanhos.

4. Tenha o conceito de turno e mantenha quem é o turno toda vez na base do
dados. Ele também define a condição de término de forma que seu código
pode detectar, tais como: todos os navios afundaram.

5. Tomar o estado do jogo é primordial, define bem as ações,
redutores e dados que estarão em cada jogo, turno e movimento dos jogadores.
Você pode fazer um diagrama de estado para isso:
[state-diagram](https://www.lucidchart.com/pages/en/state-machine-diagram)

### Outros recursos

#### Bibliotecas e componentes
