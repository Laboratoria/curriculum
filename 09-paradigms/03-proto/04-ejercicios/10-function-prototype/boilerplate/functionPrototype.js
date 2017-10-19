// -> Define un constructor 'Robot'
// -> Crea dos instancias de Robot: 'robby' y 'cranky'
// -> Tanto robby como cranky deben tener 'parts' y 'capabilities', éstas deben
//    ser arrays vacíos al inicio

__

// -> Haz claim del resultado de robby.parts
claim(robby.parts, __);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, __);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, __);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, __);

// -> Añade 'core' a robby.parts, cranky.parts debería tener todavía un arreglo vacío
// -> Añade 'fly' a robby.capabilities, después de esto cranky.capabilities debe
//    también tener 'fly' sin añadírselo directamente, así que esta propiedad
//    debe ser compartida.

__

// -> Haz claim del resultado de robby.parts
claim(robby.parts, __);
// -> Haz claim del resultado de cranky.parts
claim(cranky.parts, __);
// -> Haz claim del resultado de robby.capabilities
claim(robby.capabilities, __);
// -> Haz claim del resultado de cranky.capabilities
claim(cranky.capabilities, __);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot,
  robby,
  cranky
}
