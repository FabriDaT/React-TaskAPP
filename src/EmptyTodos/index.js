import React, {useContext, useEffect} from 'react'
import './EmptyTodos.css'
import { CreateTodoButton } from '../CreateTodoButton'



const EmptyTodos = ( {setCustomCSSfromCreateButton} ) => {

 

  const handleClass = useEffect(() => {
    // Operaciones que involucran setState
    // ...
    setCustomCSSfromCreateButton('custom')
    // Limpieza (si es necesario)
    return () => {
      // Código de limpieza
      setCustomCSSfromCreateButton('')
    };
  }, []);
  

  return (
    <>
    <CreateTodoButton className={handleClass}  />
    <h2>!Crea tu primer TO-DO!</h2>
    </>
   
  )
}

export {EmptyTodos}