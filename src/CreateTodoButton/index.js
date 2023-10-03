import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton(props) {


  const { openModal, setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    props.setOpenModal(prevState => !prevState)
  };



  return (
    <button className="CreateTodoButton" onClick={handleClick}>
       +
    </button>
  );
}

export { CreateTodoButton };
