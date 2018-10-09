const auth = require('./auth');
const users = require('./users');


const root = (app, next) => {
  const pkg = app.get('pkg');
  app.get('/', (req, res) => res.json({ name: pkg.name, version: pkg.version }));
  app.all('*', (req, resp, next) => next(404));
  return next();
};


const register = (app, routes, cb) => {
  if (!routes.length) {
    return cb();
  }

  routes[0](app, (err) => {
    if (err) {
      return cb(err);
    }
    return register(app, routes.slice(1), cb);
  });
};


module.exports = (app, next) => register(app, [
  auth,
  users,
  root,
], next);
