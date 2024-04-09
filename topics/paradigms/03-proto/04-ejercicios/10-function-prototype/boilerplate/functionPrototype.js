// -> Define un constructor 'Robot'
// -> Crea dos instancias de Robot: 'robby' y 'cranky'
// -> Tanto robby como cranky deben tener 'parts' y 'capabilities', éstas deben
//    ser arrays vacíos al inicio

__

// -> ¿Cúal es el resultado de robby.parts?
claim(robby.parts, __);
// -> ¿Cúal es el resultado de cranky.parts?
claim(cranky.parts, __);
// -> ¿Cúal es el resultado de robby.capabilities?
claim(robby.capabilities, __);
// -> ¿Cúal es el resultado de cranky.capabilities?
claim(cranky.capabilities, __);

// -> Añade 'core' a robby.parts, cranky.parts debería tener todavía un arreglo vacío
// -> Añade 'fly' a robby.capabilities, después de esto cranky.capabilities debe
//    también tener 'fly' sin añadírselo directamente, así que esta propiedad
//    debe ser compartida.

__

// -> ¿Cúal es el resultado de robby.parts?
claim(robby.parts, __);
// -> ¿Cúal es el resultado de cranky.parts?
claim(cranky.parts, __);
// -> ¿Cúal es el resultado de robby.capabilities?
claim(robby.capabilities, __);
// -> ¿Cúal es el resultado de cranky.capabilities?
claim(cranky.capabilities, __);


// ------------------------------------------------
// Exports para verificación, no modificar
export {
  Robot,
  robby,
  cranky
}
