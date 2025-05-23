import './App.css';
import useUsuarios from './hooks/useUsuarios';
import { useState } from 'react';

const initValue2 =[{
  id: "123",
  username: "Mel"
}]

//USEEFFECT:

function App() {
//la logica va aca

//si voy a moficiar el estado uso USESTATE:
const {nombres, loading, peticionesDeUsuarios} = useUsuarios(); //con esto, traigo la data del comp. customizado
const [selection, setSelection] = useState(null);





//cada ves que paso un evento, que se vea en el console el nombre (el target me permite ver todos los datos )
const handlerClick = usuario => {
  setSelection(usuario);
  
}

const handlerReset = () => {setSelection(null)};


  return (
    //esto es lo que va a inyectarse en el virtual DOM, y me permite utilizar HTML y JS
    <>
  <div>
    {/*cada boton, cada vez que haga click, que cambi el nombre (que modifique el estado) */}
    {/* <button onMouseEnter={ ()=> setNombre("Santiago") }>Santi</button>
    <button onClick={ (e)=> handleClick(e) }>Martin</button>
    <button onClick={ ()=> setNombre("Melissa") }>Melissa</button> */}

{/* para no repetir el mismo codigo, lo que hago es crear un array de objetos, y luego lo recorro con un map */}
    <div>
    {loading && <p>Cargando...</p>} {/* si hay loading, que me muestre el cargando */}
    {!loading && nombres.map( 
      nombre => (<button 
      onClick={()=> handlerClick(nombre)} 
      key={nombre.id}
      >{nombre.username}</button>)
    )} {/* agregarle siempre una key para que sepa a donde apuntar*/}

{/* para resetarlo al valor inicial: */}
<button onClick={handlerReset}>Reset</button>
{/* para generar una accion, se usa los on... */}


  </div>

<hr />
    <p>Hola mundo</p>
    <p>{selection && selection.username}</p>
  </div>

    </>
  )
}

export default App
