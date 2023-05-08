---
env: cjs
---

# Parse items

Refactoriza le siguiente función para que devuelva un nuevo arreglo en vez de
modificar el arreglo que recibe como argumento.

```js
const parseItems = items => {
  for (let i = 0; i < items.length; i++) {
    items[i] = parseInt(items[i]);
  }
  return items.sort();
};
```

## Pistas

* Puedes usar `Array#map()` para iterar sobre el array y aplicar la
  transformación requerida (`parseInt()`).
