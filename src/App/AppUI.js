import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'

function AppUI() {

  const  {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal} = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />



           <TodoList>

           {error && <p> Desesperate algo no esta funcionando!</p>}
           {loading && <p>No te desesperes, estamos cargando...</p>}
           {(!loading && !searchedTodos.length ) && <p>Crea tu primer TODO!</p>}
   
   
   
           {searchedTodos.map(todo => (
             <TodoItem
               key={todo.texto}
               text={todo.texto}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.texto)}
               onDelete={() => deleteTodo(todo.texto)}
             />
           ))}
         </TodoList>
        
       {  
        !!openModal && ( <Modal> <p> teletransportacion </p> </Modal> )
       }

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };