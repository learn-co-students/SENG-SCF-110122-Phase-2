import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  const handleUpdateProjects = (newProj)=> {
    setProjects((prevProjects) => [...prevProjects, newProj])
  }

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm handleUpdateProjects={handleUpdateProjects}/>
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
