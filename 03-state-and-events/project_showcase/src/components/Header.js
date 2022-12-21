import { useState } from "react";

function Header() {

  const [ isDarkMode, setIsDarkMode ] = useState(true)

  // array destructuring (order matters because... array):
  // const [ one, two, three ] = [1,2,3]
  // console.log(two)

  // object destructuring (order does not matter because... object):
  // const {age, name} = {name: "Shelby", age: undefined}
  // console.log("name: ", name)
  // console.log("age: ", age)

  
  // when I click the button, I want the text to toggle from Dark Mode to Light Mode
  function handleClick() {
    setIsDarkMode(prevState => !prevState)
  }
// console.log(isDarkMode, "this component is re-rendering")

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
