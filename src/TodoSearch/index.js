import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
import { BsSearch } from "react-icons/bs";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="container-input">
      <input
        className="TodoSearch"
        placeholder="Escribe para buscar..."
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <BsSearch className="icon" />
    </div>
  );
}

export { TodoSearch };
