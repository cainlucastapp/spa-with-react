import ProjectCard from './ProjectCard'

function ProjectList({projects}) {
  return (
    <>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectList