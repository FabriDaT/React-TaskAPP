import "./App.css";
import React, { useState, useEffect } from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
 const [loading , setLoading] = useState(true)
 const [error , setError] = useState(false)
 const [item, setItem] = useState(initialValue);


  useEffect(() => {
    setTimeout(() => {

    try {
             //traemos nuestros todos almacenados
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    //si local storage esta vacio, osea es usuario nuevo, seteamos un "initialValue" (es un tipo texto con un array vacio) bajo el nombre de itemName y a parsedItem lo iniciamos con un array vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    // si local storage no esta vacio asignamos a la var 'parsedItem' lo que hay en local storage parseado a json
    parsedItem = JSON.parse(localStorageItem);
  }
  //se actualiza la informacion con lo que hay guarado en el local storage
  setItem(parsedItem)
  setLoading(false)
    } catch (error) {
      setError(error)
    }

    }, 1500);
  
  })
  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch (error) {
      setError(error)
    }
    
  };

  return {
  
    item,
    saveItem,
    loading,
    error,
  }

}



function App() {
  const {  // renombrar con los elementos usando los 2 puntos.
    item : todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.texto === text);

    if (todoIndex !== -1) {
      const newTodos = [...todos]; // Clona el array antes de modificarlo
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.texto === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <AppUI
      loading={loading}
      error={error}
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
