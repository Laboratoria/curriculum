---
type: practice
duration: 20h
---

# Desafios

## Objetivos

- A seguir apresentamos o desafio que você deve completar para colocar seu
  conhecimento à prova.

***

## 1. Twitter

Neste desafio, vamos replicar o feed de notícias do Twitter. Para tanto,
seguiremos um fluxo de versões que a guiarão para se concentrar mais
eficientemente :\)

Você pode adaptar o design como quiser, _mas não demore para definir as cores ou
fontes. Finalmente, você pode replicar o design da_ [_página
oficial_](https://twitter.com/) :\). Aqui está um exemplo:

![Exemplo Twitter
DOM](https://user-images.githubusercontent.com/11894994/59531017-5655c180-8ebb-11e9-8ee4-165827230fa1.gif)

### Versão 0.0.1

1. Crie um formulário que permita inserir um texto e um botão para "twittar".
2. Adicione um evento de _click_ ao botão ou de _submit_ no formulário.
3. No evento, obter o texto.
4. Adicione o texto ao HTML.

### Versão 0.0.2

1. Não inserir texto vazio \(desativar o botão "twittar"\).
2. Conte o número de caracteres de forma regressiva.

### Versão 0.0.3

1. Se você passar os 140 caracteres, desative o botão.
2. Se você passar os 120 caracteres, mostre o contador com outra cor.
3. Se você passar os 130 caracteres, mostre o contador com outra cor.
4. Se você passar os 140 caracteres, mostre o contador em negativo.

### Versão 0.0.4

1. Ao pressionar enter \(`/n`\) aumente a área de texto de acordo com o tamanho
   do texto.

### Versão 0.0.5 (Extra)

1. Se o número de caracteres digitados \(sem dar um "_enter_"\) exceder o
   tamanho da área de texto por padrão, mais uma linha deverá ser adicionada
   para que a rolagem não apareça. \(Se aplicável\)

### Versão 0.0.6 (Extra)

1. Adicione a hora em que o tweet foi publicado no formato de 24 horas `hh:mm`.

> Nota: Para formatar a data e a hora, você pode criar sua própria função ou
> usar uma biblioteca como [`moment.js`](https://momentjs.com/)`.`

## 2. Trello

Neste desafio, vamos replicar o quadro do Trello. Para isso vamos seguir um
fluxo de versões que irão guiá-la desde o início.

Como no desafio anterior, você pode usar seu próprio estilo ou seguir o [site
original](https://trello.com/) . Abaixo você pode ver como deve ficar:

![Exemplo - clone do
Trello](https://media.giphy.com/media/l1J9Ai0amYnS22ChW/giphy.gif)

### Versão 0.0.1

- O texto "Adicionar uma lista ..." será exibido.
- Ao clicar, você deve ocultar o texto e mostrar um formulário.
- O formulário é composto de um _input_ e um botão para que você possa adicionar
  tarefas à sua lista.

### Versão 0.0.2

- Ao clicar no botão "Salvar", uma nova caixa aparecerá mostrando o nome da
  lista adicionada.
- Mostrar um texto de "Adicionar uma tarefa" na lista.

### Versão 0.0.3

- Quando você clica em "Adicionar uma tarefa", você deve mostrar um formulário
  com uma área de texto e um botão que diz "Adicionar".

### Versão 0.0.4

- Coloque _focus_ no _input_ quando clicar em "Adicionar nova tarefa".
- Ao clicar no botão "Adicionar", o texto da tarefa deve aparecer abaixo do
  título da lista.

### Versão 0.0.5

- Mostrar o formulário novamente abaixo da última tarefa adicionada.

### Versão 0.0.6 (Extra)

- Poder adicionar várias listas com cartões. Para isso, o formulário "Adicionar
  uma lista" deve aparecer à direita da lista criada anteriormente.

## 3. Labirinto (Opcional)

Crie uma página da Web que implemente o jogo do Labyrinth usando DOM e eventos.
O jogo Labyrinth é um quebra-cabeça divertido onde você pode dar a qualquer
jogador a habilidade de interagir com o mapa para encontrar a saída.

Lembre-se que no Labirinto o objetivo é ir do lugar A para o lugar B apenas pelo
caminho certo.

> O labirinto tem raízes tão profundas quanto o mito grego sobre Teseu, que foi
> enviado a um labirinto para matar o minotauro. Teseu usou um novelo de lã para
> ajudá-lo a encontrar o caminho de volta, assim que matasse a fera.

![GitHub set
up-w800](https://user-images.githubusercontent.com/11894994/59531225-c2382a00-8ebb-11e9-9433-6b8da47678d6.jpg)

Para interagir com Teseu, o jogador terá que usar as setas do teclado para poder
se mover e ajudar Teseu em sua busca pela saída.

### Dicas para a solução

Abaixo, você encontrará dicas que poderão ajudá-lo com a solução, boa sorte!

#### [Dica 1. | O programa]

Crie um programa que represente um Teseo em um labirinto e que implemente o
algoritmo de busca para um caminho de saída.

Para tornar mais fácil para nós, vamos supor que o nosso labirinto é dividido em
"quadrados". Cada quadrado do labirinto é aberto ou ocupado por uma seção de
parede. Teseu só pode passar pelos quadrados abertos do labirinto. Se Teseu
correr para uma parede, ele deve tentar uma direção diferente.

#### [Dica 2. | Criando o labirinto]

Para criar o labirinto, você pode usar uma matriz de _strings_ para
representá-lo. A notação que você pode usar para cada elemento no mapa é a
seguinte:

1. `*` Uma parede
2. `_` Um espaço vazio
3. `o` Posição inicial do jogador
4. `W` Saída do labirinto.

```javascript
const mazeMap = [
  '******************',
  '*_________*______*',
  '*_*****_____******',
  '*______***__*__*_*',
  '***_*____*____**_*',
  '*___*____**__*___*',
  '*_********__**_*_*',
  '*____*______*__*_*',
  '*_**_*__*****_**_*',
  '*o*__*________**W*',
  '******************',
];
```

Esse mapa pode ser traduzido no seguinte com a função apropriada de
renderização/desenho:

#### [Dica 3. | Identificando Objetos e Funções]

É importante identificar os objetos presentes. Se fizermos uma análise da imagem
anterior, perceberemos que os objetos presentes são os seguintes:

1. Labirinto: Objeto representando o Labirinto
2. Jogador: Objeto que representa o Theseus
3. MazeInterface: Objeto que representa a interface do jogo usando o DOM

Também é importante identificar as propriedades associadas a esses objetos, bem
como as principais funções presentes. Em seguida, apresentamos a interface do
código desses objetos e funções.

```javascript
const maze = {
  matrix: undefined,           // representa o mapa do labirinto
  startX: undefined,           // posição x inicial do labirinto
  startY: undefined,           // posição y inicial do labirinto
  endX: undefined,             // posição x que representa a saída
  endY: undefined,             // posição y que representa a saída
  startOrientation: undefined, // direção inicial
};

const player  = {
  x: undefined,           // posição x atual do jogador
  y: undefined,           // posição y atual do jogador
  orientation: undefined, // direção atual do jogador
};

const ORIENTATION = {
  LEFT: 1,
  UP: 2,
  RIGHT: 3,
  DOWN: 4,
};

// representa a interface usando DOM do labirinto
const mazeInterface = [];

// desenhar o labirinto
const renderMaze = (maze, player) => {};
// estabelecer o estilo na posição x, y
const setStyleAt = (maze, x, y, style) => {};

// perguntar se (x,y) representa uma parede, ou seja, '*'
const isWall = (maze, x, y) => {};
// perguntar se (x,y) representa um espaço vazio, ou seja,  '_'
const isSpace = (maze, x, y) => {};
// perguntar se (x,y) representa a saída do labirinto, ou seja, 'W'
const isEnd = (maze, x, y) => {};

//  virar a esquerda
const turnLeft = (player) => {};
//  virar a direita
const turnRight = (player) => {};
//  mover uma posição para frente na direção de player.direction
const moveForward = (player) => {};

// algoritmo de busca para encontrar un caminho de saída para um
// labirinto qualquer
const exitMaze = (player) => {};
```

#### [Dica 4. | Perguntas orientadoras]

- Como podemos detectar o teclado do usuário? Em particular, as setas?
- Como podemos mover o personagem no quadro?
- Como limitamos o movimento do personagem no quadro? \(se houver uma parede,
  por exemplo\)
- O que significa pintar ou renderizar?
- Como fazer para renderizar o tabuleiro?
