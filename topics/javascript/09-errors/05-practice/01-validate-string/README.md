---
tracks:
  - web-dev
env: cjs
---

# validateString

Escribe una función que reciba un string como argumento y arroje los siguientes
errores:

* `TypeError` con mensaje `El argumento str debe ser un string` cuando el
  argumento recibido no es de tipo `string`.
* `RangeError` con mensaje `El argumento str debe tener al menos 4 caracteres`
  cuando el argumento recibido es un `string` de menos de 4 caracteres.
* `RangeError` con mensaje
  `El argumento str debe tener un máximo de 10 caracteres` cuando el argumento
  recibido tiene más de 10 caracteres.

Ejemplo:

```js
// TypeError: El argumento str debe ser un string
validateString();

// RangeError: El argumento str debe tener al menos 4 caracteres
validateString('');
validateString('abc');

// RangeError: El argumento str debe tener un máximo de 10 caracteres
validateString('abcdefghijk');
validateString('hola mundo cruel');
```
