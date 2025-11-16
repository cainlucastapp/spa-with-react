import { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import projectsData from './data/projects_data'
import SearchBar from './components/SearchBar'


import './App.css'


function App() {
  //State for project data
  const [projects, setProjects] = useState(projectsData)

  //State for search
  const [search, setSearch] = useState('')

  //handle search changes
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  //Search projects
  const projectsToDisplay = projects.filter((project) => {
    if (!search){
      return true;
    }
    return new RegExp(search, "i").test(project.title);
  });


  return (
    <>
      <Header />
      <SearchBar search= { search } onSearchChange={handleSearchChange}/>
      <ProjectList projects={projectsToDisplay}/>
    </>
  )
}

export default App
