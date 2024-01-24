---
tracks:
  - web-dev
env: cjs
---

# greetCustomer

Escribe una función llamada `greetCustomer`.

Dando un nombre, `greetCustomer` devuelve un saludo basado en cuántas veces ese
cliente ha visitado el restaurante.  Consulte el objeto `customerData`.

El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de
cliente):

```js
console.log(greetCustomer('Terrance'));
// => 'Welcome! Is this your first time?'
```

Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)

```js
console.log(greetCustomer('Joe'));
// => 'Welcome back, Joe! We're glad you liked us the first time!'
```

Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)

```js
console.log(greetCustomer('Carol'));
// --> 'Welcome back, Carol! So glad to see you again!'
```

Notas:

- Tu función no debe alterar el objeto `customerData` para actualizar el número
  de visitas.
- No codificar los datos exactos de la muestra. Esto es una mala idea:

```js
if (firstName === 'Joe') {
  // do something
}
```
