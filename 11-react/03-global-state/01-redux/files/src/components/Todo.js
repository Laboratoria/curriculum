import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onXClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      marginBottom: 5
    }}
  >
    <span onClick={onClick} style={{ width: 200, display: 'inline-grid' }}>{text}</span>
    <button
      onClick={e => {
        e.preventDefault()
        onXClick(e)
      }}
      style={{ marginLeft: 10 }}
    >
      <b>x</b>
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onXClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
