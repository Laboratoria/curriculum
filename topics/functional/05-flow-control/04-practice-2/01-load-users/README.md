---
env: cjs
---

# loadUsers

¡Este código está dañado!

Un desarrollador que trabaja en Java ha hecho _commit_ de este terrible código a
nuestro repositorio y, ¡no lo probó!

```js
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers
```

## Tarea

¡Arregla este código! La función _callback_ debería ser llamada con todos los
usuarios ya cargados. El orden de los usuarios debería coincidir con el orden de
los ID de usuarios suministrados. Porque esta función es asíncrona, no nos
importa el valor que retorna.

## Argumentos

* `userIds`: un arreglo numérico de ID de usuarios.
* `load`: una función usada para cargar los objetos usuario. La función espera un
  ID numérico y una llamada _callback_. La llamada _callback_ se invoca con el
  resultado de cargar los usuarios con el ID especificado (un objeto ID de
  usuario o devuelve una respuesta nula _null_).
* `done`: una función que espera un arreglo con objetos usuario (como fue
  recuperado desde `load`).

## Condiciones

* No usar lazos for/while  (usar _Array#forEach_ está bien).
* El orden de los resultados en `done` debe ser los mismos que fueron
  especificados en `userIds`.
* Los usuarios deben ser cargados en paralelo, por ejemplo el tiempo  total de
  la tarea no debe tomar más de un segundo.
* No crear ninguna función innecesaria como por ejemplo _helpers_.

## Pistas

* No se necesita usar _sort_ para mantener el orden.
