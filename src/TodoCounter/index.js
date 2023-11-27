import React, { useContext } from "react";
import './TodoCounter.css';


function TodoCounter( {completedTodos, totalTodos}) {
    
    return(
        <div className="containerTodoCounter">
             <h3  className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas.</h3>
        </div>
       
    )
    
}

export  {TodoCounter} ;