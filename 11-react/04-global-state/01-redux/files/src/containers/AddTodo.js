import React from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoActionCreator } from '../actions'

let AddTodo = ({ addTodo }) => {
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
          Agregar Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect(
  null,
  dispatch => ({
    addTodo: todo => dispatch(addTodoActionCreator(todo))
  })
)(AddTodo)

export default AddTodo
