---
tracks:
  - web-dev
env: cjs
---

# getDependencies

## Tarea

Implementar una función recursiva que devuelva todas las dependencias únicas y
subdependencias de un módulo ordenadas alfabéticamente. Las dependencias deben
imprimirse como dependencia@versión, por ejemplo: `inflection@1.2.6`.

Se permiten múltiples versiones del mismo módulo, pero los módulos duplicados de
la misma versión deben eliminarse

## Argumentos

* tree: un árbol de dependencias. Vea a continuación un ejemplo de la estructura.

## Ejemplo

```js
const loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

getDependencies(loremIpsum);
// => ['inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']
```

## Condiciones

* No usar bucles for o while
* Usa `Object.keys()` para obtener un array con las propiedades enumerables de
  un objeto

## Recursos

* [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
