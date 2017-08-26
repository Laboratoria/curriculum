import React from 'react'
import PropTypes from 'prop-types'

// ASIDE
const AsideLink = ({ href, texto }) => {
  return (
    <li>
      <a href={href}>{texto}</a>
    </li>
  )
}

AsideLink.propTypes = {
  href: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
}

const  Aside = ({ links, titulo }) => {
  const style = {
    width: '25%',
    float: 'right'
  }

  const children = links.map(props => {
    return <AsideLink key={props.texto} {...props} />
  })
  
  return (
    <section style={style}>
      <h4>{titulo}</h4>
      <ul>
        {children}
      </ul>
    </section>
  )
}

Aside.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
  })).isRequired,
  titulo: PropTypes.string.isRequired
}

export default Aside
