import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI() {

  const  {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo} = useContext(TodoContext)

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
        
  

      <CreateTodoButton />
    </>
  );
}

export { AppUI };