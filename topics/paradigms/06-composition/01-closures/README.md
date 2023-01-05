---
type: read
duration: 3min
---

# Closures

Para poder entender las funciones _factory_ y el mecanismo de composición de
objetos que vamos ver más adelante, es esencial sentirse cómoda con el concepto
de _closure_.

En JavaScript las _funciones_ no son sólo "funciones", también son _closures_.
Esto quiere decir que cuando declaramos una función, el cuerpo de la función
tiene acceso al scope dónde se declaró la funcíon además de su scope local.
_Closure_ significa que las funciones se "cierran" alrededor de las variables a
las que tiene acceso. Por lo tanto, una función creada dentro de otra función
tiene acceso a las variables del scope de la función que la envuelve, incluso
después de que ésta haya retornado. Considera el siguiente snippet:

```js
const makeFunction = function () {
  const foo = true;
  return function () {
    return foo;
  };
};

const myFunc = makeFunction();
myFunc(); // true
```

En el ejemplo de arriba podemos ver que `makeFunction` es una función anónima
que retorna otra función anónima, y ésta última todavía tiene acceso a `foo`
(una variable local de `makeFunction`) después de que `makeFunction` ya ha
retornado.

Los closures son un "feature" muy poderoso y nos van a permitir crear scopes
"privados" (sólo visibles para aquellas funciones creadas dentro de un scope
compartido.

Esto no sólo se aplica a variables declaradas dentro del scope, sino a todas las
variables "visibles" dentro de ese scope, incluyendo los argumentos de
invocación.

```js
// una función que crea un objeto, y sus métodos tienen acceso a los argumentos
// con los que se invocó la función que creó el objeto.
const createNote = text => ({
  print: () => console.log(text)
});

const note = createNote('lorem ipsum')
note.print() // Outputs: "lorem ipsum"


// una función que hace referencia a una variable declarada fuera de su scope
let name = 'Lupo';
function say() {
  console.log('Hola soy ' + name);
}
say(); // "Hola soy Lupo"
name = 'Pedro Picapiedra';
say(); // "Hola soy Pedro Picapiedra"
```

En un lenguaje sin "closures", a la hora de invocar `say()` en este ejemplo,
tendríamos que haber explícitamente pasado `name` como argumento. En JavaScript
la función `say()` tiene acceso al contexto exterior, incluso si invocáramos la
función desde otro lugar, o como un callback de una operación asíncrona, siempre
va a recordar ese contexto exterior (outer scope) y puede hacer referencia a él.

Pero... por qué, para qué? Veamos un ejemplo.

```js
function fetchData() {
  const reqId = 123;
  $.get('/some-url', function () {
    alert('Request ' + reqId + ' completed');
  });
}
```

En el código de arriba la función `fetchData()` va a hacer una llamada AJAX
(usando jQuery), y cuando la llamada retorna (esto ocurre después de que
`fetchData` haya retornado) el callback todavía tiene acceso a `reqId`. Esto es
muy útil a la hora programar operaciones asíncronas, ente otras cosas.

***

## Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html)

Otros recursos:

* [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [MDN - Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
* [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
