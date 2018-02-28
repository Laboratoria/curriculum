import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './lib/store'
import Main from './lib/Main';

require('./styles.css');

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./lib/Main', () => {
    const newApp = require('./lib/Main').default;
    render(newApp);
  });
}
