---
env: cjs
---

# Constructores

Los __Constructores__ son probablemente la manera más común de implementar
cadenas de prototipos. La popularidad de los constructores se debe a que estos
eran la manera en la que originalmente se construían "tipos".
Algunos motores están altamente optimizados para usar constructores.

En JavaScript puedes crear un objeto de esta manera:

```js
function Alien() {
  this.age = 10;
}

const zippy = new Alien();
```

Cuando usamos funciones con la palabra clave `new`, se comportan de una manera
un tanto especial; crean objetos. El nuevo objeto creado se vincula a la función
a través del prototipo (más sobre esto más adelante). Así que en JavaScript, a
estos objetos creados por constructores los llamamos una __instancia__ de la
función.

```js
// zippy is an instance of Alien
console.log(zippy instanceof Alien); //=> true
```

## Desafío

El 'boilerplate' tiene las instrucciones y los
lugares donde añadir tu código debidamente señalados.
