import React from 'react';

// HEADER
const Header = ({ titulo, descripcion }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </header>
  );
};

// MAIN SECTION
const Article = ({ titulo, descripcion }) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <hr />
    </article>
  );
};

const MainSection = ({ titulo, articles }) => {
  const style = {
    width: '70%',
    float: 'left'
  };

  const children = articles.map(props => {
    return <Article key={props.titulo} {...props} />;
  });

  return (
    <section style={style}>
      <h2>{titulo}</h2>
      {children}
    </section>
  );
};

// ASIDE
const AsideLink = ({ href, texto }) => {
  return (
    <li>
      <a href={href}>{texto}</a>
    </li>
  );
};

const  Aside = ({ links, titulo }) => {
  const style = {
    width: '25%',
    float: 'right'
  };

  const children = links.map(props => {
    return <AsideLink key={props.texto} {...props} />;
  });

  return (
    <section style={style}>
      <h4>{titulo}</h4>
      <ul>
        {children}
      </ul>
    </section>
  );
};

// Integramos todo en un PAGE
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
  );
};

export const defaultPageProps = {
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

export default Page;
