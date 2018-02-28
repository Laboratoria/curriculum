import React from 'react';
import PropTypes from 'prop-types';

// HEADER
const Header = ({ titulo, descripcion }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      {descripcion && <p>{descripcion}</p>}
    </header>
  )
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string
};

Header.defaultProps = {
  descripcion: ''
};

export default Header;
