import Header from "./components/Header";
import Form from "./components/Form"
import ProjectList from "./components/ProjectList";
import projects from "./projects.js"

function App() {
  console.log(projects)
  return (
    <div>
      <div className="App">Project showcase
      <Header />
      <Form projects={projects}/>
      <ProjectList projects={projects}/>
      </div>
    </div>
  );
}

export default App;
