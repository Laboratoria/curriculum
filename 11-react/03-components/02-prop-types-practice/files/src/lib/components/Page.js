import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import MainSection from './MainSection';
import Aside from './Aside';

const Page = ({
  headerTitulo,
  headerDescripcion,
  mainSectionTitulo,
  mainSectionArticles,
  asideTitulo,
  asideLinks
}) => {
  return (
    <div>
      <Header titulo={headerTitulo} descripcion={headerDescripcion} />
      <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </div>
  )
};

Page.propsTypes = {
  headerTitulo: PropTypes.string.isRequired,
  headerDescripcion: PropTypes.string,
  mainSectionTitulo: PropTypes.string.isRequired,
  mainSectionArticles: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
  })).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
  })).isRequired
};

const pageProps = {
  headerTitulo: 'Getting Started',
  headerDescripcion: 'Descripcion',
  mainSectionTitulo: 'Main Section',
  mainSectionArticles: [
    { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
    { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
    { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
  ],
  asideTitulo: 'Links',
  asideLinks: [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]
};

export const defaultPageProps = pageProps;
export default Page;
