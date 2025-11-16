import { useState } from 'react'

function AddProjectForm({ onAddProject, projects }) {

  //Form state
  const [formData, setFormData] = useState({title: '', description: ''});

  //Handler imput change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  //Hanlder submit
  const handleSubmit = (event) => {
    event.preventDefault()
    
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
      
      onAddProject(newProject)
      setFormData({ title: '', description: '' })
    }
  }

  return (
    <>
      <div className="new-project">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required/>
          </div>
          
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="4" required/>
          </div>
          
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
  )
}

export default AddProjectForm