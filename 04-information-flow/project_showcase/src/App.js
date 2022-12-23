import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState } from 'react';

// import projects from "./projects";
// we will now fetch projects from our db.json instead of importing this static array

const App = () => {

  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [word, setWord] = useState("the weather outside is frightful")

  function handleUpdateWord(text) {
    setWord(text)
  }

  function changeDarkMode() {
    setIsDarkMode(prevState => !prevState)
  }

  function fetchProjects() {
    //i need to run fetch to get my projects, once they're returned and parsed into JS (from json), setProjects
    fetch('http://localhost:4000/projects')
    .then(response => response.json())
    .then(data => {
      setProjects(data)})
  }

  return (
    <div className={isDarkMode ? "App": "App light"}>
      <Header isDarkMode={isDarkMode} handleClick={changeDarkMode} handleUpdateWord={handleUpdateWord}/>
      <ProjectForm />
      {/* create button to trigger the event that will fetch our projects and sets projects state */}
      <button onClick={fetchProjects}>Click Here To Fetch Projects</button>
      <ProjectList projects={projects} word={word}/>
    </div>
  );
};

export default App;
      
      
      