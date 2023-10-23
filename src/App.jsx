import { useState } from "react";
import { createContext } from "react";
import Banner from "./Components/Banner";
import Todos from "./Components/Todos";

export const darkThemeContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // TODO: Func to add todo
  function addTodo(text) {
    const newTodo = {
      text: text,
      id: Date.now(),
      isComplete: false,
    };
    // console.log(newTodo)
    if (text) {
      setTodos([newTodo, ...todos]);
    }
  }
  // console.log("todos array:", todos);
  // TODO: Func to set todo to complete
  function setTodoComplete(todos, completedTodoId) {
    const objIndex = todos?.findIndex((todo) => todo.id === completedTodoId);
    const oldPropertyValue = todos[objIndex].isComplete;
    const updatedObject = { ...todos[objIndex], isComplete: !oldPropertyValue };
    todos[objIndex] = updatedObject;
    setTodos([...new Set([...todos, todos[objIndex]])]);
    // console.log("Todos after update:", todos);
  }
  // TODO: Func to return all todo items
  function returnAllTodos() {
    setTodos(todos);
  }
  // TODO: Func to return only completed todos
  function returnCompletedTodos() {
    const completedTodos = todos?.filter((todo) => todo.isComplete === true);
    console.log("Complete todos are:", completedTodos);
    setTodos(completedTodos);
  }
  // TODO: Func to return active(not completed todos)
  function returnIncompleteTodos() {
    const incompleteTodos = todos?.filter((todo) => todo.isComplete === false);
    // console.log("Active todos are:", incompleteTodos);
    setTodos(incompleteTodos);
  }

  // TODO: Func to delete todo item
  function deleteTodo(todos, deletedId) {
    // console.log("deleted id is:",deletedId)
    // console.log("todos array:", todos);
    const notDeletedTodos = todos?.filter((todo) => todo.id !== deletedId);
    // console.log("not deleted:", notDeletedTodos);
    setTodos(notDeletedTodos);
  }

  return (
    <div
      className={`${
        isDarkTheme ? "bg-[#161722]" : "bg-slate-100"
      } h-screen overflow-auto`}
    >
      <darkThemeContext.Provider
        value={{ isDarkTheme: isDarkTheme, setIsDarkTheme: setIsDarkTheme }}
      >
        <Banner addTodo={addTodo} />
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          displayAllTodos={returnAllTodos}
          displayActiveTodos={returnIncompleteTodos}
          displayCompletedTodos={returnCompletedTodos}
          setTodoComplete={setTodoComplete}
        />
      </darkThemeContext.Provider>
    </div>
  );
}

export default App;
