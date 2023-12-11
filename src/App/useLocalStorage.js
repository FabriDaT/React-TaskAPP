 // eslint-disable-next-line
import React, { useEffect, useState } from 'react'

// custom hook propio para el  uso del local storage
function useLocalStorage(itemName, initialValue) {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(false)
    const [item, setItem] = useState(initialValue);
    const [sincronizedItem, setSincronizedItem] = useState(true);
   
   
     useEffect(() => {
       setTimeout(() => {
   
       try {
                //traemos nuestros ToDos almacenados
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
     setSincronizedItem(true)
       } catch (error) {
         setError(error)
       }
   
       }, 2000);
     
     }, [sincronizedItem])
     
   
     const saveItem = (newItem) => {
       try {
         const stringifiedItem = JSON.stringify(newItem);
       localStorage.setItem(itemName, stringifiedItem);
       setItem(newItem);
       } catch (error) {
         setError(error)
       }
       
     };
   
     const sincronizeItem = () =>{
      setLoading(true)
      setSincronizedItem(false)
     }

     return {
     
       item,
       saveItem,
       loading,
       error,
       sincronizeItem,
     }
   
   }
   


   export {useLocalStorage }