const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = secret => (req, resp, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next();
  }

  const [type, token] = authorization.split(' ');

  if (type.toLowerCase() !== 'bearer') {
    return next();
  }

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      return next(403);
    }

    User.findById(decodedToken.uid, (err, user) => {
      if (err) {
        return next(500);
      }

      if (!user) {
        return next(404);
      }

      Object.assign(req, { auth: { token, decodedToken, user } });
      return next();
    });
  });
};


module.exports.isAuthenticated = req => (
  req.auth
  && req.auth.user
  && req.auth.user._id
);


module.exports.isAdmin = req => (
  module.exports.isAuthenticated(req)
  && req.auth.user.roles
  && req.auth.user.roles.admin
);


module.exports.requireAuth = (req, resp, next) => (
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : next()
);


module.exports.requireAdmin = (req, resp, next) => (
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : (!module.exports.isAdmin(req))
      ? next(403)
      : next()
);
