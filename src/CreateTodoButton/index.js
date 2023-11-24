import React from "react";
import "./CreateTodoButton.css";


function CreateTodoButton(props) {


  const handleClick = () => {
    props.setOpenModal(prevState => !prevState)
  };

  const className = props.customCSSfromCreateButton ? 'CreateTodoButton-custom' : 'CreateTodoButton';


  return (
    <div className="containerCreateButton">
    <button className={className} onClick={handleClick}>
       +
    </button>
    </div>
  );
}

export { CreateTodoButton };
