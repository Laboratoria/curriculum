import React from 'react';
import PropTypes from 'prop-types';

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

Article.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
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

MainSection.propTypes = {
  titulo: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
  })).isRequired
};

export default MainSection;
