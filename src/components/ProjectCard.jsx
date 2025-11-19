//Dependencies
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <>
      <div aria-label="project card" className="project-card">
        <img className="thumbnail bordered" src={project.image} alt={`Photo of ${project.title}`}></img>
        <div className="content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          {project.category && project.category.length > 0 && (
            <div className="categories">
              {project.category.map((cat, index) => (
                <span key={index} className="category-tag">{cat}</span>
              ))}
            </div>
          )}
          
          {project.releaseDate && (
            <p className="release-date">Release Date: {new Date(project.releaseDate).toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectCard;