const machine = {}

const robot = Object.create(machine);
const robby = Object.create(robot);

// -> ¿Cuál es el resultado de `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> ¿Cuál es el resultado de `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> ¿Qué objeto es el prototipo directo de `robby`?
claim(Object.getPrototypeOf(robby), robot);

// ------------------------------------------------
export default {
	machine,
	robot,
	robby
}
