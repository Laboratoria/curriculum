import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <p>
    <b>Mostrar:</b>
    {" "}
    <FilterLink filter={ VisibilityFilters.SHOW_ALL }>
      Todos
    </FilterLink>
    {", "}
    <FilterLink filter={ VisibilityFilters.SHOW_ACTIVE }>
      Activos
    </FilterLink>
    {", "}
    <FilterLink filter={ VisibilityFilters.SHOW_COMPLETED }>
      Completos
    </FilterLink>
  </p>
)

export default Footer
