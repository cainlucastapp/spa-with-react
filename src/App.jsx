//Dependencies
import { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import projectsData from './data/projects_data';
import SearchBar from './components/SearchBar';
import AddProjectForm from './components/AddProjectForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  //State for project data
  const [projects, setProjects] = useState(projectsData);

  //State for search
  const [search, setSearch] = useState('');

  //Handler for search changes
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  //Search projects by title and description
  const projectsToDisplay = projects.filter((project) => {
    if (!search){
      return true;
    }
    const regex = new RegExp(search, "i");
    return regex.test(project.title) || regex.test(project.description) || regex.test(project.category);
  });

  //Handler for adding projects
  const handleAddProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="app-content">
          <Header/>
          <AddProjectForm projects={projects} onAddProject={handleAddProject}/>
          <div className="project-container container-bg">
            <SearchBar search={search} onSearchChange={handleSearchChange}/>
            <ProjectList projects={projectsToDisplay}/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;