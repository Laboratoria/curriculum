import React from 'react'
import PropTypes from 'prop-types'

const AddTodoInput = ({ addTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input
          placeholder="Aprender redux"
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
  )
}

AddTodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodoInput
