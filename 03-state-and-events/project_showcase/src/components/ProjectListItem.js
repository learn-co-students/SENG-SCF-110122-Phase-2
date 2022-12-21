import { useState } from 'react';

const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  const [claps, setClaps] = useState(0)
  
  // when i click on my clap button, i want my claps to increment by 1
  function handleClaps() {
    setClaps(prevState => prevState + 1)
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClaps}>👏{claps}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
