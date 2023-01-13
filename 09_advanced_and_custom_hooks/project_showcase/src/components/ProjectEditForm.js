import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../App";

// we import useContext from react and also import the UserContext from App which provides us the data

const ProjectEditForm = ({ onUpdateProject }) => {

  const initialState = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  }

  //as with any hook we create a variable and set it equal to useContext(). We also pass as an argument the UserContext which we imported from App. Again, the provider. user is object destructuring from the value as passed in app
  const { user } = useContext(UserContext)

  const { formData, populateFormValues, handleChange } = useForm(initialState)
  

  const { name, about, phase, link, image } = formData;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((res) => res.json())
      .then((project) => populateFormValues(project));
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormState({ ...formState, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
      .then((resp) => resp.json())
      .then((updatedProj) => {
        onUpdateProject(updatedProj);
        history.push(`/projects/${id}`); // redirecting to a new route
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="about">About</label>
      <textarea id="about" name="about" value={about} onChange={handleChange} />

      <label htmlFor="phase">Phase</label>
      <select name="phase" id="phase" value={phase} onChange={handleChange}>
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
        <option value="4">Phase 4</option>
        <option value="5">Phase 5</option>
      </select>

      <label htmlFor="link">Project Homepage</label>
      <input
        type="text"
        id="link"
        name="link"
        value={link}
        onChange={handleChange}
      />

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <button type="submit">Update Project</button>
    </form>
  );
};

export default ProjectEditForm;
