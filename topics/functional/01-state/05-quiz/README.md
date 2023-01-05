---
type: quiz
duration: 20min
---

# Cuestionario

## Preguntas

### Una función pura es

#### Opciones

1. una función flecha (arrow function)
2. una función sin argumentos de entrada ni valor de retorno
3. una función que dados los mismos inputs siempre retorna lo mismo, y sin
   efectos secundarios
4. una función que no hace uso de `this`

<solution style="display:none;">3</solution>

### Dada la siguiente función `processData()`, dirías que es pura?

```js
const data = ['beep', 'boop'];

const processData = () => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i].toLowerCase());
  }
  return result;
};
```

#### Opciones

1. Sí
2. No

<solution style="display:none;">2</solution>

### Efectos secundarios

Se dice que una función tiene efectos secundarios cuando:

#### Opciones

1. Invoca a otras funciones durante su ejecución
2. Cambia estado fuera de su scope
3. Programa tareas para que se ejecuten en el futuro
4. Retorna funciones

<solution style="display:none;">2</solution>

### Cuáles de las siguientes son características de las funciones puras?

#### Opciones

1. No tienen efectos secundarios
2. No usan argumentos de entrada
3. Siempre devuelven lo mismo dados los mismos argumentos
4. Hacen uso de variables fuera de su scope

<solution style="display:none;">1,3</solution>

### Dado el siguiente snippet, cuáles serán los valores de `a` y `b`?

```js
const foo = str => {
  str = `===${str}===`;
  return str;
};

const a = 'hola';
const b = foo(a);
```

#### Opciones

1. "a" será 'hola' y "b" será '===hola==='
2. "a" será '===hola===' y "b" será '===hola==='

<solution style="display:none;">1</solution>

### Dado el siguiente código, cuáles serán los valores de a, b y c?

```js
const foo = arr => arr.sort();
const a = [4, 1, 3, 2];
const b = foo(a);
const c = (a == b);
```

#### Opciones

1. "a" será [4, 1, 3, 2], "b" será [1, 2, 3, 4] y "c" será true
2. "a" será [1, 2, 3, 4], "b" será [1, 2, 3, 4] y "c" será false
3. "a" será [4, 1, 3, 2], "b" será [1, 2, 3, 4] y "c" será false
4. "a" será [1, 2, 3, 4], "b" será [1, 2, 3, 4] y "c" será true

<solution style="display:none;">4</solution>
