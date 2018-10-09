const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (app, next) => {
  const { secret } = app.get('config');

  app.post('/auth', (req, resp, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(400);
    }

    User.authenticate(email, password, (err, user) => {
      if (err) {
        return next(err);
      }
      resp.json({ token: jwt.sign({ uid: user._id }, secret) });
    });
  });

  return next();
};
