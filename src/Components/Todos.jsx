// import React from 'react'
import { useContext } from "react";
import { darkThemeContext } from "../App";
import Item from "./Item";

const Todos = ({
  todos,
  deleteTodo,
  displayAllTodos,
  displayActiveTodos,
  displayCompletedTodos,
  setTodoComplete,
}) => {
  const darkThemeBody = useContext(darkThemeContext);
  // const todosArray = todos;
  // console.log(todos)
  return (
    // Navigation section
    <div
      className={`${ 
        darkThemeBody?.isDarkTheme ? "bg-[#393a4c]" : "bg-white"
      } rounded h-auto mx-auto  relative -top-12 w-[90%] lg:w-[35%] divide-solid divide-y 
      ${darkThemeBody?.isDarkTheme ? "divide-[#777a92]" : "divide-slate-400"}`}
    >
      <div
        className={`${
          darkThemeBody?.isDarkTheme ? "text-white" : "text-black"
        } flex justify-center gap-4 py-4`}
      >
        <button className="focus:font-bold" onClick={displayAllTodos}>
          All
        </button>
        <button className="focus:font-bold" onClick={displayActiveTodos}>
          Active
        </button>
        <button className="focus:font-bold" onClick={displayCompletedTodos}>
          Completed
        </button>
      </div>
      {todos?.map((todo, index) => (
        <Item
          key={index}
          todo={todo}
          todos={todos}
          deleteTodo={deleteTodo}
          setTodoComplete={setTodoComplete}
        />
      ))}

      {/* Bottom section of Todos */}
      <div className="flex justify-between items-center py-4 mx-3">
        <p className="text-slate-400">{`${todos?.length} item(s)`}</p>
        <button
          className="focus:font-bold text-sm text-slate-400"
          onClick={displayActiveTodos}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
