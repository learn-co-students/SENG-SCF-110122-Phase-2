import { useState } from "react";


const Header = ({isDarkMode, handleClick, handleUpdateWord}) => {
  let sun = "\u{1F324}", moon = "\u{1F319}"
  const buttonTextContent = isDarkMode ? sun : moon


  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <input type="text" onChange={(e) => handleUpdateWord(e.target.value)}/>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
