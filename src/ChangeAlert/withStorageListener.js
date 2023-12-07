import React, { useEffect, useState } from 'react'

// High Order Component
function withStorageListener(WrappedComponent)  {

  return function WrappedComponenteWithStorageListener(props){

    const [storageChange, setStorageChange] = useState(false)


    useEffect( () => {
        const onChange = (change) => {
            if (change.key === "TODOS_V1") {
              console.log("Hubo cambios en TODOS_V1");
              setStorageChange(true);
            }
          }
    
          window.addEventListener("storage", onChange);
    
      return () => {
        window.removeEventListener("storage", onChange)
    }, [storageChange] })
    
  

    const toggleShow = () => {
        props.sincronize()
        setStorageChange(false)
    }

    return (  <WrappedComponent 
    show={storageChange}
    toggleShow={setStorageChange}
    />  
    ) 
  }
    
  
}

export  {withStorageListener}