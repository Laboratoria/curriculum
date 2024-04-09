// -> Declaremos tres objetos: 'machine' 'vehicle' y 'robot'
const machine = {};
const vehicle = {};
const robot = {};

// -> Haz que `machine` sea el prototipo de `vehicle`
// -> Haz que `machine` sea el prototipo de `robot`
__

// -> Qué es `vehicle.motors`?
claim(vehicle.motors, __);

// -> Qué es `robot.motors`?
claim(robot.motors, __);

// -> Define una propiedad `motors` en `machine` y asígnale el valor `4`
__

// -> Qué es `vehicle.motors` ahora?
claim(vehicle.motors, __);

// -> Qué es `robot.motors`?
claim(robot.motors, __);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
export default {
  machine,
  vehicle,
  robot,
};
