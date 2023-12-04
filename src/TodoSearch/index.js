import "./TodoSearch.css";
import { BsSearch } from "react-icons/bs";

function TodoSearch( { searchValue, setSearchValue, loading }) {
 

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
        disabled={loading}
      />
      <BsSearch className="icon" />
    </div>
  );
}

export { TodoSearch };
