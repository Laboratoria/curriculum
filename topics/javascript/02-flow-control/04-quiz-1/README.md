---
type: quiz
duration: 30min
---

# Quiz 1

## Preguntas

### 1) ¿Cuáles de las siguientes permiten modificar el control flujo de un programa?

#### Opciones

1. únicamente estructuras condicionales y repetitivas
2. únicamente funciones
3. estructuras condicionales, estructuras repetitivas y funciones
4. ninguna de las anteriores

<solution style="display:none;">3</solution>

### 2) ¿Qué forma de modificar el flujo de un programa muestra la figura a continuación?

![Flujo condicional](http://eloquentjavascript.net/img/controlflow-nested-if.svg)

#### Opciones

1. while
2. do while
3. for
4. if
5. if else
6. if else "anidado" (nested)

<solution style="display:none;">6</solution>

### 3) Son ejemplos de DRY

#### Opciones

1. bucles y funciones
2. solo bucles
3. solo funciones
4. ninguna de las anteriores

<solution style="display:none;">1</solution>

### 4) ¿Cuál es el problema con el código a continuación?

```js
while (3 > 2) {
  console.log('Hello world');
}
```

#### Opciones

1. Tiene un error de sintaxis
2. No utiliza buenas prácticas
3. La variable no está bien declarada
4. Genera un bucle infinito

<solution style="display:none;">4</solution>

### 5) Encuentra el error en la siguiente función

```js
let result = 0;

const showSum = () => {
  result = num1 + num2;
  alert('El resultado es ' + result);
};

showSum();
```

#### Opciones

1. La función carece de parámetros y por lo tanto "num1" y "num2" no están definidos
2. La función no está siendo invocada
3. Tiene un error de sintaxis
4. alert no es una función

<solution style="display:none;">1</solution>

### 6) Completa los espacios en blanco (ordenadamente)

```js
const sum = _____ (num1, num2) {
  ________ num1 + num2;
}

_______(2, 3);
```

#### Opciones

1. return - function - sum
2. function - sum - return
3. function - return - sum
4. for - return - while

<solution style="display:none;">3</solution>

### 7) Cuál es el resultado de

```js
let emoji = ':D';

const greet = (name) => {
  emoji = ':)';
  const myGreet = () => `Hola ${name} ${emoji}`;
  return myGreet();
};

console.log(greet('Laboratoria'));
```

#### Opciones

1. Hola Laboratoria :D
2. Hola Laboratoria :)
3. Hola Laboratoria
4. undefined

<solution style="display:none;">2</solution>

### 8) Cuál es el resultado de

```js
let number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

#### Opciones

1. imprime los números pares desde el 2 al 10 (inclusive)
2. imprime los números pares desde el 2 al 12 (inclusive)
3. imprime los números pares desde el 0 al 10 (inclusive)
4. imprime los números pares desde el 0 al 12 (inclusive)

<solution style="display:none;">4</solution>

### 9) Cuál es el resultado de

```js
for (let number = 1; number <= 8; number = number * 2) {
  console.log(number);
}
```

#### Opciones

1. 2, 4, 6, 8
2. 1, 2, 4, 6, 8
3. 1, 2, 4, 8
4. 0, 1, 2, 4, 8

<solution style="display:none;">3</solution>

### 10) Al siguiente switch le faltan algunos "breaks", sin embargo ¿Cuál sería el resultado de ejecutar el código así como está?

```js
const weather = 'nublado';

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

1. Error de sintaxis
2. Imprime 'Sal a la calle.'
3. Imprime 'Tipo de Clima desconocido.'
4. Imprime 'Sal a la calle.' y 'Tipo de Clima desconocido.'

<solution style="display:none;">4</solution>

### 11) ¿Qué diferencia un bucle "do" de un "while"?

#### Opciones

1. Un bucle "do" siempre ejecuta su cuerpo por lo menos una vez.
2. El "while" puede generar un ciclo infinito, pero un "do" nunca lo hará.
3. El "do" ejecuta una sola vez el cuerpo.
4. No existe diferencias.

<solution style="display:none;">1</solution>

### 12) Cuál es el resultado de

```js
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
```

#### Opciones

1. Imprime los números enteros del 1 al 10 (inclusive)
2. Imprime los números enteros del 0 al 10 (inclusive) con excepción del número 5
3. Imprime los números enteros del 0 al 10 (inclusive)
4. Imprime los números enteros del 1 al 9 (inclusive) y luego imprime el número
   5 de nuevo

<solution style="display:none;">2</solution>

### 13) Cuál es el resultado de

```js
const medalForScore = (score) => {
  if (score < 3){
    return 'Bronze';
  }
  if (score < 7){
    return 'silver';
  }
  return 'Gold';
}

console.log(medalForScore(7));
```

#### Opciones

1. Bronze
2. Silver
3. Gold
4. undefined

<solution style="display:none;">3</solution>

### 14) En el ejemplo a continuación

```js
const square = num => num * num;
square(12);
//->144
```

#### Opciones

1. num es un parámetro y 12 es el argumento
2. num y 12 son parámetros
3. num y 12 son argumentos
4. num es un argumento y 12 es el parámetro

<solution style="display:none;">1</solution>
