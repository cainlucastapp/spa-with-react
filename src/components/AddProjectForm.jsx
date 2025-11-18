import { useState } from 'react';

function AddProjectForm({ onAddProject, projects }) {

  //Form state
  const [formData, setFormData] = useState({title: '', description: ''});

  //Handler input change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Handler submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    //Check if both fields have content and removes spaces
    if (formData.title.trim() && formData.description.trim()) {

      //New ID
      const newId = projects.length + 1;

      //New project 
      const newProject = {
        id: newId,
        title: formData.title,
        description: formData.description,
        image: "/src/assets/comingsoon.png",
      }
      
      //Pass to state
      onAddProject(newProject);

      //Reset form
      setFormData({ title: '', description: '' });
    }
  }

  return (
    <>
      <div className="new-project bordered">
        <h2>-Add Project-</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input className="bordered" type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required/>
          </div>
          
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" className="bordered" name="description" value={formData.description} onChange={handleInputChange} rows="4" required/>
          </div>
          
          <button className="bordered" type="submit">Add Project</button>
        </form>
      </div>
    </>
  )
}

export default AddProjectForm;