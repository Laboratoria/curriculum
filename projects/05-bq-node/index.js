const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');


const { port, mongoUrl, secret } = config;
const app = express();


// Set up Mongo configuration
mongoose.connect(mongoUrl, { useNewUrlParser: true });


app.set('config', config);
app.set('pkg', pkg);


app.use(express.json());
app.use(authMiddleware(secret));


// register routes
routes(app, (err) => {
  if (err) {
    throw err;
  }

  // Add the error handler last.
  app.use(errorHandler);

  app.listen(port, () => console.log(`App listening on port ${port}`));
});
