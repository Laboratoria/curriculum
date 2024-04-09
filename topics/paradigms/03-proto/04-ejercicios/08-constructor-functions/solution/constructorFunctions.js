// -> Define un constructor 'Robot'
// -> Dentro de la función `Robot` asigna una propiedad 'motors' en 'this',
//    y dale el valor `2` a `motors`
// -> Crear una instancia de `Robot` llamada `robby`

function Robot() {
	this.motors = 2;
};

const robby = new Robot();

// -> ¿Cuál es el resultado de `(robby instanceof Robot)`?
claim(robby instanceof Robot, true);

// -> ¿Qué valor tiene `robby.motors`?
claim(robby.motors, 2);

// ------------------------------------------------
// Exports  para verificación, no modificar
export {
	Robot,
	robby
}
