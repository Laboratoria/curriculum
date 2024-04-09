const machine = { motors: null };
const vehicle = {};
const robot = {};

// -> Let's make machine the prototype of robot and vehicle
vehicle.__proto__ = machine;
robot.__proto__ = machine;

claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

robot.motors = 4;

claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);

export default {
  machine,
  vehicle,
  robot,
};
