# Trivia

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínima do
  projeto](#5-critérios-de-aceitação-mínima-do-projeto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)

***

## 1. Preâmbulo

A trivia é um tipo de jogo, geralmente presente em game shows, no qual são
apresentadas perguntas cujas respostas devem ser escolhidas entre diferentes
opções.

Atualmente, com o aumento do uso de smartphones, suas aplicações e o acesso a
Internet, existem muitas possibilidades de participar de um trivia online. Com
uma rápida busca na Internet, você verá que existem trivias de diferentes temas
(ciência, televisão, séries, etc..). Existem vários que, inclusive, oferecem
dinheiro como recompensa.

![TRIVIA](https://phandroid.s3.amazonaws.com/wp-content/uploads/2018/01/hq-trivia-android-screenshot.jpg)

## 2. Resumo do projeto

O que tenho que fazer exatamente? Neste projeto você terá que construir uma
aplicação web que permita que o usuário responda diferentes perguntas e escolha
as respostas, a partir de uma lista de alternativas.

O tema é livre. Você deve criar a melhor trivia possível e pensar em como deve
ser a experiência de uso (que telas, explicações, mensagens, cores, marca?,
etc...).

## 3. Objetivos de aprendizagem

O objetivo principal deste projeto é ter uma primeira experiência desenvolvendo
aplicações web (WebApp) que interajam com o usuário através do navegador e
desenvolver a lógica, utilizando HTML, CSS e JavaScript como ferramentas.

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu
projeto. Pense nisso para decidir sua estratégia de trabalho individual e em
equipe.

### HTML e CSS

* [ ] [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* [ ] Uso de seletores de CSS.

### DOM

* [ ] Uso de seletores do DOM.
* [ ] Gestão dos eventos do DOM.
* [ ] [Manipulação dinâmica do DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)

### JavaScript

* [ ] Tipos de Dados
* [ ] Declaração correta de variáveis (const & let)
* [ ] Concatenação de strings
* [ ] Uso de condicionais (if-else | switch | operador ternario)
* [ ] Uso de funções (parâmetros | argumentos | valor de retorno)

### Estrutura de código e guia de estilo

* [ ] Uso identificadores descritivos (Nomenclatura | Semântica).

### UX

* [ ] Desenhar a aplicação pensando e entendendo o usuário.
* [ ] Criar protótipos para obter _feedback_ e implementar.

## 4. Considerações gerais

* Este projeto deve ser resolvido em duplas.
* Tempo para implementá-lo: Tome como referência 3 dias. Trate de estimar um
  tempo para finalizar.

## 5. Critérios mínimos de aceitação do projeto

Os critérios que você deverá considerar para saber se completou o projeto são:

### Definição do projeto

Documente brevemente seu trabalho no arquivo `README.md` do seu repositório, nos
contando como foi o seu processo de desenho e como acredita que o projeto
resolve o problema (ou problemas) que o usuário tem.

### Desenho da interface de usuário

#### Protótipo de baixa fidelidade

Durante o trabalho você deverá fazer e implementar _sketches_ de sua solução
usando papel e lápis. Recomendamos que tire fotos de todas as interações que
fizer, que as suba junto ao repositório e as mencione em seu `README.md`.

### Implementação da Interface de Usuário (HTML/CSS/JS)

Depois de desenhar sua interface de usuário, você deverá trabalhar em sua
implementação. **Não** é necessário que construa a interface exatamente como a
desenhou. Você não tem um tempo ilimitado para trabalhar, sendo assim, deverá
saber o que priorizar.

O [MVP](https://www.youtube.com/watch?v=0Dn-BHj6l2E) (produto mínimo viável) de
sua aplicação deve:

1. Mostrar uma tela de boas-vindas na qual se peça o nome para começar a jogar.
2. Mostrar uma mensagem de Oi [nome do usuário] e dois botões para começar a
   jogar.
    - Jogar com perguntas do tipo A (Por exemplo: sobre comida)
    - Jogar com perguntas do tipo B (Por exemplo: sobre cervejas)
3. Mostrar a pergunta 1 com alternativas. O usuário responde e depois é
   apresentada a pergunta 2 e depois a 3.
4. Mostrar uma tela de resultados (respostas corretas) e dois botões de voltar a
   jogar:
    - Jogar com perguntas do tipo A (Por exemplo: sobre comida)
    - Jogar com perguntas do tipo B (Por exemplo: sobre cervejas)

## 6. Hacker edition

Se **terminou** tudo que foi listado anteriormente e ainda te sobrou tempo,
tente explorar e completar o seguinte:

* Adicionar uma contagem regressiva que determine um tempo limite para responder
  cada pergunta.
* Subir o código para o GitHub (commit/push) e implementar a interface usando
  GitHub pages.

## 7. Considerações técnicas

A lógica do projeto deve estar implementada completamente em JS, HTML e CSS.
Neste projeto não é permitido usar bibliotecas ou frameworks, somente [vanilla
JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

### `src/index.html`

Aqui vai a página que será mostrada para o usuário. Também nos serve para
indicar que script será usado e unir tudo que fizemos.

Você encontrará uma tag inicial que pode ser apagada, caso queira, para começar
do zero.

```html
 <div id="root"></div>
```

### `src/style.css`

Este arquivo deve conter as regras de estilo. Queremos que escreva suas próprias
regras, por isso NÃO está permitido o uso de frameworks de CSS (Bootstrap,
materialize, etc).

### `src/main.js`

Aqui você escreverá todo o código que tenha a ver com a interação com o DOM
(selecionar, atualizar e manipular elementos do DOM e eventos), entre outras
funções que sejam necessárias para atualizar o resultado na tela (UI).

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de tudo, certifique-se de ter um :pencil: bom editor de texto, algo
   como [Atom](https://atom.io/) ou [VSCode](https://code.visualstudio.com/).
2. Para executar os comandos a seguir você precisará de uma :shell:
   [UNIX Shell](../../topics/shell), que é um programa que interpreta linhas de
   comando (command-line interpreter) assim como ter o
   [git](../../topics/scm/01-git)
   instalado. Se você já utiliza um sistema operacional "UNIX-like", como
   GNU/Linux ou MacOS já terá uma _shell_ (terminal) instalada por padrão (e
   provavelmente `git` também). Se seu sistema é Windows você poderá usar
   [Git bash](https://git-scm.com/download/win), mas indicamos testar :penguin:
   GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   mentores vão compartilhar um _link_ para o repositório com acesso de leitura.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   seu *fork* em seu computador (cópia local).
5. Agora é só codar! :rocket:

### Recursos e temas relacionados

#### Desenho de experiência de usuário (User Experience Design)

* Ideação
* Protótipo (sketching)

#### Desenvolvimento Front-end

* Tipos de valores
* Declaração de variáveis
* Controle de fluxo

#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)

#### Organização do trabalho

* [Metodologias Ágeis](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum em detalhes](https://www.youtube.com/watch?v=XfvQWnRgxG0). Não
  esperamos que faça tudo isso neste projeto.
