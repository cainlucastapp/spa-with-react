function ProjectCard({ project }) {
  return (
    <>
      <div>
        <img src={project.image} alt={`Photo of ${project.name}`}></img>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard