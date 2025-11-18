function ProjectCard({ project }) {
  return (
    <>
      <div aria-label="project card" className="project-card">
        <img className="thumbnail bordered" src={project.image} alt={`Photo of ${project.title}`}></img>
        <div className="content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;