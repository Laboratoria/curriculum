---
env: cjs
---

# serializeUser()

Imagínate que estás trabajando en una aplicación donde tienes una función
llamada `serializeUser()` que lo que hace es convertir un objeto de usuario en
un string en formato JSON. Además, hace un par de modificaciones (limita el
nombre a 10 caracteres y convierte la fecha en un string).

Veamos un ejemplo:

```js
const grace = {
  userId: 'xxx',
  name: 'Grace Hopper',
  country: 'us',
  date: new Date()
};

serializeUser(grace);
// => {"userId":"xxx","name":"Grace H...","country":"us","date":"2017-09-07T21:42:09.152Z"}
```

Ahora, el problema es que cuando implementaron la función `serializeUser()`, lo
hicieron de tal forma que la función muta el objeto que le mandamos como
argumento!

La implementación actual luce así:

```js
const serializeUser = user => {
  user.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
  user.date = user.date.toJSON();
  return JSON.stringify(user);
};

module.exports = serializeUser;
```

## Tarea

Refactoriza la función `serializeUser()` para convertirla en una función pura y
evitar que modifique el objeto que recibe como argumento.
