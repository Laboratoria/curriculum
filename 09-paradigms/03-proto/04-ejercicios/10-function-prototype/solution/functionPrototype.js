function Robot() {
	this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

claim(robby.parts, []);
claim(cranky.parts, []);
claim(robby.capabilities, []);
claim(cranky.capabilities, []);

robby.parts.push('core');
robby.capabilities.push('fly');

claim(robby.parts, ['core']);
claim(cranky.parts, []);
claim(robby.capabilities, ['fly']);
claim(cranky.capabilities, ['fly']);

module.exports = {
	Robot,
	robby,
	cranky
}
