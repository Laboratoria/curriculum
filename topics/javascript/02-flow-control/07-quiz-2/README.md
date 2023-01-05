---
type: quiz
duration: 30min
---

# Quiz 2

## Preguntas

### 1) ¿Qué forma de modificar el flujo de un programa muestra la figura a continuación?

![Flujo bucle](http://eloquentjavascript.net/img/controlflow-loop.svg)

#### Opciones

1. while
2. bucles en general
3. if
4. if else
5. if else "anidado" (nested)

<solution style="display:none;">2</solution>

### 2) ¿Cuál es el problema con el siguiente código?

```js
do {
  console.log('Hello world');
} while (2 > 3);
```

#### Opciones

1. Tiene un error de sintaxis
2. No utiliza buenas prácticas
3. La variable no está bien declarada
4. Genera un bucle infinito
5. Ninguno, funciona bien e imprime 'hello world' una vez en la consola

<solution style="display:none;">5</solution>

### 3) Encuentra el error en la siguiente función

```js
let result = 0;

const showSum = (num1, num2) => {
  result = num1 + num2;
  alert('El resultado es ' + result);
};

showSum(if, else);
```

#### Opciones

1. La función no está siendo invocada
2. Los parámetros no están siendo declarados
3. alert no es una función
4. Error de sintaxis. No se pueden utilizar keywords como argumentos

<solution style="display:none;">4</solution>

### 4) La diferencia entre undefined y null

#### Opciones

1. No existe, son lo mismo
2. No importa
3. `undefined` no tiene valor y `null` es un string vacio
4. `undefined` significa que no se ha _asignado_ un valor, mientras que `null`
   significa que hemos _asignado_ el valor `null`

<solution style="display:none;">4</solution>

### 5) Cuál es el resultado de

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

#### Opciones

1. imprime los números pares desde el 0 al 10 (inclusive)
2. imprime los números pares desde el 0 al 12 (inclusive)
3. imprime los números pares desde el 2 al 10 (inclusive)
4. imprime los números pares desde el 2 al 12 (inclusive)

<solution style="display:none;">2</solution>

### 6) El resultado de "Hola" + "mundo" es

#### Opciones

1. "Hola Mundo"
2. "Hola mundo"
3. "Holamundo"
4. 'HolaMundo'

<solution style="display:none;">3</solution>

### 7) Cuál es el resultado de

```js
for (let number = 1; number < 8; number = number * 3) {
  console.log(number);
}
```

#### Opciones

1. 1
2. 1, 3, 9
3. 0, 1, 3, 9
4. 1, 3

<solution style="display:none;">4</solution>

### 8) Al siguiente switch le faltan algunos "breaks". ¿Cuál sería el resultado de ejecutar el código así como está?

```js
const weather = 'soleado';

switch (weather) {
  case 'lluvioso':
    console.log('Recuerda levar un paraguas.');
    break;
  case 'soleado':
    console.log('Viste ligero.');
  case 'nublado':
    console.log('Sal a la calle');

  default:
    console.log('Tipo de clima desconocido');
    break;
}
```

#### Opciones

1. Imprime 'Sal a la calle.'
2. Imprime 'Tipo de Clima desconocido.'
3. Imprime 'Sal a la calle'" y 'Tipo de Clima desconocido.'
4. Imprime 'Viste ligero.', 'Sal a la calle.' y 'Tipo de Clima desconocido.'

<solution style="display:none;">4</solution>

### 9) Cuál es el resultado de

```js
for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    continue;
  } else {
    console.log(i);
  }
}
```

#### Opciones

1. Imprime los números enteros del 0 al 10 (inclusive)
2. Imprime los números enteros del 1 al 10 (inclusive)
3. Imprime los números enteros del 0 al 10 (inclusive) y luego imprime el número
   0 de nuevo
4. Imprime los números enteros del 1 al 10 (inclusive) y luego imprime el número
   0 de nuevo

<solution style="display:none;">2</solution>

### 10) Cuál es el resultado de

```js
var medalForScore = function(score) {
  if (score < 3){
    return 'Bronze';
  }
  if (score < 7){
    return 'silver';
  }
  return 'Gold';
}

console.log(medalForScore(3));
```

#### Opciones

1. Bronze
2. Silver
3. Gold
4. undefined

<solution style="display:none;">2</solution>

### 11) Una función puede retornar múltiples valores a la vez

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">2</solution>

### 12) Los comandos como alert(), prompt() y console.log() son realmente funciones

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>
