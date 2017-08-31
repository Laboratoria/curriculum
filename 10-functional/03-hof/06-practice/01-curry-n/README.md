Este es un ejemplo de implementación usando `curry3`, el cual tiene capacidad de manejar hasta tres argumentos:

```js
function curry3(fun){
  return function(one){
    return function(two){
      return function (three){
        return fun(one, two, three)
      }
    }
  }
}
```

Si la fuesemos a implementar con la función ejemplo:

```js
function abc(one, two, three) {
  return one/two/three
}
```

Se vería de la siguiente manera:

```js
var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)

console.log(curryA(2)) // => 1
```

# Tarea

En este reto, vamos a implementar la función 'curry' para un número arbitrario de argumentos.

`curryN` recibe dos parámetros:

* fn: la función que queremos para _curry_.
* n: número opcional de argumentos para _curry_. Si no se suministra, entonces `curryN` debe usar la aridad de `fn` como el valor para `n`.

## Ejemplo

```js
function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
```

## Condiciones

* No usar lazos for/while o `Array.prototype.forEach`.

## Pista

* Se puede detectar el número esperado de argumentos de una función (su aridad) revisando la propiedad .length de la función.

## Plantilla

```js
function curryN(fn, n) {
  // La solución vá aquí,
}

module.exports = curryN
```
