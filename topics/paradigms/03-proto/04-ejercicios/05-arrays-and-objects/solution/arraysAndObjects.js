// -> Crea tres objetos: 'machine', 'robot' y 'vehicle'
// -> En la definición de `machine` incluye una propiedad `parts`, y dale un
//    array vacío como valor: `[]`
// -> En la definición de `machine` incluye una propiedad 'capabilities', y
//    asígnale un objeto vacío: `{}`
import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => assert.deepEqual(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');

const machine = {
	parts: [],
	capabilities: {}
};

const vehicle = {};
const robot = {};

// -> Hagamos que el prototipo de tanto `robot` como `vehicle` sea `machine`
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> ¿Qué es `robot.parts`?
claim(robot.parts, []);

// -> ¿Qué es `vehicle.parts`?
claim(vehicle.parts, []);

// -> ¿Qué es `robot.capabilities`?
claim(robot.capabilities, {});

// -> ¿Qué es `vehicle.capabilities`?
claim(vehicle.capabilities, {});

robot.parts.push('core');

// -> ¿Qué es `robot.parts` ahora?
claim(robot.parts, ['core']);

// -> ¿Qué es `vehicle.parts` ahora?
claim(vehicle.parts, ['core']);

// -> Démosle una habilidad al vehículo...
vehicle.capabilities.fly = true;

claim(robot.capabilities, {fly: true});
claim(vehicle.capabilities, {fly: true});

export default {
	machine,
	vehicle,
	robot
}
