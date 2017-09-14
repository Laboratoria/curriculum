# Cuestionario

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `10min`

***

## Preguntas

### Una función de orden superior es ...

#### Opciones

1. una función que retorna otra función
2. una función flecha (arrow function)
3. una función sin argumentos de entrada ni valor de retorno
4. una función que recibe otra función como argumento

<solution style="display:none;">1,4</solution>

### Dada la siguiente función ...

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

### Blah blah blah

Se dice que una función tiene efectos secundarios cuando:

#### Opciones

1. Invoca a otras funciones durante su ejecución
2. Cambia estado fuera de su scope
3. Programa tareas para que se ejecuten en el futuro
4. Retorna funciones

<solution style="display:none;">1</solution>
