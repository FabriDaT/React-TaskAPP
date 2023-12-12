import "./ChangeAlert.css";
import React from "react";
import { useStorageListener } from "./useStorageListener";


function ChangeAlert({sincronize}) {

  const { show, toggleShow} = useStorageListener(sincronize)
  
  if (show) {
    return (
      <div className="ChangeAlert-bg">
      <div className="ChangeAlert-container">
        <p>¡Al parecer hubo cambios en otra pestaña!</p>
        <p>¿Deseas actualizar tus TODOs?</p>
        <button className="TodoForm-button TodoForm-button--add"
          onClick={()=>toggleShow()}
            // window.location.reload(true)  //window.location.reload(false)
        >
          Si !
        </button>
      </div>
      </div>
    );
  } else {
    return null;
  }
}



export { ChangeAlert };
