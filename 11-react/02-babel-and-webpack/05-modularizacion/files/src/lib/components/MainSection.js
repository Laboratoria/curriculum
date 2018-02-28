import React from 'react';

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

export default MainSection;
