---
env: cjs
---

# Object composition

## Tarea

Tómate el tiempo para considerar este snippet. Las funciones `pooper`, `barker`,
`driver` y `killer` crean un objeto cada una. Después, creamos `dog`, `robot` y
`murderRobot`, que simplemente "componen" los objetos creados por las funciones
anteriores.

```js
const pooper = state => ({
  poop: () => console.log('💩')
});

const barker = state => ({
  bark: () => console.log('woof! my name is ' + state.name)
});

const driver = state => ({
  drive: () => state.position = state.position + state.speed
});

const killer = state => ({
  kill: () => console.log('time to kill!')
});

const dog = name => {
  const state = {
    name: name,
    speed: 100,
    position: 0
  };

  return Object.assign({}, pooper(state), barker(state));
};

const robot = name => {
  const state = {
    name: name,
    speed: 100,
    position: 0
  };

  return Object.assign({}, driver(state));
};
```

Siguiendo este patrón, implementa:

* `murderRobot` (con lo mismo que `robot` pero además de `killer`)
* `murderDog` (con todo lo que tiene `dog` además de `killer`)
* `murderRobotDog`, que debe combinar la capacidad de ladrar (bark) con la
  funcionalidad de `driver` y `killer`.
