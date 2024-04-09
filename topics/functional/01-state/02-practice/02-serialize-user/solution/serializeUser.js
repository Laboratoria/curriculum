const serializeUser = user => JSON.stringify(Object.assign({}, user, {
  name: (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name,
  date: user.date.toJSON(),
}));

export default serializeUser;
