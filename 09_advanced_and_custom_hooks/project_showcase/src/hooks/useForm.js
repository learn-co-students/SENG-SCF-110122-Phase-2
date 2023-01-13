// Deliverables for our custom hook:
// useState hook => it is perfectly acceptable to nest hooks inside of custom hooks!
//handleChange
//update state and reset form
import { useState } from 'react'
// using export without default requires {} when importing
// x is our parameter of our initial form data object. Can now be used for anything including a log in form or a mailing list form.
export function useForm(x) {

const [formData, setFormData] = useState(x);

//will populate form fields for edit form
function populateFormValues(data) {
  setFormData(data)
}

// reset form back to its initial state (values are gonna be empty strings for controlled forms)
function reset() {
  setFormData(x)
}

//standard handleChange
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((formData) => ({ ...formData, [name]: value }));
};

 return {
  formData,
  populateFormValues,
  reset,
  handleChange
 }

}

// export default useForm