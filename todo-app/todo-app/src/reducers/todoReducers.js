//FUNCION REDUCTORA:
import { actions } from "../actions/todoActions";
export const todoReducer = (state, action) => {
    //state: estado que se van acumulando
    //action: lo que vaa hacer (setear, eliminar, etc.)

    switch(action.type){
            case actions.ADD:
                return [...state, action.payload]
    
            case actions.TOGGLE:
                return state.map(
                    todo => todo.id === action.payload? {...todo, completed: !todo.completed} : todo
                )
        
            case actions.DELETE:
                return state.filter(
                    todo => todo.id !== action.payload
                )

            case actions.SET:
                return action.payload

    default:
        return state;
    }

}