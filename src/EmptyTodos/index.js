import React, {useContext} from 'react'
import './EmptyTodos.css'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from "../TodoContext";


const EmptyTodos = () => {

  const {setCustomCSSfromCreateButton } = useContext(TodoContext);

  return (
    <>
    <CreateTodoButton className={setCustomCSSfromCreateButton('custom')}  />
    <h2>!Crea tu primer TO-DO!</h2>
    </>
   
  )
}

export {EmptyTodos}