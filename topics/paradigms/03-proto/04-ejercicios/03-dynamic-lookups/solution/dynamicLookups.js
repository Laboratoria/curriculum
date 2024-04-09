const machine = {};
const vehicle = {};
const robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

// What is vehicle.motors
claim(vehicle.motors, undefined);
// What is robot.motors?
claim(robot.motors, undefined);

machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, 4);

// -> What is `robot.motors`?
claim(robot.motors, 4);

// ------------------------------------------------
export default {
  machine,
  vehicle,
  robot,
};
