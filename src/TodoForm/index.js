import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Comprar verduras para el almuerzo..."
      ></textarea>

      <div className="TodoForm-ButtonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-Button--Cancel"
        >
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-Button--Add">
          Añadir Tarea
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
