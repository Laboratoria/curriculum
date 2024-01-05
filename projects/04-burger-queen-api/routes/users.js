const bcrypt = require('bcrypt');

const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');

const {
  getUsers,
} = require('../controller/users');

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

  // TODO: Create admin user
  // First, check if adminUser already exists in the database
  // If it doesn't exist, it needs to be saved

  next();
};

/*
 * Español:
 *
 * Diagrama de flujo de una aplicación y petición en node - express :
 *
 * request  -> middleware1 -> middleware2 -> route
 *                                             |
 * response <- middleware4 <- middleware3   <---
 *
 * la gracia es que la petición va pasando por cada una de las funciones
 * intermedias o "middlewares" hasta llegar a la función de la ruta, luego esa
 * función genera la respuesta y esta pasa nuevamente por otras funciones
 * intermedias hasta responder finalmente a la usuaria.
 *
 * Un ejemplo de middleware podría ser una función que verifique que una usuaria
 * está realmente registrado en la aplicación y que tiene permisos para usar la
 * ruta. O también un middleware de traducción, que cambie la respuesta
 * dependiendo del idioma de la usuaria.
 *
 * Es por lo anterior que siempre veremos los argumentos request, response y
 * next en nuestros middlewares y rutas. Cada una de estas funciones tendrá
 * la oportunidad de acceder a la consulta (request) y hacerse cargo de enviar
 * una respuesta (rompiendo la cadena), o delegar la consulta a la siguiente
 * función en la cadena (invocando next). De esta forma, la petición (request)
 * va pasando a través de las funciones, así como también la respuesta
 * (response).
 */

/*
 * Português Brasileiro:
 *
 * Fluxo de uma aplicação e requisição em node - express:
 *
 * request  -> middleware1 -> middleware2 -> rota
 *                                             |
 * response <- middleware4 <- middleware3   <---
 *
 * A essência é que a requisição passa por cada uma das funções intermediárias
 * ou "middlewares" até chegar à função da rota; em seguida, essa função gera a
 * resposta, que passa novamente por outras funções intermediárias até finalmente
 * responder à usuária.
 *
 * Um exemplo de middleware poderia ser uma função que verifica se uma usuária
 * está realmente registrada na aplicação e tem permissões para usar a rota. Ou
 * também um middleware de tradução, que altera a resposta dependendo do idioma
 * da usuária.
 *
 * É por isso que sempre veremos os argumentos request, response e next em nossos
 * middlewares e rotas. Cada uma dessas funções terá a oportunidade de acessar a
 * requisição (request) e cuidar de enviar uma resposta (quebrando a cadeia) ou
 * delegar a requisição para a próxima função na cadeia (invocando next). Dessa
 * forma, a requisição (request) passa através das funções, assim como a resposta
 * (response).
 */

/** @module users */
module.exports = (app, next) => {
  /**
   * @name GET /users
   * @description List users
   * @path {GET} /users
   * @query {String} [_page=1] Page of the list to consult
   * @query {String} [_limit=10] Number of elements per page
   * @auth Requires authentication `token` and the user to be an **admin**
   * @response {Array} users
   * @response {String} users[].id
   * @response {Object} users[].email
   * @response {String} users[].role. Role: 'admin' or 'waiter' or 'chef'
   * @code {200} if authentication is correct
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin
   */
  app.get('/users', requireAdmin, getUsers);

  /**
   * @name GET /users/:uid
   * @description Get information about a user
   * @path {GET} /users/:uid
   * @params {String} :uid User's `id` or `email` to query
   * @auth Requires authentication `token` and the user to be an **admin** or the user being queried
   * @response {Object} user
   * @response {String} user.id
   * @response {Object} user.email
   * @response {String} user.role. Role: 'admin' or 'waiter' or 'chef'
   * @code {200} if authentication is correct
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin or the same user
   * @code {404} if the requested user does not exist
   */
  app.get('/users/:uid', requireAuth, (req, resp) => {
  });

  /**
   * @name POST /users
   * @description Create a user
   * @path {POST} /users
   * @body {String} email Email
   * @body {String} password Password
   * @body {Object} [roles]
   * @body {Boolean} [roles.admin]
   * @auth Requires authentication `token` and the user to be an **admin**
   * @response {Object} user
   * @response {String} user.id
   * @response {Object} user.email
   * @response {String} user.role. Role: 'admin' or 'waiter' or 'chef'
   * @code {200} if authentication is correct
   * @code {400} if `email` or `password` are not provided or both
   * @code {401} if there is no authentication header
   * @code {403} if a user with that `email` already exists
   */
  app.post('/users', requireAdmin, (req, resp, next) => {
    // TODO: Implement the route to add new users
  });

  /**
   * @name PUT /users/:uid
   * @description Modify a user
   * @params {String} :uid User's `id` or `email` to modify
   * @path {PUT} /users/:uid
   * @body {String} email Email
   * @body {String} password Password
   * @body {Object} [roles]
   * @body {Boolean} [roles.admin]
   * @auth Requires authentication `token` and the user to be an **admin** or the user being modified
   * @response {Object} user
   * @response {String} user.id
   * @response {Object} user.email
   * @response {String} user.role. Role: 'admin' or 'waiter' or 'chef'
   * @code {200} if authentication is correct
   * @code {400} if `email` or `password` are not provided or both
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin or the same user
   * @code {403} if a non-admin user tries to modify their `roles`
   * @code {404} if the requested user does not exist
   */
  app.put('/users/:uid', requireAuth, (req, resp, next) => {
  });

  /**
   * @name DELETE /users/:uid
   * @description Delete a user
   * @params {String} :uid User's `id` or `email` to delete
   * @path {DELETE} /users/:uid
   * @auth Requires authentication `token` and the user to be an **admin** or the user being deleted
   * @response {Object} user
   * @response {String} user.id
   * @response {Object} user.email
   * @response {String} user.role. Role: 'admin' or 'waiter' or 'chef'
   * @code {200} if authentication is correct
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin or the same user
   * @code {404} if the requested user does not exist
   */
  app.delete('/users/:uid', requireAuth, (req, resp, next) => {
  });

  initAdminUser(app, next);
};
