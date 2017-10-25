// -> Define un constructor 'Robot'
// -> Crea dos instancias de Robot: 'robby' y 'cranky'
// -> Tanto robby como cranky deben tener 'parts' y 'capabilities', éstas deben
//    ser arrays vacíos al inicio
function Robot() {
	this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

// -> Haz claim del resultado de robby.parts
claim(robby.parts, []);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, []);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, []);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, []);

// -> Añade 'core' a robby.parts, cranky.parts debería tener todavía un arreglo vacío
// -> Añade 'fly' a robby.capabilities, después de esto cranky.capabilities debe
//    también tener 'fly' sin añadírselo directamente, así que esta propiedad
//    debe ser compartida.
robby.parts.push('core');
robby.capabilities.push('fly');

// -> Haz claim del resultado de robby.parts
claim(robby.parts, ['core']);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, []);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, ['fly']);

// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
	Robot,
	robby,
	cranky
}
