import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton(props) {


 const { openModal, setOpenModal } = useContext(TodoContext);
  const { customCSSfromCreateButton , setCustomCSSfromCreateButton } = useContext(TodoContext);
  

  const handleClick = () => {
    props.setOpenModal(prevState => !prevState)
  };

  const className = customCSSfromCreateButton ? 'CreateTodoButton-custom' : 'CreateTodoButton';


  return (
    <button className={className} onClick={handleClick}>
       +
    </button>
  );
}

export { CreateTodoButton };
