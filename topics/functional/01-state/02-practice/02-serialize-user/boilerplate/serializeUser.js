const serializeUser = user => {
	user.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
	user.date = user.date.toJSON();
	return JSON.stringify(user);
};

export default serializeUser;
