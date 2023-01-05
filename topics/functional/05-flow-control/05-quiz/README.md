---
type: quiz
duration: 20min
---

# Cuestionario

## Preguntas

### En una función recursiva, el caso base es

#### Opciones

1. lo mismo que el _caso recursivo_
2. el punto donde termina la recursión
3. el caso (argumentos) para el cual no necesitamos recursión
4. el caso más común de invocación

<solution style="display:none;">2,3</solution>

### En una función recursiva, el caso recursivo es

#### Opciones

1. lo mismo que el _caso base_
2. el caso donde se da la recursión, donde la función se invoca a sí misma
3. un bucle for
4. el caso que sólo podemos resolver usando recursión

<solution style="display:none;">2,4</solution>

### Cada vez que invocamos una función

#### Opciones

1. se añade el contexto de invocación a la pila de llamadas
2. se reinicia la pila de llamadas
3. se extrae el último elemento de la pila
4. la pila de llamadas crece

<solution style="display:none;">1,4</solution>

### Una función asíncrona

#### Opciones

1. bloquea la ejecución
2. retorna el resultado final por medio de `return`
3. se caracteriza por programar tareas para que se ejecuten en el futuro
4. recibe funciones (_callbacks_) como argumentos o retorna una promesa

<solution style="display:none;">3,4</solution>

### En una función recursiva, una condición de terminación es

#### Options

1. toda condición que incluya un `return`
2. toda condición que detenga la recursión
3. lo mismo que el _caso base_
4. toda condición que produzca un error

<solution style="display:none;">2</solution>

### Argumentos de la recursión

En una función recursiva, los argumentos con los que la función se invoca a sí
misma en el caso recursivo...

#### Options

1. son siempre los mismos
2. deben ir aumentando la complejidad del problema empezando en el caso base
3. son irrelevantes para la recursión
4. deben ir acotando cada vez más el problema, acercándose al caso base

<solution style="display:none;">4</solution>

### El call stack o pila de llamadas

#### Options

1. hace que la recursión pueda ser infinita
2. representa el límite de anidación en la recursión
3. no tiene relación con la recursión
4. puede "reventar" si se queda sin memoria

<solution style="display:none;">2,4</solution>

### Orden de ejecución

Dado el siguiente código, cual sería el orden del output en la consola?

```js
setTimeout(() => console.log('pong'), 1000);
console.log('ping');
setTimeout(() => console.log('beep'), 500);
console.log('boop');
```

#### Options

1. `pong ping boop beep`
2. `ping pong beep boop`
3. `ping boop beep pong`
4. `ping boop pong beep`

<solution style="display:none;">3</solution>
