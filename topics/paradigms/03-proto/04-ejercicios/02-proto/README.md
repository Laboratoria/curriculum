# El objeto \_\_proto\_\_

* Environment: `js`

***

Para entender las cadenas de prototipos, no hay nada más simple que la propiedad
`__proto__`. Desgraciadamente `__proto__` todavía no es parte de la interfaz
estándar de JavaScript, y está depreciada. Así que probablemente no
deberías usarlo en el mundo real. No obstante, ayuda mucho a explicar los
prototipos de una forma sencilla.

```js
// creémos un objeto alien
const alien = {
  kind: 'alien'
};

// y un objeto robot
const robot = {
  kind: 'robot'
};

// y un objeto llamado 'zippy'
const zippy = {};

// asignamos alien como el prototipo de zippy
zippy.__proto__ = alien;

// zippy ahora está vinculado a alien
// 'hereda' las propiedades de alien
console.log(zippy.kind); //=> 'alien'

// asignamos robot como el prototipo de zippy
zippy.__proto__ = robot;

// y ahora zippy está vinculado a robot
console.log(zippy.kind); //=> 'robot'
```

Como puedes ver, la propiedad `__proto__` es bastante clara y fácil de usar.
Incluso si no deberíamos usar `__proto__` en producción, creo que estos ejemplos
nos dan una buena base para entender la modelo de objetos de JavaScript.

Puedes comprobar si un objeto es el prototipo de otro objeto así:

```js
console.log(alien.isPrototypeOf(zippy));
//=> true
```

## Desafío

En la pestaña de código encontrarás el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.
