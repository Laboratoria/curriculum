import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Page from './lib/page';
import Header from './lib/header';
import MainSection from './lib/main-section';
import FilterableProductTable from './lib/FilterableProductTable';
import Aside from './lib/aside';

require("./styles.css");

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

const Main = () => {
  const asideTitulo = 'Links'
  const asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  return (
    <Page>
      <FilterableProductTable />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}

render(Main);

if (module.hot) {
  module.hot.accept('./lib/page', () => {
    const newApp = require('./lib/page').default;
    render(newApp);
  });
}
