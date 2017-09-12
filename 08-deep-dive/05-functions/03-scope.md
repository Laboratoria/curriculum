# Scope

* Formato: `lectura`
* Duración: `Xmin`

***

En esta lección, primero veremos cómo se comportan las variables en base al
ámbito, luego veremos el entorno y que son los closures.

## Background: El `scope`de una variable

Para el resto de la lección, es necesario tener claro los siguientes conceptos:

### El `scope` de una variable

El `scope` de una variable son las ubicaciones desde donde puede ser accedida.
Por ejemplo:

```javascript
function foo() {
  var x;
}
```

Aquí, el _direct scope_ (ámbito directo) de `x` es la función `foo`.

### Lexical scoping

Las variables en `ES5` son _lexically scoped_ (de ámbito léxico), así que la
estructura estática de un programa determina el ámbito de la variable (no es
influinciada de donde la función fue llamada).

### Nested Scopes (ámbitos anidados)

Si el ámbito está anidado dentro del ámbito directo de una variable, la variable
será accesible en todos los ámbitos:

```javascript
function foo(arg) {
  function bar() {
    console.log(`arg: ${arg}`);
  }
  bar();
}

console.log(foo('hello')); // arg: hello
```

El ámbito directo de `arg` es `foo`, pero es también accesible del ámbito
anidado `bar`. Con respecto a la anidación, `foo` es el _outer scope_ (alcance o
ámbito externo) y `bar` es el _inner scope_ (alcance o ámbito interno).

### Shadowing (sombra)

Si un scope declara una variable que tiene el mismo nombre que otra en un scope
interno de una función, el acceso a la variable externa es bloqueado en el scope
interno y todos los scopes anidados dentro de ella. Cambios a la variable
interna no afecta a la variable externa, la cual es accesible nuevamente cuando
el scope interno es dejado. Ejemplo:

```javascript
var x = 'global';
function f() {
  var x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro de la función `f`, la variable `x` es sombreada por la variable local
`x`.

***

[Continuar](04-exercises.md)
