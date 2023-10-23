// import React from 'react'
import { useState, useContext } from "react";
import { BsMoonFill } from "react-icons/bs";
import { darkThemeContext } from "../App";
import { BsSunFill } from "react-icons/bs";

const Banner = ({ addTodo }) => {
  const darkThemeBody = useContext(darkThemeContext);
  // console.log("Dark theme body is:", darkThemeBody);
  const [text, setText] = useState("");
  // TODO: Func to handle theme change
  function changeThemeHandler() {
    darkThemeBody?.setIsDarkTheme(!darkThemeBody?.isDarkTheme);
  }
  // TODO: Func to add todo to todos array
  function handleAddBtnClick(e) {
    e.preventDefault();
    addTodo(text);
    // console.log(text);
    setText("");
  }

  return (
    <div
      className={`${
        darkThemeBody?.isDarkTheme
          ? "bg-hero-image-dark"
          : "bg-hero-image-light"
      } mt-0 bg-cover bg-no-repeat h-[15rem] text-center`}
    >
      <div className="pt-[3em] text-white flex justify-between mx-auto w-[90%] align-center lg:w-[35%]">
        <h1 className="font-bold  text-3xl tracking-[0.5em]">TODO</h1>
        {darkThemeBody?.isDarkTheme ? (
          <BsSunFill className="w-7 h-7" onClick={changeThemeHandler} />
        ) : (
          <BsMoonFill className="w-7 h-7" onClick={changeThemeHandler} />
        )}
      </div>
      <div
        className={`${
          darkThemeBody?.isDarkTheme ? "bg-[#393a4c]" : "bg-white"
        } flex w-[90%] justify-between  py-2 px-2 rounded mx-auto mt-10 lg:w-[35%]`}
      >
        {/* <form className="flex justify-between"> */}
        <input
          value={text}
          type="text"
          className={`${
            darkThemeBody?.isDarkTheme ? "bg-[#393a4c]" : "bg-white"
          } 
          ${darkThemeBody?.isDarkTheme ? "text-[#777a92]" : "text-black"}
          focus:outline-none  placeholder:text-[#777a92]`}
          placeholder="Add todo item..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded text-white py-1 px-4 "
          onClick={handleAddBtnClick}
        >
          Add
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Banner;
