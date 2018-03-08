import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';
import Header from './Header';
import FilterableProductTable from '../FilterableProductTable/components';
import Aside from './Aside';

const Main = ({ products, asideTitulo, asideLinks }) => {
  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  );
};

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Main;
