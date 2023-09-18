import React from 'react'
import './CreateTodoButton.css'


function CreateTodoButton(props) {

  const onClickFunction = (msj) => {
    alert(msj)
  }


  return (
    <button className='CreateTodoButton'
    onClick={()=>onClickFunction('Aqui deberia haber un modal')}
    
    > + </button>
  )
}

export {CreateTodoButton}