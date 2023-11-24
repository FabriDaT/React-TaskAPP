import React, { useEffect} from 'react'
import './EmptyTodos.css'
import { CreateTodoButton } from '../CreateTodoButton'



function EmptyTodos ( {setCustomCSSfromCreateButton , customCSSfromCreateButton} ) {

 

  const handleClass = useEffect(() => {
    // Operaciones que involucran setState
    // ...
    setCustomCSSfromCreateButton('CreateTodoButton-custom')
    // Limpieza (si es necesario)
    return () => {
      // Código de limpieza
      setCustomCSSfromCreateButton('CreateTodoButton')
    };
  }, [customCSSfromCreateButton]);
  

  return (
    <>

      <h2>!Crea tu primer TO-DO!</h2>
      <CreateTodoButton  className={handleClass}  /> 

    </>
   
  )
}


export {EmptyTodos}