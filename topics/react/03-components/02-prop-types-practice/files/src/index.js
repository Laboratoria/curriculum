import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Page, { defaultPageProps } from './lib/components/Page';
require("./styles.css");

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
  module.hot.accept('./lib/components/Page', () => {
    const newApp = require('./lib/components/Page').default;
    render(newApp);
  });
}
