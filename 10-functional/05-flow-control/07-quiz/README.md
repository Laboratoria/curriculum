# Cuestionario

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `10min`

***

## Preguntas

<<<<<<< HEAD
### En una función recursiva, una condición de terminación es...
=======
### En una función recursiva, una condición de terminación es
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d

#### Options

1. toda condición que incluya un `return`
2. toda condición que detenga la recursión
3. lo mismo que el _caso base_
4. toda condición que produzca un error

<solution style="display:none;">2</solution>

<<<<<<< HEAD
### Argumentos de la recursión...
=======
### Argumentos de la recursión
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d

En una función recursiva, los argumentos con los que la función se invoca a sí
misma en el caso recursivo...

#### Options

1. son siempre los mismos
2. deben ir aumentando la complejidad del problema empezando en el caso base
3. son irrelevantes para la recursión
4. deben ir acotando cada vez más el problema, acercándose al caso base

<solution style="display:none;">4</solution>

<<<<<<< HEAD
### El call stack o pila de llamadas...
=======
### El call stack o pila de llamadas
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d

#### Options

1. hace que la recursión pueda ser infinita
2. representa el límite de anidación en la recursión
3. no tiene relación con la recursión
4. puede "reventar" si se queda sin memoria

<solution style="display:none;">2,4</solution>

<<<<<<< HEAD
### Dada el siguiente código, cual sería el output en la consola?
=======
### Orden de ejecución

Dado el siguiente código, cual sería el orden del output en la consola?
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d

```js
setTimeout(() => console.log('pong'), 1000);
console.log('ping');
setTimeout(() => console.log('beep'), 500);
console.log('boop');
```

#### Options

<<<<<<< HEAD
1. ```text
   pong
   ping
   boop
   beep
   ```
2. ```text
   ping
   pong
   beep
   boop
  ```
3. ```text
   ping
   boop
   beep
   pong
   ```
4. ```text
   ping
   boop
   pong
   beep
  ```
=======
1. `pong ping boop beep`
2. `ping pong beep boop`
3. `ping boop beep pong`
4. `ping boop pong beep`
>>>>>>> aa09111e4cafa4d3aaefa69d39e66f2a452f6a2d

<solution style="display:none;">3</solution>
