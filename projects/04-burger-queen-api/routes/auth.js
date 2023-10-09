const jwt = require('jsonwebtoken');
const config = require('../config');

const { secret } = config;

/** @module auth */
module.exports = (app, nextMain) => {
  /**
   * @name /login
   * @description Creates an authentication token.
   * @path {POST} /login
   * @body {String} email Email
   * @body {String} password Password
   * @response {Object} resp
   * @response {Object} resp
   * @response {String} resp.accessToken Token to be used for subsequent requests
   * @response {Object} resp.user User information
   * @code {200} if authentication is successful
   * @code {400} if `email` or `password` are not provided, or both
   * @code {400} if `email` or `password` are invalid
   * @auth No authentication required
   */
  app.post('/login', (req, resp, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(400);
    }

    // TODO: Authenticate the user
    // It is necessary to confirm if the email and password
    // match a user in the database
    // If they match, send an access token created with JWT

    next();
  });

  return nextMain();
};
