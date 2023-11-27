import React, { useEffect} from 'react'
import './EmptyTodos.css'
import { CreateTodoButton } from '../CreateTodoButton'

function EmptyTodos ( ) {

  return (
    <>
    <div className='containerEmpty'>
      <h2>No tienes tareas, crea una nueva!</h2>
    </div>
    </>
   
  )
}

export {EmptyTodos} 
