import { useState } from "react";


const Header = () => {

  const [isDarkMode, setIsDarMode] = useState(true)
  
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode"

  const handleClick = () => {
    setIsDarMode(prevState => !prevState)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
