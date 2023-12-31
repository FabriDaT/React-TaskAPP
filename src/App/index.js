import "./App.css";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ErrorTodos } from "../ErrorTodos";
import { LoadingTodos } from "../LoadingTodos";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert} from "../ChangeAlert"

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader   loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}  />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}  />  
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => ( <ErrorTodos /> )}
        onLoading={() => ( <LoadingTodos /> )}
        onEmptyTodos={() => ( <EmptyTodos />  )}
        onEmptySearchResults={(searchText) => 
          (<div className="container-EmptySearchResults">
            <p className="emptySearch">No hay resultados para:  {searchText}</p></div> )
        }

        render= { todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
       ) }
       
      />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        lengthList={searchedTodos.length}
      />

      <ChangeAlert  sincronize={sincronizeTodos}  />
      
    </>
  );
}

export default App;
