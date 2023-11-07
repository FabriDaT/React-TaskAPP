import React from "react";
import "./LoadingTodos.css";

const LoadingTodos = () => {
  return (
    <>
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text"> Cargando TODOs...</p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text"> Cargando TODOs...</p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text"> Cargando TODOs...</p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text"> Cargando TODOs...</p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
    </>
  );
};

export { LoadingTodos };
