// import React from 'react'
import { useContext } from "react";
import { darkThemeContext } from "../App";
import { MdCancel } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Item = ({ todos, todo, deleteTodo, setTodoComplete }) => {
  const darkThemeBody = useContext(darkThemeContext);
  // TODO: Func to handele delete icon click
  function handleDeleteIconClick() {
    const deletedId = todo.id;
    deleteTodo(todos, deletedId);
    // console.log("item id is:", todo.id)
  }
  // TODO: Func to handle Todo completion
  function handleTodoCompletionIconsClick() {
    const completedTodoId = todo.id;
    setTodoComplete(todos, completedTodoId);
  }
  return (
    <div>
      <div className="flex justify-between items-center mx-3 my-4">
        <div className="flex gap-2 items-center">
          {todo?.isComplete ? (
            <MdCheck
              className={`${
                darkThemeBody?.isDarkTheme
                  ? "text-[#777a92]"
                  : "text-indigo-500"
              }  h-4 w-4`}
              onClick={handleTodoCompletionIconsClick}
            />
          ) : (
            <MdCancel
              className={`${
                darkThemeBody?.isDarkTheme
                  ? "text-[#777a92]"
                  : "text-indigo-500"
              }  h-4 w-4`}
              onClick={handleTodoCompletionIconsClick}
            />
          )}
          <p
            className={`${todo?.isComplete && "line-through"} ${
              darkThemeBody?.isDarkTheme ? "text-white" : "text-black"
            } `}
          >
            {todo?.text}
          </p>
          {/* {todos.map((todo,index) => (<p key={index}>{todo.text}</p>))} */}
        </div>
        <MdDeleteForever
          className={`${
            darkThemeBody?.isDarkTheme ? "text-[#777a92]" : "text-red-500"
          }  h-5 w-5`}
          onClick={handleDeleteIconClick}
        />
      </div>
    </div>
  );
};

export default Item;
