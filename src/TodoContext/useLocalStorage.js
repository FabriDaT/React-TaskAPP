import React, { useEffect, useState } from 'react'

// custom hook propio para el  uso del local storage
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
   


   export {useLocalStorage }