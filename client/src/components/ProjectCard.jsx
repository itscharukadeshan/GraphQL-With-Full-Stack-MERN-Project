/** @format */

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className='card card-side bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{project.name}</h2>
        <p>{project.description}</p>
        <div className='card-actions justify-end'>
          <div className='badge'>{project.status}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
