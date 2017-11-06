# Closures

* Environment: `js`

***
## Tarea

Implementa una función llamada `createLogger`. Esta función debe recibir un
argumento (`namespace`) de tipo string, y debe retornar una función anónima que
a su vez reciba un string (`str`) e imprima a la consola el string recibido,
precedido de `[namespace]: `.

Por ejemplo:

```js
const warn = createLogger('warning');
warn('houston, we have a problem');
```

Debe producir el siguiente output en la consola:

```
[warning]: houston, we have a problem
```

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

***

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`coi verify closures.js`