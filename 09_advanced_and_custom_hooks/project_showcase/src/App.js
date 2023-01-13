import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";

// UserContext variable allows us to attach the Provider and create the Higher Order Component to wrap children in.value prop is also required to pass data to components that want to acces it" => see lines 63 and 81 => <UserContext.Provider value={user}> - we are accessing this data inside of ProjectEditForm
export const UserContext = React.createContext("")

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState("")
  const [userSubmitted, setUserSubmitted] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  function handleSubmit(e){
    e.preventDefault()
    setUserSubmitted(x => !x)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {userSubmitted ? null : (<form onSubmit={handleSubmit}>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
            <input type="password" />
            <button type="submit">Login</button>
          </form>)}
    <UserContext.Provider value={{user}}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/new">
          <ProjectForm onAddProject={onAddProject} />
        </Route>
        <Route path="/projects/:id/edit">
          <ProjectEditForm onUpdateProject={onUpdateProject} />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        <Route path="/projects">
          <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
        </Route>
      </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default App;
