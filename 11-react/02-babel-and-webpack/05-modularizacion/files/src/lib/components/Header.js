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

export default Header;
