import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Page, { defaultPageProps } from './Page';
require('./styles.css');

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(Page, defaultPageProps);

if (module.hot) {
  module.hot.accept('./Page', () => {
    const newApp = require('./Page').default;
    render(newApp);
  });
}
