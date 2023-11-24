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


  // const customCSS = {
		
  //   backgroundColor: "rgb(156, 98, 59)",
  //   boxShadow:"0px 0px 5px 5px rgba(226, 96, 9, 0.466)",
  //   border: "none",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   fontSize: "60px",
  //   position: "fixed",
  //   bottom: "24%",
  //   fontWeight: "bold",
  //   color: "#fafafa",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "84px",
  //   width: "84px",
    
  //   transform: "rotate(0)",
  //   transition: "0.3s ease-in-out",
  // }
  

  return (
    <>

      <h2>!Crea tu primer TO-DO!</h2>
      <CreateTodoButton  className={handleClass}  /> 

    </>
   
  )
}


export {EmptyTodos}