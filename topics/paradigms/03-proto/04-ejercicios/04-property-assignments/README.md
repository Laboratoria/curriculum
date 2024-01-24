---
tracks:
  - web-dev
env: cjs
---

# Asignación de propiedades

Qué pasa si actualizas una propiedad que ya existía en el prototipo? Veamos:

```js
const alien = {
  kind: 'alien'
};

const zippy = {};
zippy.__proto__ = alien;

zippy.kind = 'zippy';

console.log(zippy.kind); //=> 'zippy'
// zippy ahora tiene una propiedad `kind`

console.log(alien.kind); //=> 'alien'
// alien no se ha modificado
```

Las propiedades nuevas o actualizadas son asignadas al objeto, no a su
prototipo. Ten en cuenta que la propiedad `kind` ahora existe tanto en `alien`
como en `zippy`.

## Desafío

El 'boilerplate' tiene las instrucciones y los lugares donde añadir tu código
debidamente señalados.
