import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

//props
const TodoList = (todos, onToggle,onDelete ) => {
  
    return (
    <ul>
        {todos.map(
            (todo) => 
                //esto es para llevar la info de cada uno de los todos
                <TodoItem key={todo.id}
                todo = {todo}
                onToggle={() => onToggle(todo.id)}
                onDelete={() => onDelete(todo.id)}
                />
                
            )}

    

    </ul>

  )
}

export default TodoList
