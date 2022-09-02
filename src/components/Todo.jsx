import React, {useEffect} from 'react'
import {connect} from 'react-redux'

//import PropTypes from 'prop-types'

import {
  GET_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED
} from '../redux/actions/todo-action'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todo = ({ todo: {loading, todos}, getTodos, deleteTodo}) => {

  useEffect(() => {
    getTodos()
  }, [])

  return(
    <div>
      <TodoForm />
      {loading && 'Chargement des todos...'}
      {todos && todos.map((todo, index) =>(
        <TodoItem todo={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}


/* Todo.PropTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
} */


const mapStateToProps = (state) => ({
  todo: state.todo
})

const mapDispatchToProps = (disptach) => ({
  getTodos: () => disptach({type: GET_TODOS_REQUESTED}),
  deleteTodo: (id) => disptach({type: DELETE_TODO_REQUESTED, payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)