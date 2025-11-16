import { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import projectsData from './data/projects_data'


import './App.css'

function App() {
  //State for project data
  const [projects, setProjects] = useState(projectsData)


  return (
    <>
      <Header />
      <ProjectList projects={projects}/>
    </>
  )
}

export default App
