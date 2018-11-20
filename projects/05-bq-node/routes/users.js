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


/*
 * Diagrama de flujo de una aplicación y petición en node - express : 
 * 
 * request  -> middleware1 -> middleware2 -> route
 *                                             | 
 * response <- middleware4 <- middleware3   <---
 * 
 * la gracia es que la petición va pasando por cada una de las funciones 
 * intermedias o "middlewares" hasta llegar a la función de la ruta, luego esa
 * función genera la respuesta y esta pasa nuevamente por otras funciones 
 * intermedias hasta responder finalmente al usuario.
 * 
 * Un ejemplo de middleware podría ser una función que verifique que un usuario 
 * está realmente registrado en la aplicación y que tiene permisos para usar la
 * ruta. O también un middleware de traducción, que cambie la respuesta 
 * dependiendo del idioma del usuario.
 * 
 * Es por lo anterior que siempre veremos los argumentos request, response y
 * next en nuestros middlewares y rutas. Cada una de estas funciones tendrá
 * la oportunidad de acceder a la consulta (request) y hacerse cargo de enviar
 * una respuesta (rompiendo la cadena), o delegar la consulta a la siguiente
 * función en la cadena (invocando next). De esta forma, la petición (request)
 * va pasando a través de las funciones, así como también la respuesta
 * (response).
 */


module.exports = (app, next) => {
  /*
   * Cuando la ruta llamada tenga entre sus parámetros uid, ejecutará la función
   * que cargará el usuario desde la base de datos, dejándo disponible esa 
   * Información para las rutas que están acá.
   */
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
