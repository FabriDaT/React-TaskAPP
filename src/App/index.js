import './App.css';
import React, { useState } from "react";
import { AppUI } from './AppUI';

function App() {
//traemos nuestros todos almacenados
const localStorageTodos = localStorage.getItem('TODOS_V1')  
let parsedTodos;

if(!localStorageTodos){
  //si local storage esta vacio, osea es usuario nuevo, seteamos un "[]" (es un tipo texto con un array vacio) bajo el nombre de TODOS_V1 y a parsedTodos lo iniciamos con un array vacio
  localStorage.setItem('TODOS_V1', JSON.stringify([]))
  parsedTodos = []
}else{
  // si local storage no esta vacio asignamos a la var 'parsedTodos' lo que hay en local storage parseado a json
  parsedTodos = JSON.parse(localStorageTodos)
}


 const [searchValue , setSearchValue] = useState('')
 const [todos , setTodos] = useState(parsedTodos)

 const completedTodos = todos.filter(todo => !!todo.completed).length
 const totalTodos = todos.length

 let searchedTodos = []

 if (!searchValue.length >= 1) {
  searchedTodos = todos;
} else {
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
}

 const completeTodo = (text) =>{
  const todoIndex = todos.findIndex(todo => todo.texto === text)

  if (todoIndex !== -1) {
    const newTodos = [...todos]; // Clona el array antes de modificarlo
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

 }

 const deleteTodo = (text) =>{
  const todoIndex = todos.findIndex(todo => todo.texto === text)
  const newTodos = [...todos]
  newTodos.splice(todoIndex, 1)  
  setTodos(newTodos)
 }

  return (

    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;
