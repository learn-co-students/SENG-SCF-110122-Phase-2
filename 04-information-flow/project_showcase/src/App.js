import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";
// we will now fetch projects from our db.json instead of importing this static array

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      {/* create button to trigger the event that will fetch our projects and sets projects state */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
      
      
      