import React from "react";
import "./CreateTodoButton.css";


function CreateTodoButton({setOpenModal, customCSSfromCreateButton}) {


  const handleClick = () => {
    setOpenModal(prevState => !prevState)
  };

  const className = customCSSfromCreateButton ? 'CreateTodoButton-custom' : 'CreateTodoButton';


  return (
    <div className="containerCreateButton">
    <button className={className} onClick={handleClick}>
       +
    </button>
    </div>
  );
}

export { CreateTodoButton };
