---
type: quiz
duration: 20min
---

# Cuestionario

## Preguntas

### Una función de orden superior es

#### Opciones

1. una función que retorna otra función
2. una función flecha (arrow function)
3. una función sin argumentos de entrada ni valor de retorno
4. una función que recibe otra función como argumento

<solution style="display:none;">1,4</solution>

### Dada la siguiente función

```js
const foo = bar => baz => baz.filter(item => item === bar).shift();
```

Cuál sería el resultado de invocar `foo('ana')(['ale', 'mafe', 'ana'])`?

#### Opciones

1. `false`
2. `['ana']`
3. `'ana'`
4. `true`
5. `['ale', 'mafe']`

<solution style="display:none;">3</solution>

### Aplicación parcial

Cuando usamos la técnica de aplicación parcial partimos de una función que
recibe varios argumentos, y creamos una nueva función que simplemente invoca a
la primera pero con un número de argumentos ya fijados, para no tener que
especificarlos más tarde. Al aplicar parcialmente...

#### Opciones

1. solo podemos aplicar parcialmente un argumento
2. fijamos todos los argumentos de una función
3. fijamos los primeros argumentos (uno o más)
4. fijamos los últimos argumentos

<solution style="display:none;">3</solution>

### Currying

A diferencia de la aplicación parcial, cuando aplicamos currying...

#### Opciones

1. fijamos todos los argumentos en una sola invocación
2. fijamos un argumento por función
3. el compilador hace ejercicio
4. hacemos uso de higher order functions

<solution style="display:none;">2</solution>

### Funciones de primera clase

En JavaScript, las funciones son ciudadanas de primera clase, ya que pueden ser
enviadas como argumento y devueltas como valor de retorno.

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### Currying

Cuando aplicamos currying, partimos de una función que recibe varios argumentos
y la "convertimos" en...

#### Opciones

1. un objeto multidimensional
2. una secuencia de funciones, cada una esperando un solo argumento
3. una función pura
4. una función sin argumentos de entrada

<solution style="display:none;">2</solution>

### Funciones como valores de primera clase

En JavaScript, las funciones son valores o ciudadanas de primera y esto permite
que tengamos higher order functions. Marca todas las características propias
de los valores de primera clase:

#### Opciones

1. Podemos asignarlas a identificadores (variables)
2. No podemos asignarlas a identificadores (variables)
3. Podemos asignarlas a propiedades de objetos
4. No podemos asignarlas a propiedades de objetos
5. Podemos pasarlas como argumentos
6. No podemos pasarlas como argumentos
7. Podemos usarlas como valor de retorno
8. No podemos usarlas como valor de retorno

<solution style="display:none;">1,3,5,7</solution>
