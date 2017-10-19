const machine = {}

const robot = Object.create(machine);
const robby = Object.create(robot);

// -> What is the result of `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> What is the result of `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Which object is the direct prototype of robby?
claim(Object.getPrototypeOf(robby), robot);

// ------------------------------------------------
module.exports = {
	machine,
	robot,
	robby
}
