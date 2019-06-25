const bcrypt = require('bcrypt');

const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');


const initAdminUser = (app, next) => {
  const { adminEmail, adminPassword } = app.get('config');
  if (!adminEmail || !adminPassword) {
    return next();
  }

  const adminUser = {
    email: adminEmail,
    password: bcrypt.hashSync(adminPassword, 10),
    roles: { admin: true },
  };

  // TODO: crear usuarix admin
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

/** @module users */
module.exports = (app, next) => {
  /**
   * @name GET /users
   * @description Lista usuarios
   * @path {GET} /users
   * @query {String} [page=1] Página del listado a consultar
   * @query {String} [limit=10] Cantitad de elementos por página
   * @auth Requiere `token` de autenticación y que el usuario sea **admin**
   * @response {Array} users
   * @response {String} users[]._id
   * @response {Object} users[].email
   * @response {Object} users[].roles
   * @response {Boolean} users[].roles.admin
   * @code {200} si la autenticación es correcta
   * @code {401} si no hay cabecera de autenticación
   * @code {403} si no es ni admin
   */
  app.get('/users', requireAdmin, (req, resp) => {
  });

  /**
   * @name GET /users/:uid
   * @description Obtiene información de un usuario
   * @path {GET} /users/:uid
   * @params {String} :uid `id` o `email` del usuario a consultar
   * @auth Requiere `token` de autenticación y que el usuario sea **admin** o el usuario a consultar
   * @response {Object} user
   * @response {String} user._id
   * @response {Object} user.email
   * @response {Object} user.roles
   * @response {Boolean} user.roles.admin
   * @code {200} si la autenticación es correcta
   * @code {401} si no hay cabecera de autenticación
   * @code {403} si no es ni admin o el mismo usuario
   * @code {404} si el usuario solicitado no existe
   */
  app.get('/users/:uid', requireAuth, (req, resp) => {
  });

  /**
   * @name POST /users
   * @description Crea un usuario
   * @path {POST} /users
   * @body {String} email Correo
   * @body {String} password Contraseña
   * @auth Requiere `token` de autenticación y que el usuario sea **admin**
   * @response {Array} users
   * @response {String} users[]._id
   * @response {Object} users[].email
   * @response {Object} users[].roles
   * @response {Boolean} users[].roles.admin
   * @code {200} si la autenticación es correcta
   * @code {400} si no se proveen `email` o `password` o ninguno de los dos
   * @code {401} si no hay cabecera de autenticación
   * @code {403} si ya existe usuario con ese `email`
   */
  app.post('/users', requireAdmin, (req, resp, next) => {
  });

  /**
   * @name PUT /users
   * @description Modifica un usuario
   * @params {String} :uid `id` o `email` del usuario a modificar
   * @path {PUT} /users
   * @body {String} email Correo
   * @body {String} password Contraseña
   * @auth Requiere `token` de autenticación y que el usuario sea **admin** o el usuario a modificar
   * @response {Object} user
   * @response {String} user._id
   * @response {Object} user.email
   * @response {Object} user.roles
   * @response {Boolean} user.roles.admin
   * @code {200} si la autenticación es correcta
   * @code {400} si no se proveen `email` o `password` o ninguno de los dos
   * @code {401} si no hay cabecera de autenticación
   * @code {403} si no es ni admin o el mismo usuario
   * @code {403} un usuario no admin intenta de modificar sus `roles`
   * @code {404} si el usuario solicitado no existe
   */
  app.put('/users/:uid', requireAuth, (req, resp, next) => {
  });

  /**
   * @name DELETE /users
   * @description Elimina un usuario
   * @params {String} :uid `id` o `email` del usuario a modificar
   * @path {DELETE} /users
   * @auth Requiere `token` de autenticación y que el usuario sea **admin** o el usuario a eliminar
   * @response {Object} user
   * @response {String} user._id
   * @response {Object} user.email
   * @response {Object} user.roles
   * @response {Boolean} user.roles.admin
   * @code {200} si la autenticación es correcta
   * @code {401} si no hay cabecera de autenticación
   * @code {403} si no es ni admin o el mismo usuario
   * @code {404} si el usuario solicitado no existe
   */
  app.delete('/users/:uid', requireAuth, (req, resp, next) => {
  });

  initAdminUser(app, next);
};
