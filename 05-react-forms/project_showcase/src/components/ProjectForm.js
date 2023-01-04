import { useState } from "react";

const ProjectForm = ({handleUpdateProjects}) => {

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  })

  // turn form into a controlled form
  // [x] 1. useState to hold our form data
  // 2.[x] onChange to update our state (changeHandler function)
  // 2.5 [x] check out our name attributes and make sure they match the keys in our object.
  // 3. [x] value attribute
  // 4. [x] we are going to use inverse data flow to send our new project up to App. App will update state.

  // 5. do a fetch to update our database
  function handleChange(e){
    const { name, value } = e.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // do my fetch
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newProject => handleUpdateProjects(newProject))

    setFormData({
      name: "",
      about: "",
      phase: "",
      link: "",
      image: ""
    })
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" onChange={handleChange} value={formData.about}/>

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" onChange={handleChange} value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" onChange={handleChange} value={formData.link}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleChange} value={formData.image}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
