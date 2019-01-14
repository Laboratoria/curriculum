# Cifra de César

## Prefácio

O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigxs e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
decide criar uma aplicação que permita enviar mensagens criptografadas e depois
descriptografar. Então agora é a hora de aplicar os seus super poderes 😎

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

O objetivo principal de aprendizagem deste projeto é que você tenha sua
primeira experiência construindo uma aplicação web, usando os seus
conhecimentos de **User Experience Design** e de **JavaScript**. Isso
inclui desenhar um produto pensando nos usuários, construir uma interface,
escutar eventos básicos do DOM, escrever a lógica que cifra e descifra
mensagens, realizar testes básicos que comprovem (e documentem) esta lógica,
e finalmente manipular o DOM para que ele mostre e imprima os resultados.

Esperamos que neste projeto você possa pensar no usuário, entendendo quem ele
é e suas necessidades. A ideia é que consiga entender o que o usuário
necessita para criar o produto e o ajudar a resolver suas necessidades da
melhor maneira possível.

Também é esperado que você possa se organizar, tendo em conta o tempo e os
recursos disponíveis. Essa é a primeira vez que avaliaremos suas soft skills,
mas deve considerar que são habilidades que provavelmente já deve ter
utilizado em diversas experiências em sua vida. O importante é que realize
o projeto de forma integral.

## Considerações gerais

A lógica do projeto deve estar implementada inteiramente em JavaScript(ES6).
Nesse projeto NÃO está permitido usar bibliotecas ou frameworks, só
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Para começar este projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependência:

```text
./
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   └── style.css
```

## Parte obrigatória

### Definição do produto

No `README.md` descreva o seu processo de desenvolvimento utilizando os
diagramas de bloco e como definiu os usuários quando estava desenvolvendo
seu projeto.

### UI

A interface deve permitir ao usuário:

* eleger um `offset` indicando quantas posições de deslocamento de caracteres
  queremos que a cifra utilize
* inserir uma mensagem (letras maiúsculas e minúsculas) que queremos cifrar
* ver o resultado da mensagem cifrada
* inserir uma mensagem (letras maiúsculas e minúsculas) para ser decifrada
* ver o resultado da mensagem decifrada

### Scripts / Arquivos

* `src/index.html`: este é o ponto de entrada da sua aplicação. Este arquivo
  deve conter o _markup_ (HTML) e incluir o CSS e JavaScript necessário.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve
  estar _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve
  conter dois métodos:
    - `cipher.encode(offset, string)`: `offset` é o número de posições que
    queremos mover para a direita no alfabeto e `string` a mensagem (texto)
    que quemos cifrar.
    - `cipher.decode(offset, string)`: `offset` é o número de posições que
    queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
    que queremos decifrar.
* `src/tests.js`: este arquivo deve conter os testes que você irá implementar

## Hacker edition


### Parte Opcional: "Hacker edition"

A descrição geral deste projeto não menciona o que aconteceria com as outros
caracteres (como espaços, pontuação, acentos, etc.). Também não foi mencionado
o que aconteceria se o `offset` fosse negativo. Como parte do hacker edition te
convidamos a explorar este caso por conta própria.

O desafio anterior nos ajuda a observar sua capacidade de autoaprendizagem,
podemos agregar aos seu trabalho um elemento que te leva à um novo nível.

O mesmo em habilidades socioemocionais. Você pode realizar um planejamento
tendo em consideração a utilização de ferramentas de planejamento como um
calendário, trello, flip chart entre outros, criando um plano passo a passo de
como quer enfrentar o seu desafio ou problema. Realizando uma estimação
realista do tempo.

## Entrega

Para entregar o projeto, você deve subir seu código para o GitHub
(`add`/`commit`/`push`)..

## Avaliação

Aconselhamos você a revisar [a rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver a descrição detalhada de cada _habilidade_ e cada _nível_.

***

## Primeros passos

1. Antes de mais nada, se assegure de ter um bom :pencil: editor de texto,
  algo como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comando você precisará de um :shell: UNIX Shell,
  que é um programa que interpreta linhas de comando (command-line interpreter) e
  também deve ter git instalado. Se você usa um sistema operacional "UNIX-like",
  como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
  provavelmente o `git` também). Se você usa Windows você pode usar o
  [Git bash](https://git-scm.com/download/win), embora seja recomendado que
  você teste :penguin: GNU/Linux.
3. Faça seu próprio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
  do repositório. Seus _mentores_ compartilharão com você um _link_ para um repositório privado e te darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
  o _fork_ para seu computador (cópia local).
5. Let's Code ! :rocket:

***

## Dicas

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática
usada pela Cifra de César e algumas coisas mais que deve saber para resolver
o seu projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Também compartilhamos com vocês mais informações sobre o que foi explicado no
vídeo anterior:

* [Aprenda mais sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprenda mais sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprenda mais sobre `ASCII`](http://conceptodefinicion.de/ascii/)


Estas são algumas dicas que podem te ajudar na organização e relização do seu
projeto, tendo em conta o desenvolvimento de suas _habilidades socioemocionais_:

* Para começar, realize a organização de seu projeto. Veja quais recursos você
  tem disponíveis e o tempo que tem para completar o desafio.
* Se tiver algo que você não saiba, pergunte e tente entender o problema; pode
  começar com uma busca no google, depois consultando seu squad e por último a
  seus coaches. Se existe algo que eu não sei, outra pessoa pode me ajudar. O
  aprendizado é um processo colaborativo.
* Assim que começar a avançar em seu projeto, peça feedbacks. Suas companheiras
  podem ter excelentes ideias ou formas de resolver o projeto que podem te ajudar.
* Quando se deparar com um problema, busque alternativas e, para isso, consulte
  várias fontes.
* Se você perceber que já faz muito tempo que está presa em detalhes, pare e
  priorize o que é mais importante. Os projetos têm tempo limitado e você deve
  saber administrá-lo.
* Trabalhe em equipe, pergunte e tente completar o projeto sem se render.
* Prepare sua apresentação. Se não consigo passar minhas ideiais aos demais,
  não será possível apreciar todo o esforço e trabalho investido.

## Checklist

### Parte Obrigatória

* [ ] `README.md` com explicações e desenho do projeto
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [ ] Permite usar um `offset` (_deslocamento_) negativo
* [ ] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)
