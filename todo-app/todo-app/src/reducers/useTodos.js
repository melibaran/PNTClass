import { useActionState, useEffect, useReducer } from "react"
import { todoReducer } from "../reducers/todoReducer"
import { KEY } from "../constants/constants"

//que me traiga todos los todos. Para NO perder la información
//usreducer: esyado inicial y funcion reductora 
export const useTodos = () => {
//quiero traerme la info. del localStorage
const [todos, dispatch] = useReducer(todoReducer, [])
    useEffect(() => {

        const stored = localStorage.getItem(KEY) //seria una constant
    }, [])

    //con esta data, si NO llega a haber dato, que me los setee
    if(!stored) {
        dispatch(
            {type: useActionState.SET, payload: JSON.stringify(stored)}
        )
    }

useEffect(() => {localStorage.setItem(KEY, JSON.stringify(todos))}, [todos])

return {todos, dispatch}

}