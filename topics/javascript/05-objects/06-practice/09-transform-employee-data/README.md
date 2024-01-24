---
tracks:
  - web-dev
env: cjs
---

# transformEmployeeData

Escribe una función llamada `transformEmployeeData` que transforma algunos
datos de los empleados de un formato a otro.

El argumento se verá así:

```js
[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
```

Dado que la entrada, el valor devuelto debe verse como esto:

```js
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```

Tenga en cuenta que la entrada puede tener un número diferente de filas o llaves
diferentes de la muestra dada.

Por ejemplo, digamos que el departamento de recursos humanos agrega un campo
"tshirtSize" a cada registro de empleado. Su código debería acomodarse de manera
flexible.
