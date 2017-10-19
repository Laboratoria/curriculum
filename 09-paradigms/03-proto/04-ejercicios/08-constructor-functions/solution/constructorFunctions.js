function Robot() {
	this.motors = 2;
};

const robby = new Robot();

claim(robby instanceof Robot, true);
claim(robby.motors, 2);

module.exports = {
	Robot,
	robby
}
