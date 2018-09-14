import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './lib/components/Main';

require('./styles.css');

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./lib/components/Main', () => {
    const newApp = require('./lib/components/Main').default;
    render(newApp);
  });
}
