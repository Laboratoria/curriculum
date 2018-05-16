import React from 'react';

import Page from './Page';
import Header from './Header';
import MainSection from './MainSection';
import Aside from './Aside';

const Main = () => {
  const headerTitulo = 'Getting Started';
  const headerDescripcion = 'Descripcion';
  const mainSectionTitulo = 'Main Section';
  const mainSectionArticles = [
    { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
    { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
    { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
  ];
  const asideTitulo = 'Links';
  const asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ];

  return (
    <Page>
      <Header titulo={headerTitulo} descripcion={headerDescripcion} />
      <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  );
};

export default Main;
