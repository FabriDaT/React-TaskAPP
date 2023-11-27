import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal ,lengthList}) => {

  const handleClick = () => {
    setOpenModal(prevState => !prevState)
  };

 
  return (
    <div className="containerCreateButton">
      <button className={lengthList===0 ?'CreateTodoButton-custom' : "CreateTodoButton"}
        onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
