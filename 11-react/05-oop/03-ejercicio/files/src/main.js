import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import CuentaRegresiva from './lib/cuenta-regresiva';
require('./styles.css');

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(CuentaRegresiva);

if (module.hot) {
  module.hot.accept('./lib/cuenta-regresiva', () => {
    const newApp = require('./lib/cuenta-regresiva').default;
    render(newApp);
  });
}
