import { useState } from 'react';
import './AddProjectForm.css';

function AddProjectForm({ onAddProject, projects }) {

  //Form state
  const [formData, setFormData] = useState({title: '', description: '', category: '', releaseDate: ''});


  //Handler input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  //Handler submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Split categories on submit
    const categoryArray = typeof formData.category === 'string' 
      ? formData.category.split(',').map(cat => cat.trim()).filter(cat => cat !== '')
      : formData.category;
    
    //Check if all required fields have content
    if (formData.title.trim() && 
        formData.description.trim() && 
        categoryArray.length > 0 && 
        formData.releaseDate) {

      //New ID
      const newId = projects.length + 1;

      //New project 
      const newProject = {
        id: newId,
        title: formData.title,
        description: formData.description,
        image: "/src/assets/comingsoon.png",
        category: categoryArray,
        releaseDate: formData.releaseDate,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      

      //Pass to state
      onAddProject(newProject);


      //Reset form
      setFormData({ title: '', description: '', category: '', releaseDate: '' });
    }
  };

  return (
    <>
      <div className="new-project container-bg">
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

          <div>
            <label htmlFor="category">Category (Separate By Comma)</label>
            <input className="bordered" type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} placeholder="RPG, Adventure, Action" required/>
          </div>

          <div>
            <label htmlFor="releaseDate">Release Date</label>
            <input className="bordered" type="date" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleInputChange} required/>
          </div>
          
          <button className="bordered" type="submit">Add Project</button>
        </form>
    </div>
    </>
  )
}

export default AddProjectForm;