import React, { useContext } from "react";
import './TodoCounter.css';


function TodoCounter( {completedTodos, totalTodos, loading}) {
    
    return(
        <div className={`containerTodoCounter ${!!loading && 'containerTodoCounter--loading'}`}>
             <h3  className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
                Has completado {completedTodos} de {totalTodos} Tareas.
            </h3>
        </div>
       
    )
    
}

export  {TodoCounter} ;