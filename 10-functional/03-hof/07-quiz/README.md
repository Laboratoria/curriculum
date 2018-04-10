# Cuestionario

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `10min`

***

## Preguntas

<<<<<<< HEAD
<<<<<<< HEAD
### Una función de orden superior es ...
=======
### Una función de orden superior es
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d
=======
### Una función de orden superior es
>>>>>>> fe962210c0765eb36335f1ac4f7c698675c16549

#### Opciones

1. una función que retorna otra función
2. una función flecha (arrow function)
3. una función sin argumentos de entrada ni valor de retorno
4. una función que recibe otra función como argumento

<solution style="display:none;">1,4</solution>

<<<<<<< HEAD
<<<<<<< HEAD
### Dada la siguiente función ...
=======
### Dada la siguiente función
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d
=======
### Dada la siguiente función
>>>>>>> fe962210c0765eb36335f1ac4f7c698675c16549

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
