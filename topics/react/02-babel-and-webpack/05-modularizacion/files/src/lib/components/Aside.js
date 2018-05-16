import React from 'react';

// ASIDE
const AsideLink = ({ href, texto }) => {
  return (
    <li>
      <a href={href}>{texto}</a>
    </li>
  );
};

const Aside = ({ links, titulo }) => {
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

export default Aside;
