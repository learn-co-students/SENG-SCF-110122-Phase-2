import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  const [ searchTerm, setSearchTerm ] = useState("")

  //use our searchTerm to filter thru our projects
  const filteredProjects = projects.filter(proj => proj.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
  // then call .map on the filtered array

  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }



  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleChange}/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
