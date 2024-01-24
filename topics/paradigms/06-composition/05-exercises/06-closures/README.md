---
tracks:
  - web-dev
env: cjs
---

# Closures

## Tarea

Implementa una función llamada `createLogger`. Esta función debe recibir un
argumento (`namespace`) de tipo string, y debe retornar una función anónima que
a su vez reciba un string (`str`) e imprima a la consola el string recibido,
precedido de `[namespace]:`.

Por ejemplo:

```js
const warn = createLogger('warning');
warn('houston, we have a problem');
```

Debe producir el siguiente output en la consola:

```text
[warning]: houston, we have a problem
```

## Recursos

* [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
