// -> Crea tres objetos: 'machine', 'robot' y 'vehicle'
// -> En la definición de `machine` incluye una propiedad `parts`, y dale un
//    array vacío como valor: `[]`
// -> En la definición de `machine` incluye una propiedad 'capabilities', y
//    asígnale un objeto vacío: `{}`
__

// -> Hagamos que el prototipo de tanto `robot` como `vehicle` sea `machine`
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> ¿Qué es `robot.parts`?
claim(robot.parts, __);

// -> ¿Qué es `vehicle.parts`?
claim(vehicle.parts, __);

// -> ¿Qué es `robot.capabilities`?
claim(robot.capabilities, __);

// -> ¿Qué es `vehicle.capabilities`?
claim(vehicle.capabilities, __);

// -> Añadamos 'core' a `parts` del robot
robot.parts.push('core');

// -> ¿Qué es `robot.parts` ahora?
claim(robot.parts, __);

// -> ¿Qué es `vehicle.parts` ahora?
claim(vehicle.parts, __);

// -> Démosle una habilidad al vehículo...
vehicle.capabilities.fly = true;

// -> ¿Qué es `robot.capabilities` ahora?
claim(robot.capabilities, __);

// -> ¿Qué es `vehicle.capabilities` ahora?
claim(vehicle.capabilities, __);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
export default {
  machine: machine,
  vehicle: vehicle,
  robot:   robot
}
