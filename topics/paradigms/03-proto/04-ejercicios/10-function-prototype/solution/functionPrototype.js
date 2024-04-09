// -> Define un constructor 'Robot'
// -> Crea dos instancias de Robot: 'robby' y 'cranky'
// -> Tanto robby como cranky deben tener 'parts' y 'capabilities', éstas deben
//    ser arrays vacíos al inicio
function Robot() {
	this.parts = [];
}

Robot.prototype.capabilities = [];

const robby = new Robot();
const cranky = new Robot();

// -> ¿Cúal es el resultado de robby.parts?
claim(robby.parts, []);
// -> ¿Cúal es el resultado de cranky.parts?
claim(cranky.parts, []);
// -> ¿Cúal es el resultado de robby.capabilities?
claim(robby.capabilities, []);
// -> ¿Cúal es el resultado de cranky.capabilities?
claim(cranky.capabilities, []);

// -> Añade 'core' a robby.parts, cranky.parts debería tener todavía un arreglo vacío
// -> Añade 'fly' a robby.capabilities, después de esto cranky.capabilities debe
//    también tener 'fly' sin añadírselo directamente, así que esta propiedad
//    debe ser compartida.
robby.parts.push('core');
robby.capabilities.push('fly');

// -> ¿Cúal es el resultado de robby.parts?
claim(robby.parts, ['core']);
// -> ¿Cúal es el resultado de cranky.parts?
claim(cranky.parts, []);
// -> ¿Cúal es el resultado de robby.capabilities?
claim(robby.capabilities, ['fly']);
// -> ¿Cúal es el resultado de cranky.capabilities?
claim(cranky.capabilities, ['fly']);

// ------------------------------------------------
// Exports para verificación, no modificar
export {
	Robot,
	robby,
	cranky
}
