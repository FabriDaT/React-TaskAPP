import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {searchValue , setSearchValue} = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
  
    <input 
     className="TodoSearch"
     placeholder="Escribe para buscar..."
     onChange={onSearchValueChange}
     value={searchValue}
     />
    
  );
}

export { TodoSearch };