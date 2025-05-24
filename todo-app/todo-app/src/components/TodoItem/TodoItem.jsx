import React from 'react'


const TodoItem = (todo, onToggle, onDelete) => {
  return (
    <li> 
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={onToggle}
        />
        <span style={{textDecoretaion: todo.completed?  'line-through' : 'none'}}>{todo.text}</span> 
        {/* si quiero que la info tenga una tarea de completado */}
    <button onClick={onDelete}> x </button>
    </li>
  )
}

export default TodoItem

