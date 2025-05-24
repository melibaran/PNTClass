import React from 'react'
import { useState } from 'react';

const TodoInput = ({onAdd}) =>{
    useState[text, setText] = useState("")
    const inputRef = useRef(null);

    const handleAdd = () => {
        if(!text.trim()) return
        const todo = {
            id: new Date().getMilliseconds(),
            text,
            completed: false //siempre se pone en false
        }

        console.log(todo);
        onAdd(todo);
        setText("");
        inputRef.current?.focus(); 
        
    }

    //para darle el accion a los botones:
    const handleKeyDown = e => {
        if(e.key === 'Enter'){handleAdd()};
    }

  return (
    <div>
      <input 
      ref={inputRef} 
      value={text}
        onChange={e => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder='...ingrese tarea' />
   <button onClick={handleAdd}>Agregar Todo</button>
   {/* cada vez que aprete el boton, que haga la agregacion */}
    </div>
  )
}

export default TodoInput