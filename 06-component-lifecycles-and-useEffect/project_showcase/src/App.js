import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);


  const getProjects = () => {
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((projects) => setProjects(projects));
  }

  useEffect(() => {
      // console.log("use effect firing")
      getProjects()
  }, [])


  useEffect(() => {
    console.log("Magic 8 Ball, am i in dark mode? The answer is: ", isDarkMode)
  }, [isDarkMode])


  useEffect(() => {
    const intervalId = setInterval(() => {console.log("setting interval")}, 3000)
    console.log("id for this setInterval is: ", intervalId)

    return () => {
      console.log("cleaning up now")
      clearInterval(intervalId)
    }

  }, [isDarkMode])

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);


  if(!projects.length) return (<h1>...Loading....</h1>)

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
