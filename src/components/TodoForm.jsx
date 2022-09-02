import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { SET_TODO_TITLE_REQUESTED, CREATE_TODO_REQUESTED } from '../redux/actions/todo-action'

const TodoForm = ({title, setTodoTitle, createTodo}) => {


  const onChange = (e) => {
    setTodoTitle(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createTodo(title)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      type="text"
      placeholder="Que voulez-vous faire ?"
      onChange={onChange}
      value={title}
      />
      <button type='submit'>Enregistrer</button>
    </form>
  )
}

// TodoForm.PropTypes = {
//   title: PropTypes.string,
//   setTodoTitle: PropTypes.func.isRequired,
//   createTodo: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => ({
  title: state.todo.title
})


const mapDispatchToProps = (dispatch) => ({
  setTodoTitle: (title) => dispatch({type: SET_TODO_TITLE_REQUESTED, payload: title}),
  createTodo: (title) => dispatch({type: CREATE_TODO_REQUESTED, payload:title})
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)