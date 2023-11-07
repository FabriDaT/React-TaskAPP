import React from "react";
import "./TodoItem.css";
import { LuCheckCircle,LuDelete } from 'react-icons/lu'

function TodoItem({text, completed, onComplete, onDelete}) {

 
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <LuCheckCircle />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text} 
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}
      >
        <LuDelete />
        </span>
    </li>
  );
}

export { TodoItem };
