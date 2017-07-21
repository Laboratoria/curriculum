# Ejercicios Guiados - Programación Estructurada
- Formato: `video`
- Duración: `45min`

## Objetivos de Aprendizaje

- Entender, a través de casos prácticos, cómo aplicar los conceptos de estructuras condicionales, repetitivas y funciones para la resolución de problemas

***

## Enunciados

Al igual que hemos hecho antes, es hora de aplicar los conceptos aprendidos para resolver problemas.

A continuación tendrás varios problemas que debemos resolver. Intenta resolverlos primero por tu cuenta. Más abajo encontrarás las soluciones de Michelle. Después de haberlo intentado, compara tu soluciones con las de Michelle.   

#### 1. Edades y etapas

Crea una web que pida, por medio de un `prompt()`, la edad de una persona. Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: `baby`, `toddler`, `preschooler`, `gradeschooler`, `teenager`, `young adult` and `adult`, según el criterio de esta [página](https://www.healthychildren.org/English/ages-stages/Pages/default.aspx).

Si la persona ingresa un dato que **no** es un número entero (por ejemplo: un `string`, un número decimal o un campo vacío), la web debe dar un mensaje de error. Revisa este [link](https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer) que tiene un par de tips interesantes relacionados a este proyecto.

#### 2. Contando caracteres y espacios

Crea una web que pida, por medio de un `prompt()`, una frase al usuario. La web debe presentar un mensaje que diga el número de caracteres y de espacios que componen el string. En la consola, debe aparecer cada caracter impreso en una línea separada, en mayúscula. Si el usuario ingresa un campo vacío, la web debe dar un mensaje de error.

Arma tu archivo JavaScript para que tenga 3 funciones:

  - Una función que imprima todos los caracteres de un `string`, cada uno en una línea separada, en mayúscula.
  - Una función que cuente el número de caracteres de un `string` (¡sin utilizar `.length`!)
  - Una función que cuente el número de espacios de un `string`

#### 3. Cifrado César

Crea una web que pida, por medio de un `prompt()`, una frase al usuario y devuelva el mismo mensaje encriptado según el [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar) con con el parámetro de desplazamiento de **seis espacios hacia la derecha**

Por ejemplo:
- Texto orginal: `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`
- Texto cifrado: `GHIJKLMNÑOPQRSTUVWXYZABCDEF`.

#### 4. Chessboard

Crea un programa que cree un `string` que represente una cuadrícula de 8x8, usando el salto de línea como separador. En cada posición de la cuadrícula está o un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez.

Pasar este `string` a console.log debería mostrar algo como esto:

```js
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```
Cuando tengas un programa que genere este patrón, define una variable tamano = 8 y cambia el programa de tal manera que trabaje para cualquier tamaño, produciendo una cuadrícula del ancho y alto dado.


## Solucionarios

A continuación, Michelle te explica cómo resolvió cada uno de los ejercicios anteriores.  

#### 1. -----

[![-----]()

#### 2. -----


## Último paso de esta lección

Felicidades, has completado el material de la lección `03-program-structure`. Para finalizar debes continuar a la sección de _"prueba tu conocimiento"_, donde completarás algunos retos y cuestionarios que validarán tu aprendizaje.

***

[Continuar a prueba tu conocimiento](05-prueba-tu-conocimiento-program-structure.md)
