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

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    setCustomCSSfromCreateButton,
    customCSSfromCreateButton,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <ErrorTodos error={error} />}
        {loading && <LoadingTodos />}
        {!loading && !searchedTodos.length && <EmptyTodos customCSSfromCreateButton={customCSSfromCreateButton}
         setCustomCSSfromCreateButton={setCustomCSSfromCreateButton} />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal} customCSSfromCreateButton={customCSSfromCreateButton} /*setCustomCSSfromCreateButton={
          searchedTodos.length>0 && setCustomCSSfromCreateButton('')}*/
      />
    </>
  );
}

export default App;
