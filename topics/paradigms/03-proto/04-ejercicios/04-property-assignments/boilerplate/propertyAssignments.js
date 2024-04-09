// -> Define tres objetos: 'machine', 'robot' y 'vehicle'
//    En la definición de `machine` añade la propiedad `motors` y asígnale null.
__

// -> Hacemos que `machine` sea el prototipo de `robot` y `vehicle`
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Qué son `machine.motors`, `robot.motors` y `vehicle.motors`?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> Asigna `4` a `robot.motors`.
__

// -> ¿Qué son `machine.motors`, `robot.motors` y `vehicle.motors` ahora?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
export default {
  machine,
  vehicle,
  robot,
};
