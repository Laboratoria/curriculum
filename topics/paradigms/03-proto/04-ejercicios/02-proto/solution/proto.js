const machine = {
  motors: 4
};

const robot = {
  friendly: true
};

const robby = {};

robot.__proto__ = machine;

robby.__proto__ = robot;

claim(robby.motors, 4);

claim(robby.friendly, true);

module.exports = {
  machine,
  robot,
  robby,
};
