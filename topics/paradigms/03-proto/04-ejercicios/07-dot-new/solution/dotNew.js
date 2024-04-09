// -> Define un objeto llamado `Robot`
// -> Define un método llamado `new` en `Robot`
// -> Cuando llamamos a `Robot.new()` debe retornar un objeto nuevo con Robot
//    como prototipo
//    Por ejemplo: const robby = Robot.new();
//    `Robot` debe ser el prototipo de `robby`

const Robot = {
	new: function () {
		return Object.create(this);
	}
}

// ------------------------------------------------
// Exports  para verificación, no modificar
export { Robot };
