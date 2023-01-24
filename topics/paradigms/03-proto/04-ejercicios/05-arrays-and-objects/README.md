---
env: cjs
---

# Arreglos y objetos en prototipos

Los arreglos y objetos podrían no comportarse como esperas.

Veamos qué pasa cuando modificamos un arreglo:

```js
const alien = {
  skills: ['morph']
};

const zorg = {};
zorg.__proto__ = alien;

zorg.skills.push('clone');

console.log(zorg.skills); //=> morph, clone
// es lo que esperabamos

console.log(alien.skills); //=> morph, clone
// quizás no esperábamos esto, pero funciona así porque hemos modificado el
// arreglo del prototipo.
```

Cuando modificas un arreglo u objeto, el cambio se hace directamente sobre el objeto.

## Desafío

El 'boilerplate' tiene las instrucciones y los
lugares donde añadir tu código debidamente señalados.
