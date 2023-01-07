import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("hi")}, 10000)
  //   console.log(id)

  //   return () => {
  //     console.log("cleaning up")
  //     clearInterval(id)
  //   }

  // }, [isDarkMode])

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  // create a function to update our projects => encapsulate setProjects()
  // .map over our projects
  // if(id === project.id) return newProj
  // otherwise, return og project
  // set State
  function onHandleUpdate(updatedProj) {
    const updatedProjects = projects.map(proj => {
      if(proj.id === updatedProj.id) return updatedProj
      else return proj
    })
    setProjects(updatedProjects)
  }

  function onHandleDelete(id) {
    // iterate over my projects. if we find the one we've deleted. filter it out. set State
    const updateProjects = projects.filter(proj => proj.id !== id)
    setProjects(updateProjects)
  }


  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onHandleUpdate={onHandleUpdate}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };



  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onHandleDelete={onHandleDelete}
      />
    </div>
  );
};

export default App;
