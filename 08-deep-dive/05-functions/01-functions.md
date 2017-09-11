# Funciones

* Formato: `lectura`
* Duración: `Xmin`

***

Funciones son valores que pueden ser llamados. Una manera de definir una función
es llamada una `function declaration` o `declaración de función`. Por ejemplo,
el siguiente código define una función `id` que tiene un simple parámetro `x`:

```javascript
function id(x) {
  return x;
}
```

La sentencia `return` retorna un valor de la función `id`. Puedes llamar una
función a través de su nombre, seguido de sus `argumentos` entre paréntesis:

```javascript
// `>` simula el prompt que aparece en la consola del navegador
> id('hello');
'hello'
```

Si no se retorna nada de la función `undefined` es retornado (implícitamente):

```javascript
> function f() { }
> f();
undefined
```

Esta sección mostró solo una manera de definir y llamar una función. Otras
formas serán mostradas luego.

## Los 3 roles de funciones en JavaScript

Una vez definida una función, esta puede desarrollar diversos roles:

### Nonmethod function (función normal)

Puedes llamar a una función directamente como visto hace un momento. Acá un
ejemplo de invocación:

```javascript
id('hello');
```

Por convención, los nombres de estas funciones _normales_ empiezan con minúscula
siguiendo el estilo **lowerCamelCase**.

### Constructor

Puedes invocar una función a través del operador `new`. Es usado para la
creación de objetos. Aquí un ejemplo de invocación:

```javascript
new Date();
```

Por convención, los nombres de los constructores empiezan con mayúscula,
siguiendo el estilo **UpperCamelCase**.

### Método

Puedes almacenar una función en una propiedad de un objeto, lo que lo convierte
en un _método_. Aquí un ejemplo de como invocar un método definido en un objeto
`obj`:

```javascript
obj.method();
```

Por convención, los nombres de los métodos siguen el estilo de las funciones
normales (_lowerCamelCase_).

## Terminología: "Parámetro" vs. "Argumento"


Los términos `parámetro` y `argumento` son a menudo usados para referirse a lo
mismo ya que se logra enteder a lo que se refiere. Sin embargo, a continuación
se muestra una regla para diferenciarlos:

* **Parámetros** son usados para definir una función. En el siguiente ejemplo,
  `param1` y `param2` son parámetros:

  ```javascript
  function foo(param1, param2) {
    // ...
  }
  ```
* **Argumentos** son usados para invocar una función. En el siguiente ejemplo,
  `3` y `7` son argumentos:

  ```javascript
  foo(3, 7);
  ```
