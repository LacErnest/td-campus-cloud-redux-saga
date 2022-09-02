import React from 'react'

//import PropTypes  from 'prop-types'

const  TodoItem = ({todo, deleteTodo}) => {
  return(
    <div>
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
    
  )
}

/* TodoItem.PropTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
} */


export default TodoItem