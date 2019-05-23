import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import * as actions from './actions'

const Todo = PropTypes.shape({
  title: PropTypes.string
})

export function TodoApp({ newTodo, todos, updateTodo, createTodo }) {
  const onChange = e => {
    updateTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()

    createTodo(newTodo)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={onChange} />
        <label htmlFor="new-todo">
          Create todo: <span id="new-todo">{newTodo}</span>
        </label>
      </form>
      <TodoList todos={todos} />
    </div>
  )
}

TodoApp.propTypes = {
  newTodo: PropTypes.string,
  todos: PropTypes.arrayOf(Todo).isRequired,
  updateTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
}

export default connect(
  state => state.todos.toJS(),
  actions
)(TodoApp)

