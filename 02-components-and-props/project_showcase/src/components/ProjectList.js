import React from "react"
import ProjectListItem from "./ProjectListItem"


function ProjectList({projects}) {

  const renderItems = projects.map(project => <ProjectListItem key={project.id} project={project}/>)

  return (
    <>
    <h3>ProjectList</h3>
      {renderItems}
    </>
  )
}

export default ProjectList