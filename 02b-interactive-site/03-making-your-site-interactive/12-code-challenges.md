# Retos
- Tipo: `code`
- Formato: self-learning`
- Duración: `8hrs`

## Objetivos

- A continuación te presentamos el reto que debes completar para poner tus conocimientos a prueba.

***

## 1. Laberinto

Crea una página web que implemente el juego del Laberinto utilizando DOM y eventos. El juego del laberinto es un divertido Puzzle donde podrás darle a cualquier jugador la capacidad de interactuar con el mapa hasta encontrar la salida.

Recuerda que en laberinto el objetivo es ir de un lugar A hacia un lugar B únicamente por el camino correcto.

> El laberinto tiene raíces tan profundas como el mito griego sobre Teseo, que fue enviado a un laberinto para matar al minotauro. Teseo usó una bola de hilo para ayudarse a encontrar su camino de regreso, una vez que había terminado con la bestia.

![GitHub set up-w800](http://photos1.blogger.com/blogger/6613/878/1600/laberinto04.jpg)

El jugador para interactuar con Teseo tendrá que hacer uso de las flechas de su teclado para poder mover  y ayudar a Teseo  en su búsqueda de la salida.

### Tips para la solución
A continuación, encontrarás tips que podrían ayudarte con la solución, mucha suerte!

#### [Tip 1. | El Programa]

Crea un programa que represente un Teseo en un Laberinto y que implemente el algoritmo de búsqueda de un camino de salida.

![GitHub set up-w800](media/15034081309333/15034128157197.png)

Para que sea más fácil para nosotros, asumiremos que nuestro laberinto está dividido en "cuadrados". Cada cuadrado del laberinto está abierto u ocupado por una sección de pared. Teseo sólo puede pasar a través de los cuadrados abiertos del laberinto. Si Teseo se topa con una pared debe intentar una dirección diferente.


#### [Tip 2. | Creando el Laberinto]

Para crear el Laberinto se puede usar un array de cadenas para poder representarlo. La notación que puedes usar para cada elemento dentro del mapa son las siguientes:

1. `*` Una pared
2. `_` Un espacio vacío
3. `o` Posición inicial del jugador
4. `W` Salida del laberinto.

```js
const mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];
```

Ese mapa se puede traducir en lo siguiente con la función de renderización/dibujo adecuado:

![GitHub set up-w400](media/15034081309333/Screen%20Shot%202017-08-22%20at%2010.17.30%20AM.png)

#### [Tip 3. | Identificando Objetos y Funciones]

Es importante identificar los objetos presentes. Si hacemos un análisis a la imagen anterior nos daremos cuenta que los objetos presentes son los siguientes:
1. Maze: Objeto que representa el Laberinto.
2. Player: Objeto que representa a Teseo
3. MazeInterface: Objeto que representa la interfaz de Juego usando DOM.

Además es importante identificar propiedades asociadas a estos objetos así como las  principales funciones  presentes. A continuación presentamos la interfaz del código de estos objetos y funciones.


```js

var maze = {
    matrix: undefined, // representa el mapa del laberinto  
    startX: undefined,  // posición x inicial del laberinto
    startY: undefined,  // posición y inicial del laberinto
    endX: undefined,  // posición x que representa la salida
    endY: undefined,// posición y que representa la salida
    startOrientation: undefined // orientación inicial
};

var player  = {
    x: undefined, // posición x actual del jugador
    y: undefined, // posición x actual del jugador
    orientation: undefined // orientación actual del jugador
};
const Orientation = {
    LEFT: 1,
    UP: 2,
    RIGHT: 3,
    DOWN: 4
  };

var mazeInterface = []; // representa la inferfaz usando DOM del laberinto

function renderMaze (maze, player); // dibujar laberinto
function setStyleAt (maze, x, y, style); // establecer estilo en la posición x, y

function isWall (maze, x, y); // preguntar si (x,y) representa un muro, es decir  '*'
function isSpace (maze, x, y); // preguntar si (x,y) representa un espacio vacio, es decir  '_'
function isEnd (maze, x, y); // preguntar si (x,y) representa la salida del laberinto, es decir 'W'

function turnLeft (player) ; //  rotar a la izquierda
function turnRight (player) ; //  rotar a la derecha
function moveForward(player) ; //  mover una posición hacia adelante en la dirección de player.direction

function exitMaze (player); // Algoritmo de búsqueda para encontrar un camino de salida para un laberinto cualquiera
```

#### [Tip 4. | Preguntas guia]
- ¿Cómo hacemos para detectar el teclado del usuario? En particular, ¿las flechas?
- ¿Cómo hacemos para mover al personaje en el tablero?
- ¿Como hacemos para limitar el movimiento del personaje en el tablero? (si hay una pared, por ejemplo)
- ¿Que significa pintar o renderizar?
- ¿Cómo hacemos para renderizar el tablero?

***
[Continuar]( )
