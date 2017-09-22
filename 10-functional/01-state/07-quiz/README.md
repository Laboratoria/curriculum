# Cuestionario

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `10min`

***

## Preguntas

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

### La siguiente función modifica...

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
