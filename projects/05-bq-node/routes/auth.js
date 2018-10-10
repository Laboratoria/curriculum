const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (app, next) => {
  const { secret } = app.get('config');

  /*
   * Ruta de autenticación usando email y password
   * Toda autenticación se hace a través de POST, ya que de esta forma nos 
   * aseguramos que la información de email y password vayan cifradas en el 
   * cuerpo de la petición (siempre y cuando usemos HTTPS con protocolos 
   * seguros).
   */
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
