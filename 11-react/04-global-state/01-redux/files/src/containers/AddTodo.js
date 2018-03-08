import React from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoActionCreator } from '../actions'
import AddTodoComponent from '../components/AddTodoInput'

const AddTodo = connect(
  null,
  dispatch => ({
    addTodo: todo => dispatch(addTodoActionCreator(todo))
  })
)(AddTodoComponent)

export default AddTodo
