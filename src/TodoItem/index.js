import React from "react";
import "./TodoItem.css";

function TodoItem({texto, completed, onComplete, onDelete}) {

 
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {texto} asdf
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}
      >
        X</span>
    </li>
  );
}

export { TodoItem };
