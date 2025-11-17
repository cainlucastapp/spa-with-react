function ProjectCard({ project }) {
  return (
    <>
      <div aria-label="project card" className="ui card">
        <img className="thumbnail" src={project.image} alt={`Photo of ${project.title}`}></img>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard;