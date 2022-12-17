

function ProjectListItem({project}) {
const {phase, id, about, image, link, name} = project
  
  return (
    <li>
      <figure>
        <img src={image} alt={name}/>
      </figure>
      <article>
        <h4>{name}</h4>
        <p>{about}</p>
      </article>
    </li>
  )
}

export default ProjectListItem