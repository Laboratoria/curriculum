const User = require('../models/User');
const {
  requireAuth,
  requireAdmin,
  isAuthenticated,
  isAdmin,
} = require('../middleware/auth');
const {
  createPrivatePropsFilter,
  getPaginationParamsFromRequest,
  buildLinkHeader,
} = require('../lib/util');


const omitPrivateProps = createPrivatePropsFilter(['password']);


const initAdminUser = (app, next) => {
  const { adminEmail, adminPassword } = app.get('config');
  if (!adminEmail || !adminPassword) {
    return next();
  }

  const adminUser = {
    email: adminEmail,
    password: adminPassword,
    roles: { admin: true },
  };

  User.findOne({ email: adminEmail })
    .then(user => (
      (!user)
        ? User.create(adminUser, next)
        : user.save(adminUser, next)
    ))
    .catch(next);
};


module.exports = (app, next) => {
  app.param('uid', (req, res, next, uid) => {
    const { auth } = req;

    if (!isAuthenticated(req)) {
      return next(401);
    }

    if (auth.user._id === uid || auth.user.email === uid) {
      Object.assign(req, { user: auth.user });
      return next();
    }

    if (!isAdmin(req)) {
      return next(403);
    }

    return User.findByIdOrEmail(uid)
      .then((doc) => {
        if (!doc) {
          return next(404);
        }
        Object.assign(req, { user: doc });
        next();
      })
      .catch(next);
  });


  app.get('/users', requireAdmin, (req, resp) => {
    User.paginate({}, getPaginationParamsFromRequest(req), (err, results) => {
      if (err) {
        return next(err);
      }
      const linkHeader = buildLinkHeader(req, results);
      if (linkHeader) {
        resp.header({ Link: linkHeader });
      }
      resp.json(results.docs.map(omitPrivateProps));
    });
  });


  app.get('/users/:uid', requireAuth, (req, resp) => resp.json(
    omitPrivateProps(req.user),
  ));


  app.post('/users', (req, resp, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(400);
    }

    User.create({ email, password })
      .then(doc => resp.json(omitPrivateProps(doc)))
      .catch(err => (
        (/duplicate key/.test(err.message))
          ? next(403)
          : next(500)
      ));
  });


  app.put('/users/:uid', requireAuth, (req, resp, next) => {
    if (!Object.keys(req.body || {}).length) {
      return next(400);
    }

    if (req.body.roles && !isAdmin(req)) {
      return next(403);
    }

    Object.assign(req.user, req.body);

    req.user.save()
      .then(doc => resp.json(omitPrivateProps(doc)))
      .catch(next);
  });


  app.delete('/users/:uid', requireAuth, (req, resp, next) => {
    req.user.remove()
      .then(doc => resp.json(omitPrivateProps(doc)))
      .catch(next);
  });


  initAdminUser(app, next);
};
