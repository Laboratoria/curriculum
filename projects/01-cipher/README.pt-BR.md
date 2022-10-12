# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Marco: Critérios de Aceitação Mínimos do Projeto](#5-marco-critérios-de-aceitação-mínimos-do-projeto)
* [5. Marco Opcional: Adicione suporte para letras minúsculas e outros caracteres](#5-marco-opcional-adicione-suporte-para-letras-minúsculas-e-outros-caracteres)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Considerar o feedback do projeto](#9-considerar-o-feedback-do-projeto)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto você criará a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto no navegador indicando um deslocamento específico de
caracteres (_offset_). Você fará isso usando HTML, CSS e JavaScript.

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

* Criar senhas seguras para email.
* Cifrar cartões de crédito.
* Ferramenta de mensagens internas de uma organização
  em uma zona de conflito.
* Mensagens secretas para alguma pessoa.

Como continuação do projeto de pré-admissão, você retrabalhará os fundamentos
do JavaScript, incluindo conceitos como variáveis, condicionais e funções,
bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS. 
 desenvolver este projeto, você também se familiarizará com novos conceitos.

### Os objetivos gerais deste projeto são os seguintes

* Trabalho baseado em um clichê, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

## 3. Considerações gerais

## 4. Considerações gerais

* Resolvemos este projeto individualmente. Recomendamos uma duração de 1-3 sprints.
* Concentre-se em aprender e não apenas "concluir" o projeto. Vai te custar.
* Sugerimos que você não tente saber tudo antes de começar a codificar. 
  Não se preocupe muito agora com o que você _ainda_ não entende.
  Você vai aprender.

## 4. Marco: Critérios de Aceitação Mínimos do Projeto

Esses são os requisitos que seu projeto deve atender para garantir que
seu trabalho atenda aos objetivos principais.

**1. Uma interface que deve permitir ao usuário:**

  * **Criptografar uma mensagem**
    * Insira a mensagem (texto) que deseja criptografar. A mensagem usa um alfabeto simplificado (apenas letras maiúsculas e sem ñ).
    * Escolha um número de deslocamento (_offset_) indicando quantas posições você deseja
  a cifra muda cada caractere do alfabeto. O número será positivo e inteiro (inteiro positivo).
    * Veja o resultado da mensagem criptografada.

 * **Descriptografar uma mensagem**
    * Insira a mensagem (texto) que deseja descriptografar. A mensagem usa um alfabeto simplificado (apenas letras maiúsculas e sem ñ).
    * Escolha um número de deslocamento (_offset_, que corresponde ao que usamos para criptografar) indicando quantas posições você deseja
  a cifra muda cada caractere do alfabeto. O número será positivo e inteiro (inteiro positivo).
    * Veja o resultado da mensagem descriptografada.

**2. Testes unitários dos métodos.**
  Os métodos `cipher` (`encode` e `decode`) devem ser cobertos por testes de unidade.

**3. Código do seu projeto enviado para seu repositório e interface "implantado".**
  O código final deve ser carregado em um repositório no GitHub. A interface, ou página da web, deve ser "implantada" usando o GitHub Pages.

**4. Um README contendo uma definição de produto.**
  No README, conte-nos como você pensou sobre os usuários e qual foi o seu processo para definir o produto final em nível de experiência e interface. Estas perguntas servem de guia:

  * Quem são os principais usuários do produto.
  * Quais são os objetivos desses usuários em relação ao seu produto.
  * Como você acha que o produto que você está criando está resolvendo seus problemas.

Com esses requisitos atendidos, você pode agendar um feedback do projeto com um coach.

## 5. Marco Opcional: Adicione suporte para letras minúsculas e outros caracteres

As partes "opcionais" destinam-se a permitir que você se aprofunde um pouco mais
os objetivos de aprendizagem do projeto. Tudo na vida tem prós e contras, decida
sabiamente se você quiser gastar o tempo aprofundando/refinando ou aprendendo coisas
novo para o próximo projeto.

O marco de critérios mínimos não menciona o que aconteceria com letras minúsculas e outros caracteres (como espaços, pontuação, ñ, ...). O _boilerplate_ inclui alguns _tests_ (comentados no início) que
você pode usar como ponto de partida para implementar o suporte para esses casos adicionais.

## 6. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Para iniciar este projeto você terá que fazer um _fork_ e _clone_ isso
repositório contendo um _boilerplate_ com testes. Um _boilerplate_ é a estrutura básica de um projeto que serve como ponto de partida com arquivos iniciais e configuração básica de dependências e testes.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ que fornecemos contém esta estrutura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

### Descrição de scripts/arquivos

* `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui você deve implementar o objeto `cipher`, o qual já está
  _exportado_ no _boilerplate_. Este objeto (`cipher`) deve conter dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

### Deploy

Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do
ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade.
O comando `npm run deploy` pode te auxiliar nessa tarefa e você pode também
consultar a [documentação oficial](https://docs.github.com/pt/pages).

## 3. Objetivos de aprendizagem

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

***

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Se assegure de ter um bom :pencil: editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa Windows você pode usar o [Git
   bash](https://git-scm.com/download/win), embora seja recomendado que você
   teste :penguin: GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   _mentores_ compartilharão com você um _link_ para um repositório privado e te
   darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   o _fork_ para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os :traffic_light: testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! :rocket:

Este [video](https://drive.google.com/file/d/1CM6ZfpGfJMF6A8IcXoK5cFBBq-CY8oBR/view?usp=sharing)
da Paloma também pode te ajudar nos seus primeiros passos ;)

### Recursos extras

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para resolver o seu
projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Desenvolvimento Front-end:

* [Aprenda mais sobre
  `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [Aprenda mais sobre
  `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [Aprenda mais sobre
  `ASCII`](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm)
* [Documentação do NPM](https://docs.npmjs.com/)
* Saiba mais sobre [objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects) e [como definir métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#definindo_m%C3%A9todos## 9. Considerar o feedback do projeto

## 9. Considerar o feedback do projeto

Em resumo, os critérios mínimos de aceitação do projeto para considerar o feedback do projeto:

* [ ] Possui uma interface que permite ao usuário criptografar e descriptografar.
* [ ] O projeto será entregue incluindo testes unitários dos métodos `cipher` (`encode` e `decode`).
* [ ] O projeto será entregue livre de `eslint` _errors_ (_warnings_ ok).
* [ ] O projeto será entregue fazendo o upload do seu código para o GitHub.
* [ ] A interface será "implantada" usando o GitHub Pages.
* [ ] O README contém uma definição de produto.
