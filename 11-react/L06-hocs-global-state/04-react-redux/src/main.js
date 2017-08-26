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
  
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
  ];

  return (
    <Page>
      <FilterableProductTable products={PRODUCTS} />
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
