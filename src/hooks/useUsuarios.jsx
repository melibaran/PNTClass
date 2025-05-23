//ESTO ES UN COSTUM HOOK
//es una funcion que empieza con use y que puede tener un return de un objeto o un array
//para encapsular la logica de un componente, y separar la logica de la vista
import React from 'react'
const userAPIURI = 'https://jsonplaceholder.typicode.com/users';
import { useEffect, useState } from 'react';


export const useUsuarios = () => {

    const [nombres,setNombres] = useState([]);
    const [loading, setLoading] = useState(true);

    const peticionesDeUsuarios = () => {
        //traer los datos de la API
      fetch(userAPIURI)
      .then(res => res.json())
      .then(usuarios =>{
        //le puedo agregar un setTimeout para que la persona vea la carga (que tarde un poco de tiempo)
        setTimeout(() =>{
          setNombres(usuarios)
          setLoading(false); //le agrego el loading para que tdv no se cargo la data
        }, 3_000)
        } 
      )
      .catch(e => console.log({error: e.message})
      )
    }

    
    useEffect(() => {
        peticionesDeUsuarios()
    },[])

    return {
        nombres,
        loading,
        peticionesDeUsuarios
    }
}

export default useUsuarios
